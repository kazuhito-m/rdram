import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import IconGenerator from '@/presentation/components/diagrams/icon/IconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from './IconFontAndChar';
import TopLeftLocator from '~/presentation/draw2d/custom/TopLeftLocator';
import HasContentResource from '~/domain/resource/HasContentResource';

export default abstract class GenericHasContentIconGenerator implements IconGenerator< HasContentResource> {
    public abstract resourceType(): ResourceType;

    generate(placement: Placement, resource: HasContentResource, iconChar: IconFontAndChar): draw2d.Figure {
        const id = String(placement.resourceId);

        const text = new draw2d.shape.basic.Text({
            x: placement.x,
            y: placement.y,
            bgColor: "#FFFFFF",
            alpha: 1,
            radius: 3,
            stroke: 2,
            resizable: true,
            padding: 5,
            bold: true,
            text: resource.content,
            id: id
        });
        text.setWidth(placement.width);

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

        icon.add(name, new draw2d.layout.locator.XYRelPortLocator({ x: 105, y: 27 }));
        text.add(icon, new TopLeftLocator());

        text.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = text.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(text);
        port.setConnectionAnchor(anchor);

        return text;
    }
}