import { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import Purpose from '@/domain/resource/Purpose';
import GenericHasContentIconGenerator from '../../../icon/GenericHasContentIconGenerator';

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