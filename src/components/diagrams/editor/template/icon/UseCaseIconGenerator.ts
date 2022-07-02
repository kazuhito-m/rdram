import { Figure } from 'draw2d';
import GenericTextEllipseIconGenerator from '@/components/diagrams/icon/GenericTextEllipseIconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default class UseCaseIconGenerator extends GenericTextEllipseIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.ユースケース;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const icon = super.generate(placement, resource, iconChar) as any;
        icon.setBackgroundColor("#FFFFAF");
        return icon;
    }
}
