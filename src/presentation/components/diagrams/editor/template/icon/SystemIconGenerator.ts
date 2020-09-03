import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import Resource from '@/domain/resource/Resource';
import IconGenerator from '@/presentation/components/diagrams/icon/IconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';

export default class SystemIconGenerator implements IconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.システム;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const waku = new draw2d.shape.basic.Oval({
            x: placement.x,
            y: placement.y,
            bgColor: "#FFFFFF",
            alpha: 1,
            width: placement.width,
            height: placement.height,
            radius: 0,
            stroke: 2,
            selectable: true,
            resizable: true,
            color: "#000000",
            padding: 0,
            id: id
        });

        const moji = new draw2d.shape.basic.Label({
            text: resource.name,
            fontSize: 23,
            stroke: 0,
            padding: 0,
            alpha: 1,
            bold: true,
        });

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 25,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
            alpha: 1
        });

        waku.add(moji, new draw2d.layout.locator.CenterLocator());
        waku.add(icon, new draw2d.layout.locator.XYRelPortLocator({ x: 47, y: 3 }));
        waku.createPort("hybrid", new draw2d.layout.locator.CenterLocator());

        return waku;
    }
}