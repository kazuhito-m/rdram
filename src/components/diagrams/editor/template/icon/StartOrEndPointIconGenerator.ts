import draw2d, { Figure } from 'draw2d';
import IconGenerator from '@/components/diagrams/icon/IconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';
import StartOrEndPoint from '@/domain/resource/StartOrEndPoint';

export default class StartOrEndPointIconGenerator implements IconGenerator<StartOrEndPoint> {
    public resourceType(): ResourceType {
        return ResourceType.始点終点;
    }

    public generate(placement: Placement, point: StartOrEndPoint, _iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const outline = new draw2d.shape.basic.Rectangle({
            id,
            x: placement.x,
            y: placement.y,
            width: 40,
            height: 20,
            bgColor: "none",
            alpha: 0,
            stroke: 0,
        });
        outline.setResizeable(false);

        if (point.startPoint) this.decorateStartPint(outline);
        else this.decorateEndPoint(outline);

        outline.setUserData(new IconStatus());

        return outline;
    }

    private decorateStartPint(outline: any): void {
        const ten = new draw2d.shape.basic.Circle({ bgColor: "#000000" });
        ten.setWidth(20);
        outline.add(ten, new draw2d.layout.locator.CenterLocator());

        const port = new draw2d.OutputPort();
        outline.addPort(port, new draw2d.layout.locator.BottomLocator());
    }

    private decorateEndPoint(outline: any): void {
        const maru = new draw2d.shape.basic.Circle({
            bgColor: "none",
            stroke: 2,
        });
        maru.setWidth(20);
        outline.add(maru, new draw2d.layout.locator.CenterLocator());

        const ten = new draw2d.shape.basic.Circle({
            bgColor: "#000000",
            stroke: 1,
        });
        ten.setWidth(12);
        outline.add(ten, new draw2d.layout.locator.CenterLocator());

        const port = new draw2d.InputPort();
        outline.addPort(port, new draw2d.layout.locator.TopLocator());
    }
}