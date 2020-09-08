import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import Resource from '@/domain/resource/Resource';
import IconGenerator from '@/presentation/components/diagrams/icon/IconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import TopAbsAndCenterLocator from '~/presentation/draw2d/custom/TopAbsAndCenterLocator';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import IconStatus from '../../../icon/IconStatus';

export default class ActorAndLaneIconGenerator implements IconGenerator<Resource> {
    public resourceType(): ResourceType {
        return ResourceType.アクター;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 36,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
            resizable: false,
            alpha: 1,
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            stroke: 0,
            padding: 0,
            resizable: false,
            selectable: false
        });

        const waku = new draw2d.shape.basic.Rectangle({
            id: id,
            x: placement.x,
            y: placement.y,
            width: 280,
            height: 700,
            minWidth: 100,
            minHeight: 60,
            bgColor: "none",
            color: "#000000",
            alpha: 1,
            stroke: 2,
        });

        const topBox = new draw2d.shape.basic.Rectangle({
            width: 280,
            height: 60,
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

        icon.add(name, new draw2d.layout.locator.BottomLocator());
        waku.add(icon, new TopAbsAndCenterLocator({ y: 5 }));
        waku.add(topBox, new draw2d.layout.locator.XYAbsPortLocator(0, 0));

        waku.setUserData(new IconStatus(true));

        return waku;
    }
}