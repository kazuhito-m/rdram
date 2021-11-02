import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import IconStatus from '../../../icon/IconStatus';
import Resource from '@/domain/resource/Resource';

export default class ActivityIconGenerator implements IconGenerator<Resource> {
    public resourceType(): ResourceType {
        return ResourceType.アクティビティ;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const outline = new draw2d.shape.basic.Rectangle({
            id: id,
            x: placement.x,
            y: placement.y,
            width: 40,
            height: 40,
            bgColor: "none",
            stroke: 0,
        });
        outline.setResizeable(false);

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 35,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
        });
        outline.add(icon, new draw2d.layout.locator.CenterLocator());

        const name = new draw2d.shape.basic.Label({
            text: resource.name,
            stroke: 0,
            padding: 0,
            resizable: false,
            selectable: false
        });
        outline.add(name, new draw2d.layout.locator.BottomLocator());


        outline.createPort("input", new draw2d.layout.locator.TopLocator());
        outline.createPort("output", new draw2d.layout.locator.BottomLocator());

        const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(icon);
        const port = outline.getOutputPorts().last() as any;
        port.setConnectionAnchor(anchor);

        outline.setUserData(new IconStatus(false));

        return outline;
    }
}