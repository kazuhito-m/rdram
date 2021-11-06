import draw2d from 'draw2d';
import { Figure } from 'draw2d';
import TopLeftLocator from '@/draw2d/custom/TopLeftLocator';
import GenericSingleIconGenerator from '@/components/diagrams/icon/GenericSingleIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';
import TableTypeCondition from '@/domain/resource/TableTypeCondition';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import IconStatus from '@/components/diagrams/icon/IconStatus';

export default class TableTypeConditionIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.表形式の条件;
    }

    public generate(placement: Placement, tableTypeCondition: TableTypeCondition, iconChar: IconFontAndChar): Figure {
        if (placement.alias) return super.generate(placement, tableTypeCondition, iconChar);
        return this.generateTableTypeConditionTable(placement, tableTypeCondition, iconChar);
    }

    private generateTableTypeConditionTable(placement: Placement, tableTypeCondition: TableTypeCondition, iconChar: IconFontAndChar): Figure {
        const id = String(placement.resourceId);

        const label = new draw2d.shape.basic.Label({ text: tableTypeCondition.name });
        label.setResizeable(true);
        label.setBold(true);
        label.setFontColor("#FFFFFF");
        label.setColor("#FFFFFF");
        label.setStroke(2);
        label.setPadding(2);
        label.setBackgroundColor("#2FA3EE");

        const container = new draw2d.shape.layout.TableLayout({
            id: id,
            x: placement.x,
            y: placement.y,
            padding: 1,
            stroke: 1,
        });

        tableTypeCondition.valuesOf()
            .map((line, index) => this.generateRowLabels(line, index))
            .forEach(labels => container.addRow(...labels));

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
            text: tableTypeCondition.name,
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

    private generateRowLabels(values: string[], index: number) : any[] {
        const labels: any[] = [];
        for (let value of values) {
            const label = new draw2d.shape.basic.Label({ text: value });
            label.setResizeable(true);
            label.setPadding(2);
            label.setStroke(2);
            label.setColor("#FFFFFF");
            label.setBackgroundColor("#E8F0FC");

            labels.push(label);
        }
        return labels;
    }
}