import { Figure } from 'draw2d';
import GenericAreaIconGenerator from '@/components/diagrams/icon/GenericAreaIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import IconFontAndChar from '~/components/diagrams/icon/IconFontAndChar';
import IconStatus from '~/components/diagrams/icon/IconStatus';
import IconZOrderLevel from '~/components/diagrams/icon/IconZOrderLevel';
import Placement from '~/domain/diagram/placement/Placement';
import Resource from '~/domain/resource/Resource';

export default class CompanyIconGenerator extends GenericAreaIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.会社;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const icon = super.generate(placement, resource, iconChar);
        icon.setUserData(new IconStatus(IconZOrderLevel.BACKGROUND_AREA));
        return icon;
    }
}