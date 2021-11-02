import { Figure } from 'draw2d';
import GenericTextCardIconGenerator from '@/components/diagrams/icon/GenericTextCardIconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';
import Requirement from '@/domain/resource/Requirement';

export default class RequirementIconGenerator extends GenericTextCardIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.要件;
    }

    public generate(placement: Placement, requirement: Requirement, iconChar: IconFontAndChar): Figure {
        const figure = super.generate(placement, requirement, iconChar) as any;
        figure.setBackgroundColor("#FFF3BF");
        return figure;
    }
}