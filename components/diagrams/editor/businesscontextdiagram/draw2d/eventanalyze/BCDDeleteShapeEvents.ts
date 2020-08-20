import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import BusinessContextDiagramEditor from "~/components/diagrams/editor/businesscontextdiagram/BusinessContextDiagramEditor.vue";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";
import FigureAnalyzer from "./FigureAnalyzer";

export default class BCDDeleteShapeEvents implements EventsOfType<BusinessContextDiagram, BusinessContextDiagramEditor> {
    public eventGists: EventGist[] = [];

    private readonly figureAnalyzer = new FigureAnalyzer();

    public eventType(): string {
        return "Delete Shape";
    }

    public prototype(): BCDDeleteShapeEvents {
        return new BCDDeleteShapeEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product, view: BusinessContextDiagramEditor): boolean {
        const relations = diagram.relations;
        // TODO なんども連打される問題について
        // ひょっとして「Rootじゃなく、子イベントを叩いてる」からかな？
        const resourceIds = this.figureAnalyzer.analyzeResourceIds(this.validTargetFigures());
        const relationIdsOfDeleteTargetResouce = this.relationIdsOfDeleteTargetResouce(resourceIds, diagram);
        if (relationIdsOfDeleteTargetResouce.length > 0) {
            const message = `選択された要素には、他の要素への関連があります。それらを含め削除してよろしいですか。`;
            if (!confirm(message)) {
                const rootCommand = this.eventGists[0].rootCommand;
                rootCommand.undo();
                return false;
            }
        }
        return true;
    }
    public apply(diagram: BusinessContextDiagram, product: Product, view: BusinessContextDiagramEditor): boolean {
        // 対象のFigure
        const validTargetFigures = this.validTargetFigures();
        // Iconと線に分ける
        const resourceIds = this.figureAnalyzer.analyzeResourceIds(validTargetFigures);
        const relationIds = this.figureAnalyzer.analizeRelationIds(validTargetFigures);
        // console.log(`消す位置:${resourceIds.join()}`)
        // console.log(`消す線:${relationIds.join()}`)

        // Iconにつながってる線も割り出す
        const relationIdsOfDeleteTargetResouce = this.relationIdsOfDeleteTargetResouce(resourceIds, diagram);
        // console.log('共連れで消す周辺関連線。')
        console.log(relationIdsOfDeleteTargetResouce.join());

        // 「消す線」を全部足す
        const allRelationsIds = relationIds.concat(relationIdsOfDeleteTargetResouce) as string[];

        // Iconに対応する位置情報を削除
        const placements = diagram.placements;
        for (let j = placements.length - 1; j >= 0; j--) {
            const resourceId = placements[j].resourceId;
            if (resourceIds.some(deleteResourceId => deleteResourceId === resourceId)) {
                placements.splice(j, 1);
            }
        }
        // 線に対応する関連情報削除
        const relations = diagram.relations;
        for (let k = relations.length - 1; k >= 0; k--) {
            const relationId = relations[k].id;
            if (allRelationsIds.some(deleteRelationId => deleteRelationId === relationId)) {
                relations.splice(k, 1);
            }
        }

        // view.resyncParets(); // UI同期。
        return true;
    }

    private validTargetFigures(): Figure[] {
        return this.eventGists
            .map(eventGist => eventGist.figure)
            .filter(figure => typeof figure !== 'undefined')
            .map(figure => figure as Figure);
    }

    private relationIdsOfDeleteTargetResouce(deleteTargetResourceIds: number[], diagram: BusinessContextDiagram): string[] {
        return diagram.relations
            .filter(relation => deleteTargetResourceIds.some(id => id === relation.fromResourceId)
                || deleteTargetResourceIds.some(id => id === relation.toResourceId))
            .map(relation => relation.id);
    }
}