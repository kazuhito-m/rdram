import { Figure } from "draw2d";
import Resource from "~/domain/resource/Resource";
import Placement from "~/domain/diagram/placement/Placement";

export default interface IconGenerator {
    generate(placement: Placement, resource: Resource, iconStyle: CSSStyleDeclaration): Figure;
}