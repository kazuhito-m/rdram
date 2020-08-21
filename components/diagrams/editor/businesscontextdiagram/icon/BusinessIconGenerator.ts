import GenericSingleIconGenerator from '@/components/diagrams/editor/icon/GenericSingleIconGenerator';
import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import Resource from '@/domain/resource/Resource';
import IconGenerator from '../../icon/IconGenerator';

export default class BusinessIconGenerator implements IconGenerator {
    public generate(placement: Placement, resource: Resource, iconStyle: CSSStyleDeclaration): Figure {
        const id = String(placement.resourceId);

        const waku = new draw2d.shape.basic.Oval({
            x: placement.x,
            y: placement.y,
            bgColor: "#99DDFF",
            alpha: 1,
            width: 105,
            height: 35,
            radius: 0,
            stroke: 0,
            selectable: true,
            resizable: true,
            color: "#000000",
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
            fontFamily: iconStyle.fontFamily,
            text: iconStyle.content.replace(/"/g, ""),
            fontSize: 25,
            stroke: 0,
            padding: 0,
            bgColor: "#FFFFFF",
            alpha: 1
        });

        waku.add(moji, new draw2d.layout.locator.CenterLocator());
        waku.add(icon, new draw2d.layout.locator.XYAbsPortLocator({ x: -14, y: -17 }));
        waku.createPort("hybrid", new draw2d.layout.locator.CenterLocator());

        return waku;
    }
}