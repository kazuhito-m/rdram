import GenericAreaIconGenerator from '../../../icon/GenericAreaIconGenerator';
import Placement from '~/domain/diagram/placement/Placement';
import Resource from '~/domain/resource/Resource';
import draw2d, { Figure } from "draw2d";

export default class RoomIconGenerator extends GenericAreaIconGenerator {
    public generate(placement: Placement, resource: Resource, iconStyle: CSSStyleDeclaration): Figure {
        const result = super.generate(placement, resource, iconStyle) as any;
        result.color = new draw2d.util.Color(0, 192, 255);
        return result;
    }
}