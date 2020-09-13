import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import GenericTextEllipseIconGenerator from '../../../icon/GenericTextEllipseIconGenerator';

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

        return icon;
    }
}