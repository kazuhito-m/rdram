import { Figure } from 'draw2d';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import GenericTextEllipseIconGenerator from '../../../icon/GenericTextEllipseIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '~/domain/diagram/placement/Placement';
import Resource from '~/domain/resource/Resource';

export default class BusinessUseCaseIconGenerator extends GenericTextEllipseIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.ビジネスユースケース;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const icon = super.generate(placement, resource, iconChar) as any;
        icon.setBackgroundColor("#FFDFDF");
        return icon;
    }
}