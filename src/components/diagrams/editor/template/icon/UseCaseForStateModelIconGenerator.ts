import draw2d, { Figure } from 'draw2d';
import GenericTextEllipseIconGenerator from '@/components/diagrams/icon/GenericTextEllipseIconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default class UseCaseForStateModelIconGenerator extends GenericTextEllipseIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.ユースケース;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const icon = super.generate(placement, resource, iconChar) as any;
        icon.setBackgroundColor("#FFFFAF");

        icon.getOutputPorts().asArray()
            .forEach((port: Figure) => icon.removePort(port));

        icon.createPort("input", new draw2d.layout.locator.TopLocator());
        icon.createPort("output", new draw2d.layout.locator.BottomLocator());

        const anchor = new draw2d.layout.anchor.ChopboxConnectionAnchor(icon);
        const port = icon.getOutputPorts().last() as any;
        port.setConnectionAnchor(anchor);

        return icon;
    }
}