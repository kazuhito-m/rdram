import { Figure } from 'draw2d';
import GenericHasContentIconGenerator from '@/components/diagrams/icon/GenericHasContentIconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Scenario from '@/domain/resource/Scenario';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

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
