import draw2d, { Figure } from 'draw2d';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';
import IconZOrderLevel from '~/components/diagrams/icon/IconZOrderLevel';

export default class StateGroupIconGenerator extends IconGenerator<Resource> {
    constructor(private readonly isSinglePort = false) { super(); }

    public resourceType(): ResourceType {
        return ResourceType.状態グループ;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const waku = new draw2d.shape.basic.Rectangle({
            id,
            x: placement.x,
            y: placement.y,
            width: placement.width,
            height: placement.height,
            minWidth: 40,
            minHeight: 40,
            bgColor: "#FFE0AF",
            color: "#000000",
            alpha: 0.4,
            stroke: 2,
            radius: 40,
        });

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 25,
            stroke: 0,
            padding: 0,
            bgColor: "none",
            resizable: false,
            alpha: 1,
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            bold: true,
            stroke: 0,
            padding: 0,
            resizable: false,
            selectable: false
        });

        const container = new draw2d.shape.layout.TableLayout();
        container.addRow(icon, name);
        container.setCellVerticalAlign(0, 0, "middle");
        container.setCellVerticalAlign(0, 1, "middle");
        container.setStroke(0);

        const topBox = new draw2d.shape.basic.Rectangle({
            width: placement.width,
            height: 40,
            bgColor: "none",
            color: "#000000",
            alpha: 1,
            stroke: 0
        });

        waku.on("resize", (selfFigure: Figure) => {
            selfFigure
                .getChildren()
                .data
                .forEach((i: Figure) => i.setWidth(selfFigure.getWidth()));
        });

        topBox.add(container, new draw2d.layout.locator.CenterLocator());
        waku.add(topBox, new draw2d.layout.locator.XYAbsPortLocator(0, 0));

        waku.setUserData(new IconStatus(IconZOrderLevel.AREA));

        if (this.isSinglePort) this.makeSingleHybridPort(waku);
        else this.makeDoubleVectorPorts(waku);

        return waku;
    }
}
