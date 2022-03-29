import { Figure } from 'draw2d';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import GenericHasContentIconGenerator from '@/components/diagrams/icon/GenericHasContentIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';
import Purpose from '@/domain/resource/Purpose';

export default class PurposeIconGenerator extends GenericHasContentIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.目的;
    }

    public generate(placement: Placement, purpose: Purpose, iconChar: IconFontAndChar): Figure {
        const figure = super.generate(placement, purpose, iconChar) as any;
        figure.setBackgroundColor("#efffef");
        return figure;
    }
}