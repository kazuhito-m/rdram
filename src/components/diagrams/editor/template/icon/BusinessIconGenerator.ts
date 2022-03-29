import { Figure } from 'draw2d';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import GenericTextEllipseIconGenerator from '@/components/diagrams/icon/GenericTextEllipseIconGenerator';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default class BusinessIconGenerator extends GenericTextEllipseIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.業務;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const icon = super.generate(placement, resource, iconChar) as any;
        icon.setBackgroundColor("#99DDFF");
        return icon;
    }
}