import { Figure } from 'draw2d';
import Placement from '@/domain/diagram/placement/Placement';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';
import GenericHasContentIconGenerator from '../../../icon/GenericHasContentIconGenerator';
import Scenario from '@/domain/resource/Scenario';

export default class ScenarioIconGenerator extends GenericHasContentIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.シナリオ;
    }

    public generate(placement: Placement, scenario: Scenario, iconChar: IconFontAndChar): Figure {
        const figure = super.generate(placement, scenario, iconChar) as any;
        figure.setBackgroundColor("#D8EAF2");
        return figure;
    }
}