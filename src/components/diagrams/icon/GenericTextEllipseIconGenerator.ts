import draw2d, { Figure } from 'draw2d';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from "@/domain/diagram/placement/Placement";

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
            minWidth: 20,
            minHeight: 20,
            id
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
            bgColor: "none",
            alpha: 1
        });

        oval.add(moji, new draw2d.layout.locator.CenterLocator());
        oval.add(icon, new draw2d.layout.locator.XYAbsPortLocator({ x: -14, y: -17 }));

        this.makeSingleHybridPort(oval);

        oval.setUserData(new IconStatus());

        return oval;
    }

    protected makeDoubleVectorPorts(icon: any): void {
        icon.createPort("input", new draw2d.layout.locator.TopLocator());
        icon.createPort("output", new draw2d.layout.locator.BottomLocator());

        const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(icon);
        const port = icon.getOutputPorts().last() as any;
        port.setConnectionAnchor(anchor);
    }

    protected makeSingleHybridPort(icon: any): void {
        icon.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = icon.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(icon);
        port.setConnectionAnchor(anchor);
    }
}