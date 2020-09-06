import { Figure } from 'draw2d';
import ResourceType from '@/domain/resource/ResourceType';
import GenericTextCardIconGenerator from '@/presentation/components/diagrams/icon/GenericTextCardIconGenerator';
import Placement from '@/domain/diagram/placement/Placement';
import Resource from '@/domain/resource/Resource';
import IconFontAndChar from '@/presentation/components/diagrams/icon/IconFontAndChar';

export default class RequirementIconGenerator extends GenericTextCardIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.要件;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const figure = super.generate(placement, resource, iconChar) as any;
        figure.setBackgroundColor("#FFF3BF");
        return figure;
    }
}