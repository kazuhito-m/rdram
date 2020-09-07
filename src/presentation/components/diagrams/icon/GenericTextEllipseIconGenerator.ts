import draw2d, { Figure } from 'draw2d';
import Placement from "@/domain/diagram/placement/Placement";
import Resource from '~/domain/resource/Resource';
import IconGenerator from './IconGenerator';
import ResourceType from '~/domain/resource/ResourceType';
import IconFontAndChar from './IconFontAndChar';

/**
 * 「楕円のテキスト＋左上アイコン」ジェネレータ。
 */
export default abstract class GenericTextEllipseIconGenerator implements IconGenerator<Resource> {
    public abstract resourceType(): ResourceType;

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const oval = new draw2d.shape.basic.Oval({
            x: placement.x,
            y: placement.y,
            color: "#000000",
            bgColor: "#FFFFFF",
            alpha: 1,
            width: placement.width,
            height: placement.height,
            radius: 0,
            stroke: 0,
            selectable: true,
            resizable: true,
            padding: 0,
            id: id
        });

        const moji = new draw2d.shape.basic.Label({
            text: resource.name,
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

        oval.add(moji, new draw2d.layout.locator.CenterLocator());
        oval.add(icon, new draw2d.layout.locator.XYAbsPortLocator({ x: -14, y: -17 }));
        oval.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = oval.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(oval);
        port.setConnectionAnchor(anchor);

        return oval;
    }
}