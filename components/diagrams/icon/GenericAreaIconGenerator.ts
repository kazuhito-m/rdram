import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import TopLeftLocator from "@/presentation/draw2d/custom/TopLeftLocator";
import Resource from '~/domain/resource/Resource';
import IconGenerator from './IconGenerator';

export default class GenericAreaIconGenerator implements IconGenerator {
    public generate(placement: Placement, resource: Resource, iconStyle: CSSStyleDeclaration): Figure {
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
            fontFamily: iconStyle.fontFamily,
            text: iconStyle.content.replace(/"/g, ""),
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

        icon.add(name, new draw2d.layout.locator.XYRelPortLocator({ x: 95, y: 23 }));
        waku.add(icon, new TopLeftLocator());
        return waku;
    }
}