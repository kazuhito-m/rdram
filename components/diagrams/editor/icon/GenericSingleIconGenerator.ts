import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import Resource from '~/domain/resource/Resource';
import IconGenerator from './IconGenerator';

export default class GenericSingleIconGenerator implements IconGenerator{
    public generate(placement: Placement, resource: Resource, iconStyle: CSSStyleDeclaration): Figure {
        console.log('GenericSingleIconGeneratorなど');

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
            alpha: 1, // opacityと一緒
            id: id,
        });

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
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