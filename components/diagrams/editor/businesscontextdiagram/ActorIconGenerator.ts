import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import Actor from '~/domain/actor/Actor';

export default class ActorIconGenerator {
    public generate(placement: Placement, actor: Actor, iconStyle: CSSStyleDeclaration): Figure {
        const padding = 0;
        const id = String(placement.resourceId);

        const icon = new draw2d.shape.basic.Label({
            x: placement.x,
            y: placement.y,
            fontFamily: iconStyle.fontFamily,
            text: iconStyle.content.replace(/"/g, ""),
            fontSize: 40,
            stroke: 0,
            padding: padding,
            bgColor: "#FFFFFF",
            resizable: false,
            alpha: 1 // opacityと一緒
        });

        const name = new draw2d.shape.basic.Label({
            text: actor.name,
            stroke: 0,
            padding: padding,
            resizable: false,
            selectable: false
        });

        icon.createPort(
            "hybrid",
            new draw2d.layout.locator.CenterLocator()
        );

        icon.add(name, new draw2d.layout.locator.BottomLocator());
        return icon;
    }
}