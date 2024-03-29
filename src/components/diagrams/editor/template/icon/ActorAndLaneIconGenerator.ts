import draw2d, { Figure } from 'draw2d';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';
import IconZOrderLevel from '~/components/diagrams/icon/IconZOrderLevel';

export default class ActorAndLaneIconGenerator extends IconGenerator<Resource> {
    public resourceType(): ResourceType {
        return ResourceType.アクター;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const waku = new draw2d.shape.basic.Rectangle({
            id,
            x: placement.x,
            y: placement.y,
            width: placement.width,
            height: placement.height,
            minWidth: 100,
            minHeight: 40,
            bgColor: "none",
            color: "#000000",
            alpha: 1,
            stroke: 2,
        });

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 28,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
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
            stroke: 1
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

        return waku;
    }
}
