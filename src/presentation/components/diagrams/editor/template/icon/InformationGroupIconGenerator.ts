import GenericAreaIconGenerator from '../../../icon/GenericAreaIconGenerator';
import Placement from '~/domain/diagram/placement/Placement';
import Resource from '~/domain/resource/Resource';
import draw2d, { Figure } from "draw2d";
import ResourceType from '~/domain/resource/ResourceType';
import IconFontAndChar from '../../../icon/IconFontAndChar';

export default class InformationGroupIconGenerator extends GenericAreaIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.情報グループ;
    }

    public generate(placement: Placement, resource: Resource, iconStyle: IconFontAndChar): Figure {
        const result = super.generate(placement, resource, iconStyle) as any;
        result.color = new draw2d.util.Color(255, 196, 128);
        return result;
    }
}