import GenericSingleIconGenerator from '../../../icon/GenericSingleIconGenerator';
import { Figure } from 'draw2d';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import ResourceType from "@/domain/resource/ResourceType";
import Placement from '~/domain/diagram/placement/Placement';
import Variation from '@/domain/resource/Variation';

export default class VariationIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.会社;
    }

    public generate(placement: Placement, variation: Variation, iconChar: IconFontAndChar): Figure {
        if (placement.alias) return super.generate(placement, variation, iconChar);

        return icon;
    }
}