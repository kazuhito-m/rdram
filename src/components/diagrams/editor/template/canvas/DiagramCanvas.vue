<template lang="html">
  <div ref="convasContainer" class="canvas-container">
    <div :id="canvasId" ref="canvasBase" class="diagram-canvas" />

    <CanvasSettingToolBar
      :diagramId="diagramId"
      :canvasGuideType="canvasGuideType"
      @onChangeZoomBySlider="onChangeZoomBySlider"
      @onChangeCanvasGuideType="onChangeCanvasGuideType"
      @onPngDownload="onPngDownload"
      @onSvgDownload="onSvgDownload"
      @onDiagramExport="onDiagramExport"
      @onOpendDiagramPropertiesEditor="onOpendDiagramPropertiesEditor"
    />

    <ConnectorRightClickMenuAndEditor
      :visible="visibleConnectorMenu"
      :relation="targetRelation"
      :menuPositionX="menuX"
      :menuPositionY="menuY"
      @onUpdateRelation="onUpdateRelation"
      @onDeleteRelation="onDeleteRelation"
    />

    <IconToolTip ref="iconToolTip" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Emit,
  Inject,
  Watch,
} from 'vue-property-decorator'

import draw2d, { Figure, Port } from 'draw2d'
import 'jquery'
import 'jquery-ui'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'

import DefaultIconGenerator from '../icon/DefaultIconGenerator'
import IconViewModel from './IconViewModel'
import ZoomValueOnDraw2d from './ZoomValueOnDraw2d'
import AbsolutePosition from './AbsolutePosition'
import IconToolTip from './IconToolTip.vue'
import CanvasSettingToolBar from '@/components/diagrams/editor/toolbar/CanvasSettingToolBar.vue'
import ConnectorRightClickMenuAndEditor from '@/components/diagrams/editor/template/canvas/ConnectorRightClickMenuAndEditor.vue'

import EventAnalyzer from '@/components/diagrams/editor/template/event/EventAnalyzer'
import Draw2dCanvasGuideType from '@/components/diagrams/editor/toolbar/Draw2dCanvasGuideType'
import RouterTypeDraw2dConverter from '@/components/diagrams/editor/template/RouterTypeDraw2dConverter'
import IconGenerator from '@/components/diagrams/icon/IconGenerator'
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar'

import Product from '@/domain/product/Product'
import Diagram from '@/domain/diagram/Diagram'
import Resources from '@/domain/resource/Resources'
import Resource from '@/domain/resource/Resource'
import ResourceType from '@/domain/resource/ResourceType'
import Relation from '@/domain/relation/Relation'
import StorageRepository from '@/domain/storage/StorageRepository'
import Placement from '@/domain/diagram/placement/Placement'
import DownloadCustomFile from '@/domain/client/DownloadCustomFile'
import DownloadFileName from '@/domain/client/DownloadFileName'
import RdramDownloadFileName from '@/domain/client/WithTimestampFileName'
import ClientDownloadRepository from '@/domain/client/ClientDownloadRepository'
import DiagramExportService from '@/application/service/diagram/export/DiagramExportService'
import DragAndDropResourceType from '@/components/diagrams/editor/template/dad/DragAndDropResourceType'
import DragAndDropResourceId from '@/components/diagrams/editor/template/dad/DragAndDropResourceId'

@Component({
  components: {
    CanvasSettingToolBar,
    ConnectorRightClickMenuAndEditor,
    IconToolTip,
  },
})
export default class DiagramCanvas extends Vue {
  @Prop({ required: true })
  readonly diagram!: Diagram // id以外は初期表示用にしか使わない前提。

  @Prop({ required: true })
  private readonly usedResouceIds!: number[]

  @Prop({ required: true })
  private readonly allResources!: Resource[]

  @Prop({ required: true })
  private readonly lastPropertiesUpdatedDiagramId!: number

  @Prop({ required: true })
  private readonly removedRelationIdsForNotify!: string[]

  @Prop({ required: true })
  private readonly iconMap!: { [key: string]: IconFontAndChar }

  @Prop({ required: true })
  private readonly eventAnalyzer!: EventAnalyzer

  @Prop({ required: true })
  private readonly iconGenerators!: IconGenerator<Resource>[]

  // This class fields.

  @Inject()
  private repository!: StorageRepository

  @Inject()
  private clientDownloadRepository!: ClientDownloadRepository

  @Inject()
  private diagramExportService!: DiagramExportService

  private readonly routerConverter = new RouterTypeDraw2dConverter()

  private canvas!: draw2d.Canvas
  canvasId!: string
  canvasGuideType = Draw2dCanvasGuideType.なし

  private lastResourcesCache: Map<number, Resource> | null = null

  visibleConnectorMenu = false
  targetRelation: Relation | null = null
  menuX = 0
  menuY = 0

  private dropXOnCanvas = 0
  private dropYOnCanvas = 0

  private initialized = false

  // Properties.

  private zoom(): number {
    const zoom = this.canvas.getZoom()
    return ZoomValueOnDraw2d.of(zoom).value
  }

  get diagramId(): number {
    return this.diagram.id
  }

  // Events

  // This view callback(Emit).

  @Emit('onUpdateResources')
  private onUpdateResources(): void {}

  @Emit('onMergePlacement')
  private onMergePlacement(_diffTarget: Placement[]) {}

  @Emit('onOpendDiagramPropertiesEditor')
  onOpendDiagramPropertiesEditor(_diagramId: number): void {}

  @Emit('onShowWarnBar')
  private onShowWarnBar(_text: string): void {}

  @Emit('onShowResourceMenu')
  private onShowResourceMenu(
    _resource: Resource,
    _x: number,
    _y: number
  ): void {}

  @Emit('onEditResource')
  private onEditResource(_resourceId: number): void {
    this.closeIconToolTip()
  }

  @Emit('onOpenResourceEditorWhenCreate')
  private onOpenResourceEditorWhenCreate(_resourceType: ResourceType): void {}

  @Emit('onShowConnectorMenu')
  private onShowConnectorMenu(): void {}

  // Watch event.

  @Watch('lastPropertiesUpdatedDiagramId')
  private onUpdatedDiagramProperties(): void {
    const diagramId = this.diagramId
    if (diagramId !== this.lastPropertiesUpdatedDiagramId) return

    const diagram = this.loadDiagram()

    const c = this.canvas
    if (c.getWidth() === diagram.width && c.getHeight() === diagram.height)
      return

    this.reverceSyncCavansDeleteThings()
    this.canvas.setDimension(diagram.width, diagram.height)
    this.onMergePlacement(diagram.placements)
    this.onChangeZoomBySlider(this.zoom() + 0.001) // 再描画がうまく行くHack
  }

  @Watch('allResources')
  private onChangeResourcesOnProduct(): void {
    if (!this.lastResourcesCache) return

    const nowResources = this.allResources
    const cache = this.lastResourcesCache
    const whenResouce = nowResources.length < cache.size
    if (whenResouce) {
      this.reverceSyncCavansDeleteThings()
    } else {
      const modifies = nowResources.filter((r) => cache.get(r.resourceId) !== r)
      this.redrawIcons(modifies)
    }

    this.cacheNowResources()
  }

  @Watch('usedResouceIds')
  private onChangeUsedResouceIds(): void {
    this.reverceSyncCavansDeleteThings()
  }

  @Watch('removedRelationIdsForNotify')
  private onChangeRemovedRelationIdsForNotify() {
    this.removedRelationIdsForNotify
      .forEach(this.deleteConnectionOf);
  }

  @Watch('visibleConnectorMenu')
  private onChangeVisibleConnectorMenu(): void {
    if (this.visibleConnectorMenu) this.onShowConnectorMenu()
  }

  // Vue events.(life cycle events)

  created(): void {
    this.canvasId = 'canvas' + this.diagramId
  }

  mounted() {
    this.withLoadingScreen(() => {
      this.initialize()
    })
  }

  private initialize(): void {
    this.cacheNowResources()

    const diagram = this.diagram
    const guideType = Draw2dCanvasGuideType.of(diagram.canvasGuideType)

    this.showCanvas()
    this.fixCanvasPosition()
    this.addCanvasEvent()
    this.drawDiagram(diagram)
    this.onChangeCanvasGuideType(guideType)
  }

  // public by other diarogs

  showWarnBar(text: string): void {
    this.onShowWarnBar(text)
  }

  // right click menu events.

  onDeleteRelation(relation: Relation): void {
    this.deleteRelation(relation.id);
  }

  onUpdateRelation(relation: Relation): void {
    const connection = this.canvas.getLine(relation.id)
    if (!connection) return

    this.decorateConnection(connection, relation)

    connection
      .getChildren()
      .asArray()
      .forEach((c: Figure) => connection.remove(c))
    this.addConnectionLabel(connection, relation)

    this.transactionOf((diagram, _product) => {
      return diagram.modifyRelationOf(relation)
    })
  }

  // from Toolbar events.

  onChangeZoomBySlider(zoom: number) {
    this.canvas.setZoom(zoom, false)
  }

  onChangeCanvasGuideType(canvasGuideType: Draw2dCanvasGuideType): void {
    const canvas = this.canvas
    const beforeDraw2dCanvasGuideType = this.canvasGuideType
    if (beforeDraw2dCanvasGuideType.canvasPolicy)
      canvas.uninstallEditPolicy(beforeDraw2dCanvasGuideType.canvasPolicy)
    if (canvasGuideType.canvasPolicy)
      canvas.installEditPolicy(canvasGuideType.canvasPolicy)
    // 「何故か、背景が真っ黒になってしまう」対策。ちょーーっとだけリサイズする。
    // …こんなワークアラウンドのほうが安定するからしゃーない。
    canvas.setZoom(this.zoom() - 0.001, false)

    this.canvasGuideType = canvasGuideType
  }

  onPngDownload(): void {
    const product = this.repository.getCurrentProduct()
    const diagram = product!.diagrams.of(this.diagramId)
    if (!diagram) return

    const fileName = this.makeDownloadFileName(diagram, 'png')
    const writer = new draw2d.io.png.Writer()
    writer.marshal(this.canvas, (png: string) => {
      this.clientDownloadRepository.registerBase64PngImage(png, fileName)
    })
  }

  onSvgDownload(): void {
    const product = this.repository.getCurrentProduct()
    const diagram = product!.diagrams.of(this.diagramId)
    if (!diagram) return

    const fileName = this.makeDownloadFileName(diagram, 'svg')
    const writer = new draw2d.io.svg.Writer()
    writer.marshal(this.canvas, (svg: string) => {
      const withFontSvg = this.includeWebFont(svg)
      const file = new DownloadCustomFile(
        fileName,
        'image/svg+xml',
        withFontSvg
      )
      this.clientDownloadRepository.register(file)
    })
  }

  onDiagramExport(): void {
    this!.diagramExportService.downloadExportFileOnClient(this.diagramId)
  }

  // Canvas Events

  private onDropCanvas(event: DragEvent) {
    event.preventDefault()

    const zoom = this.zoom()
    this.dropXOnCanvas = event.offsetX * zoom
    this.dropYOnCanvas = event.offsetY * zoom

    const textData = event.dataTransfer?.getData('text/plain')
    if (!textData) return
    const ddrt = DragAndDropResourceType.prototypeOf().parseOf(textData)

    // 新規追加時。
    if (!ddrt.isInvalid()) {
      const resourceType = ddrt.id()
      if (!resourceType) return
      this.onOpenResourceEditorWhenCreate(resourceType)
      return
    }

    const ddri = DragAndDropResourceId.prototypeOf().parseOf(textData)
    if (ddri.isInvalid()) return

    const product = this.repository.getCurrentProduct() as Product
    const diagram = product.diagrams.of(this.diagramId)
    if (!diagram) return

    const resource = product.resources.of(ddri.id())
    if (!resource) return

    this.addPlacement(resource)
  }

  private onDropOverCanvas(event: DragEvent): void {
    event.preventDefault()
  }

  private onCanvasCommandExecute(event: any): void {
    if (!event.isPostChangeEvent()) return
    const rootCommand = event.getCommand()

    const analyzeResutEvents = this.eventAnalyzer.analyze(rootCommand)
    if (analyzeResutEvents.isNothing()) return

    this.transactionOf((diagram, product) => {
      if (!analyzeResutEvents.validate(diagram, product, this)) return null
      return analyzeResutEvents.apply(diagram, product, this)
    })
  }

  onClickConnectorOnCanvas(x: number, y: number) {
    const canvas = this.canvas
    const foundFigure = canvas.getBestFigure(x, y, [], [])
    if (!foundFigure) return
    const product = this.repository.getCurrentProduct()
    if (!product) return
    const diagram = product.diagrams.of(this.diagramId)
    if (!diagram) return
    const targetRelation = diagram.relationOf(foundFigure.id)
    if (!targetRelation) return
    const zoom = this.zoom()
    const absoluteX = canvas.getAbsoluteX() + x / zoom
    const absoluteY = canvas.getAbsoluteY() + y / zoom
    this.showConnectorRightClickMenu(targetRelation, absoluteX, absoluteY)
  }

  // Initialize methods

  private showCanvas(): void {
    const canvas = new draw2d.Canvas(
      this.canvasId,
      Diagram.MAX_WIDTH,
      Diagram.MAX_HEIGHT
    )
    canvas.installEditPolicy(new draw2d.policy.canvas.CoronaDecorationPolicy())
    canvas.installEditPolicy(new draw2d.policy.canvas.ShowGridEditPolicy(-1))
    canvas.installEditPolicy(new draw2d.policy.canvas.ExtendedKeyboardPolicy())

    // XXX 多分必要だと思うのだけど、実害がないので一旦消す。
    // これで「スクロールの元と成るオブジェクトがわからなくなる」のだとは思うが、
    // canvasのスクロールを制御するコードがまだないので、このままにしておく。
    // 必要になったらここを思い出すこと。(無理だろ…)
    //
    // const editorPane = this.$refs.editorPane as HTMLElement;
    // editorPane.id = `editorPane${this.diagramId}`;
    // canvas.setScrollArea(`#${editorPane.id}`);

    this.canvas = canvas
  }

  private drawDiagram(diagram: Diagram) {
    diagram.placements.forEach((p) => this.usedResouceIds.push(p.resourceId))

    const allResources = new Resources(this.allResources)

    const iconViewModels = diagram.placements
      .filter((placement) => allResources.existsIdOf(placement.resourceId))
      .map((placement) =>
        this.generateIcon(
          allResources.of(placement.resourceId) as Resource,
          placement
        )
      )
      .filter((icon) => icon)
      .map((icon) => new IconViewModel(icon as Figure))

    this.canvas.setDimension(diagram.width, diagram.height)

    iconViewModels
      .sort(IconViewModel.compare)
      .map((vm) => vm.icon)
      .forEach((icon) => this.canvas.add(icon))

    diagram.allRelations().forEach(this.addConnection)
  }

  // self decralation event.

  // UI controll.

  private addResouceIconToCanvas(
    resource: Resource,
    placement: Placement
  ): void {
    const icon = this.generateIcon(resource, placement)
    if (!icon) return

    this.canvas.add(icon)
    this.fixZOrder(icon)
  }

  private generateIcon(
    resource: Resource,
    placement: Placement
  ): Figure | null {
    const type = resource.type
    const generator = this.choiceIconGenerator(type)

    const icon = generator.generate(placement, resource, this.iconStyleOf(type))
    this.setIconEventHandler(icon, resource)
    return icon
  }

  private setIconEventHandler(
    icon: draw2d.Figure,
    resource: Resource,
    topIcon: draw2d.Figure | null = null
  ): void {
    const tIcon = (topIcon || icon) as Figure

    icon.onContextMenu = (x, y) => this.showResourceMenu(resource, x, y)
    icon.onDoubleClick = () => this.onEditResource(resource.resourceId)

    icon.onMouseEnter = () => this.showIconToolTip(resource, tIcon)
    icon.onMouseLeave = () => this.closeIconToolTip()
    icon.on('move', () => this.moveIconToolTip(tIcon), undefined)

    const children = icon.getChildren()
    for (let i = 0; i < children.getSize(); i++)
      this.setIconEventHandler(children.get(i), resource, tIcon)
  }

  private showResourceMenu(resource: Resource, x: number, y: number): void {
    this.closeIconToolTip()

    const pos = new AbsolutePosition(x, y, this.canvas)
    this.onShowResourceMenu(resource, pos.x(), pos.y())
  }

  /**
   * 最後に追加したのが「範囲アイコン」なら、通常アイコンよりZOrder後ろにもっていく。
   *
   * 「範囲アイコン」でなければ、Draw2D的なZOrderは触らない。
   * (初期表示とは動きが異なるので、通常アイコン同士の重なりは後勝ちになるかも)
   *
   * TODO IconGeneratorでsetUserData()してるので、このロジックもそこらへんに移動したい。
   */
  private fixZOrder(icon: Figure): void {
    const targetIconVM = new IconViewModel(icon)

    if (targetIconVM.isNotAreaIcon()) return

    const sortedIconVMs = this.iconVMs().sort(IconViewModel.compare)

    const compareNumberOverItem = sortedIconVMs.find(
      (vm) => vm.compareNumber() > targetIconVM.compareNumber()
    )

    if (!compareNumberOverItem) return

    const afterIcon = compareNumberOverItem.icon
    icon.toBack(afterIcon)

    // Debug
    // const allResources = new Resources(this.allResources);
    // console.log("対象のIcon:", targetIconVM.toString(allResources));
    // sortedIconVMs
    //   .forEach(i => console.log(i.toString(allResources)));
    // console.log("めっかったやつ:", compareNumberOverItem?.toString(allResources));
    //
    // const figures = this.canvas
    //   .getFigures()
    //   .asArray() as Figure[];
    // console.log("最終的なZOrderを含めた結果。");
    // figures
    //   .sort((l,r) => l.getZOrder() - r.getZOrder())
    //   .map(i => new IconViewModel(i))
    //   .forEach(i => console.log("ZOrder:",i.icon.getZOrder(), ", ID:", i.toString(allResources)));
  }

  private choiceIconGenerator(
    resourceType: ResourceType
  ): IconGenerator<Resource> {
    const found = this.iconGenerators.find((g) =>
      g.resourceType().equals(resourceType)
    )
    return found || DefaultIconGenerator.get()
  }

  private addConnection(relation: Relation) {
    const canvas = this.canvas

    const connection = new draw2d.Connection({ id: relation.id })

    const startPort = this.getPort(relation.fromResourceId, canvas, true)
    if (startPort) connection.setSource(startPort)
    const endPort = this.getPort(relation.toResourceId, canvas, false)
    if (endPort) connection.setTarget(endPort)

    connection.onContextMenu = this.onClickConnectorOnCanvas
    this.addConnectionLabel(connection, relation)
    this.decorateConnection(connection, relation)

    canvas.add(connection)
  }

  private getPort(
    resourceId: number,
    canvas: draw2d.Canvas,
    fromPort: boolean
  ): Port | undefined {
    const targetFigure = canvas.getFigure(String(resourceId)) as Figure
    if (!targetFigure) return undefined
    const portTypeName = fromPort ? 'draw2d.OutputPort' : 'draw2d.InputPort'
    return this.searchPortOf(targetFigure, portTypeName)
  }

  private searchPortOf(
    figure: Figure,
    portTypeName: string,
    depth = 0
  ): Port | undefined {
    const target = figure as any
    const foundPort = target
      .getPorts(false)
      .asArray()
      .find(
        (port: any) =>
          port.NAME === portTypeName || port.NAME === 'draw2d.HybridPort'
      )
    if (foundPort || depth > 1) return foundPort // 一つ下の子FigureまでPortを追う。

    const next = depth + 1
    for (const child of figure.getChildren().asArray()) {
      const found = this.searchPortOf(child, portTypeName, next)
      if (found) return found
    }
    return undefined
  }

  private addConnectionLabel(connection: any, relation: Relation): void {
    if (relation.meaning.length === 0) return
    const label = new draw2d.shape.basic.Label({
      text: relation.meaning,
      stroke: 0,
      padding: 0,
      alpha: 0.75,
      bgColor: '#ffffff',
    })
    connection.add(label, new draw2d.layout.locator.ParallelMidpointLocator())
  }

  private showConnectorRightClickMenu(
    relation: Relation,
    x: number,
    y: number
  ): void {
    this.visibleConnectorMenu = false
    this.targetRelation = relation
    this.menuX = x
    this.menuY = y
    this.$nextTick(() => {
      this.visibleConnectorMenu = true
    })
  }

  private iconStyleOf(resourceType: ResourceType): IconFontAndChar {
    return this.iconMap[resourceType.iconKey]
  }

  /**
   * キャンバス側から、逆にデータにあるかを調べ、削除されてそうなものが在れば消す。
   */
  private reverceSyncCavansDeleteThings(): void {
    // 初期ロード時、onChangeUsedResouceIds() が走ってしまい、LocalSterageからの読み出しが走ってしまう。
    // そのため「一度目だけは外からもちこまれたdiagramを使う」ようにする。(ダーティーハック)
    const diagram = this.initialized ? this.loadDiagram() : this.diagram
    this.initialized = true

    const canvas = this.canvas
    canvas.getLines().each((_: number, line: any) => {
      if (!diagram.existsRelationId(line.id.toString())) canvas.remove(line)
    })

    canvas.getFigures().each((_: number, figure: any) => {
      const resourceId = Number(figure.id)
      if (!diagram.existsResourceOnPlacementOf(resourceId))
        canvas.remove(figure)
    })
  }

  private  deleteRelation(relationId: string) {
    this.deleteConnectionOf(relationId)

    this.transactionOf((diagram, _) => {
      if (!diagram.existsRelationId(relationId)) return null;
      return diagram.removeRelationsOf([relationId])
    })
  }

  public confirmResourceDelete(
    resourceIds: number[],
    diagram: Diagram
  ): boolean {
    const relationIds = diagram.relationIdsOfDeleteTargetResouce(resourceIds)
    if (relationIds.length === 0) return true
    const message = `選択された要素には、他の要素への関連があります。それらを含め削除してよろしいですか。`
    return confirm(message)
  }

  private makeDownloadFileName(
    diagram: Diagram,
    extension: string
  ): DownloadFileName {
    const namePart = `${diagram.id}-${diagram.name}`
    return new RdramDownloadFileName(namePart, extension)
  }

  private includeWebFont(svgContents: string): string {
    const cssLink =
      "<defs><style type='text/css'>@import url('https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css');</style></defs>"
    return svgContents.replace('<defs', cssLink + '<defs')
  }

  public decorateConnection(connection: any, relation: Relation): void {
    const router = this.routerConverter.draw2dRouterOf(relation.routerType)
    connection.setRouter(router)

    if (relation.tipAllow) this.arrowDocorate(connection)
  }

  private arrowDocorate(connection: any): void {
    const decorator = new draw2d.decoration.connection.ArrowDecorator()
    decorator.setBackgroundColor(connection.getColor())
    connection.setTargetDecorator(decorator)
  }

  private redrawIcons(resources: Resource[]) {
    const diagram = this.loadDiagram()
    resources.forEach((resource) => this.redrawIcon(resource, diagram))
  }

  private redrawIcon(resource: Resource, diagram: Diagram): void {
    const placement = diagram.placementOf(resource.resourceId)
    if (!placement) return
    const relations = diagram.allRelations().onlyRelatedOf(resource)
    const iconVM = this.iconVMOf(resource)
    if (!iconVM) return

    relations.forEach((relation) => this.deleteConnectionOf(relation.id))
    this.canvas.remove(iconVM.icon)

    this.addResouceIconToCanvas(resource, placement)
    relations.forEach(this.addConnection)
  }

  private iconVMs(): IconViewModel[] {
    const allIcons = this.canvas.getFigures().asArray() as Figure[]
    return allIcons.map((i) => new IconViewModel(i))
  }

  private iconVMOf(resource: Resource): IconViewModel | undefined {
    return this.iconVMs().find((vm) => vm.resourceId() === resource.resourceId)
  }

  private deleteConnectionOf(relationId: string) {
    const connection = this.canvas.getLine(relationId)
    this.canvas.remove(connection)
  }

  // Data change controll.

  /**
   * どーしても、draw2dがsvg作るときに”position: absolute"をしてしまうので、削除する。
   */
  private fixCanvasPosition(): void {
    const svg = document.getElementById(this.canvasId)?.firstChild as SVGElement
    svg.style.removeProperty('position')
    svg.addEventListener('drop', this.onDropCanvas)
    svg.addEventListener('dragover', this.onDropOverCanvas)
    svg.oncontextmenu = function () {
      return false
    } // これは自動的にdraw2d.jsがやってくれるはず…なんだけどなぁ。
  }

  private addCanvasEvent(): void {
    const commandStack = this.canvas.getCommandStack()
    commandStack.addEventListener(this.onCanvasCommandExecute)
  }

  addPlacement(resource: Resource): void {
    const product = this.repository.getCurrentProduct()
    const diagram = product!.diagrams.of(this.diagramId)
    if (!product || !diagram) return

    const placement = diagram.createPlacement(
      resource,
      this.dropXOnCanvas,
      this.dropYOnCanvas
    ) as Placement
    const modifiedDiagram: Diagram = diagram.addPlacement(placement)
    const modifiedProduct = product.meageDiagramByIdOf(modifiedDiagram)

    this.addResouceIconToCanvas(resource, placement)

    this.repository.registerCurrentProduct(modifiedProduct)

    this.onMergePlacement(modifiedDiagram.placements)
  }

  /**
   * 自動保存のOn/Offを意識した「product,diagramへの操作」。
   */
  private transactionOf(
    func: (diagram: Diagram, product: Product) => Diagram | null
  ): void {
    const product = this.repository.getCurrentProduct() as Product
    const diagram = this.loadDiagram() as Diagram

    const modifiedDiagram = func(diagram, product)
    if (modifiedDiagram === null) return

    this.onMergePlacement(modifiedDiagram.placements)
    const modifiedProduct = product.meageDiagramByIdOf(modifiedDiagram)
    this.repository.registerCurrentProduct(modifiedProduct)
  }

  private cacheNowResources(): void {
    const nowResources = this.allResources
    const dic = new Map<number, Resource>()
    nowResources.forEach((r) => dic.set(r.resourceId, r))
    this.lastResourcesCache = dic
  }

  private calculateCenterPositionOf(icon: Figure) {
    const x = icon.getX() + icon.getWidth() / 2
    const y = icon.getY()
    return new AbsolutePosition(x, y, this.canvas)
  }

  private showIconToolTip(resource: Resource, icon: Figure): void {
    const pos = this.calculateCenterPositionOf(icon)
    const toolTip = this.$refs.iconToolTip as IconToolTip
    toolTip.show(resource, pos.x(), pos.y())
  }

  private closeIconToolTip(): void {
    const toolTip = this.$refs.iconToolTip as IconToolTip
    toolTip.close()
  }

  private moveIconToolTip(icon: Figure): void {
    const pos = this.calculateCenterPositionOf(icon)
    const toolTip = this.$refs.iconToolTip as IconToolTip
    toolTip.move(pos.x(), pos.y())
  }

  private loadDiagram(): Diagram {
    const product = this.repository.getCurrentProduct() as Product
    return product.diagrams.of(this.diagramId) as Diagram
  }

  private withLoadingScreen(actions: () => void) {
    this.$nuxt.$loading.start()
    const timer = setInterval(() => {
      clearInterval(timer)
      actions()
      this.$nuxt.$loading.finish()
    }, 1)
  }
}
</script>

<style type="sass" scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  min-width: 0px;
  overflow: auto;
  text-align: left;
}

.diagram-canvas {
  width: 1px;
  height: 1px;
  margin: 0px;

  border-radius: 5px;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.6));
  /* background-color: white; */

  position: relative;
}
</style>
