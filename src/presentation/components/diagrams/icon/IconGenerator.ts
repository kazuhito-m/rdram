import { Figure } from "draw2d";
import Resource from "~/domain/resource/Resource";
import Placement from "~/domain/diagram/placement/Placement";
import ResourceType from "~/domain/resource/ResourceType";
import IconFontAndChar from "./IconFontAndChar";

export default interface IconGenerator {
    resourceType(): ResourceType;
    generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure;
}