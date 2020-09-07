import draw2d, { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import GenericTextEllipseIconGenerator from '../../../icon/GenericTextEllipseIconGenerator';

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