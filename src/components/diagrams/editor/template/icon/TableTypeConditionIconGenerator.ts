import draw2d, { Figure } from 'draw2d';
import TopLeftLocator from '@/draw2d/custom/TopLeftLocator';
import GenericSingleIconGenerator from '@/components/diagrams/icon/GenericSingleIconGenerator';
import IconStatus from '@/components/diagrams/icon/IconStatus';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import TableTypeCondition from '@/domain/resource/TableTypeCondition';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default class TableTypeConditionIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.表形式の条件;
    }

    public generate(placement: Placement, tableTypeCondition: TableTypeCondition, iconChar: IconFontAndChar): Figure {
        if (placement.alias) return super.generate(placement, tableTypeCondition, iconChar);
        return this.generateTableTypeConditionTable(placement, tableTypeCondition, iconChar);
    }

    private generateTableTypeConditionTable(placement: Placement, tableTypeCondition: TableTypeCondition, iconChar: IconFontAndChar): Figure {
        const container = this.generateIconBase(placement);
        this.rewriteIcon(container, placement, tableTypeCondition, iconChar);

        console.log("table:", container)

        return container;
    }

    private generateIconBase(placement: Placement): any {
        const id = String(placement.resourceId);

        const container = new draw2d.shape.layout.TableLayout({
            id,
            x: placement.x,
            y: placement.y,
            padding: 1,
            stroke: 1,
        });

        container.createPort("hybrid", new draw2d.layout.locator.CenterLocator());
        // PortからではなくFigureから線が出ているように見せるため、アンカー設定。
        const port = container.getPorts().last();
        const anchor = new draw2d.layout.anchor.FanConnectionAnchor(container);
        port.setConnectionAnchor(anchor);

        container.setUserData(new IconStatus());

        return container;
    }

    public rewriteIcon(baseIcon: Figure, placement: Placement, tableTypeCondition: TableTypeCondition, iconChar: IconFontAndChar): void {
        const container = baseIcon as any;

        container.setVisible(false);

        console.log("container.getPorts().length:" + container.getPorts().getSize());

        const ports: Figure[] = [];
        for (let i = 0; i < container.getPorts().getSize(); i++)
            ports.push(container.getPorts().get(i));
        container.resetChildren();
        for (const port of ports)
            container.addPort(port, new draw2d.layout.locator.CenterLocator())


        console.log("container.getChildren().getSize():", container.getChildren().getSize());

        tableTypeCondition.valuesOf()
            .map((line, rowNumber) => this.generateRowLabels(line, rowNumber))
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

        container.setVisible(true);
    }

    private generateRowLabels = (values: string[], rowNumber: number): Figure[] => values
        .map((value, columnNumber) => this.generateColmunLabel(value, rowNumber, columnNumber));

    private generateColmunLabel(value: string, rowNumber: number, columnNumber: number): Figure {
        if (rowNumber === 0)
            return this.generateLabel(value, true, "#FFFFFF", "#2FA3EE");
        return this.generateLabel(
            value,
            columnNumber === 0,
            "#000000",
            rowNumber % 2 ? "#D1D8E5" : "#E8F0FC"
        );
    }

    private generateLabel(text: string, bold: boolean, fontColor: string, backColor: string): Figure {
        const label = new draw2d.shape.basic.Label({ text });
        label.setResizeable(true);
        label.setBold(bold);
        label.setFontColor(fontColor);
        label.setColor("#FFFFFF");
        label.setStroke(2);
        label.setPadding(2);
        label.setBackgroundColor(backColor);
        return label;
    }
}