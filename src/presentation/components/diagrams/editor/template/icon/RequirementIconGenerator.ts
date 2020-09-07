import { Figure } from 'draw2d';
import ResourceType from '@/domain/resource/ResourceType';
import GenericTextCardIconGenerator from '@/presentation/components/diagrams/icon/GenericTextCardIconGenerator';
import Placement from '@/domain/diagram/placement/Placement';
import IconFontAndChar from '@/presentation/components/diagrams/icon/IconFontAndChar';
import Requirement from '~/domain/resource/Requirement';

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