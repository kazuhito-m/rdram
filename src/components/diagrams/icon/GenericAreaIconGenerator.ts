import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import TopLeftLocator from "@/draw2d/custom/TopLeftLocator";
import Resource from '~/domain/resource/Resource';
import IconGenerator from './IconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from './IconFontAndChar';
import IconStatus from './IconStatus';

export default abstract class GenericAreaIconGenerator implements IconGenerator<Resource> {
    public abstract resourceType(): ResourceType;

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const waku = new draw2d.shape.basic.Rectangle({
            x: placement.x,
            y: placement.y,
            bgColor: "#FFFFFF",
            alpha: 0.6,
            width: placement.width,
            height: placement.height,
            radius: 5,
            stroke: 3,
            selectable: true,
            resizable: true,
            padding: 0,
            keepAspectRatio: false,
            id: id
        });

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 30,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
            alpha: 1
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            stroke: 0,
            padding: 0,
            resizable: false,
            selectable: false
        });

        waku.createPort(
            "hybrid",
            new draw2d.layout.locator.XYAbsPortLocator({ x: 15, y: -17 })
        );

        icon.add(name, new draw2d.layout.locator.XYRelPortLocator({ x: 105, y: 27 }));
        waku.add(icon, new TopLeftLocator());

        waku.setUserData(new IconStatus(true));

        return waku;
    }
}