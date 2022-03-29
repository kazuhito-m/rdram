import draw2d, { Figure } from 'draw2d';
import TopLeftLocator from '@/draw2d/custom/TopLeftLocator';
import GenericSingleIconGenerator from '@/components/diagrams/icon/GenericSingleIconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Variation from '@/domain/resource/Variation';
import ResourceType from "@/domain/resource/ResourceType";
import Placement from '@/domain/diagram/placement/Placement';

export default class VariationIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.バリエーション;
    }

    public generate(placement: Placement, variation: Variation, iconChar: IconFontAndChar): Figure {
        if (placement.alias) return super.generate(placement, variation, iconChar);
        return this.generateVariationTable(placement, variation, iconChar);
    }

    private generateVariationTable(placement: Placement, variation: Variation, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const label = new draw2d.shape.basic.Label({ text: variation.name });
        label.setResizeable(true);
        label.setFontColor("#FFFFFF");
        label.setBold(true);
        label.setStroke(2);
        label.setColor("#FFFFFF");
        label.setPadding(2);
        label.setBackgroundColor("#F69747");

        const container = new draw2d.shape.layout.TableLayout({
            id,
            x: placement.x,
            y: placement.y,
            padding: 1,
            stroke: 1,
        });
        container.addRow(label);

        let i = 0;
        for (const value of variation.valuesOf()) {
            const valueLabel = new draw2d.shape.basic.Label({ text: value });
            valueLabel.setResizeable(true);
            valueLabel.setPadding(2);
            valueLabel.setStroke(2);
            valueLabel.setColor("#FFFFFF");
            valueLabel.setBackgroundColor(i % 2 ? "#FDF0EA" : "#FEDBD2");
            container.addRow(valueLabel);
            i++;
        }

        const icon = new draw2d.shape.basic.Label({
            fontFamily: iconChar.fontFamily,
            text: iconChar.charactor,
            fontSize: 30,
            stroke: 0,
            padding: 0,
            bgColor: "none",
            alpha: 1
        });
        const name = new draw2d.shape.basic.Label({
            text: variation.name,
            stroke: 0,
            padding: 0,
            resizable: false,
            selectable: false
        });
        icon.add(name, new draw2d.layout.locator.XYRelPortLocator({ x: 105, y: 27 }));
        container.add(icon, new TopLeftLocator());

        container.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = container.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(container);
        port.setConnectionAnchor(anchor);

        container.setUserData(new IconStatus(false));

        return container;
    }
}