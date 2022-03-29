import draw2d, { Figure } from "draw2d";
import GenericAreaIconGenerator from '@/components/diagrams/icon/GenericAreaIconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default class RoomIconGenerator extends GenericAreaIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.組織;
    }

    public generate(placement: Placement, resource: Resource, iconStyle: IconFontAndChar): Figure {
        const result = super.generate(placement, resource, iconStyle) as any;
        result.color = new draw2d.util.Color(0, 192, 255);
        return result;
    }
}