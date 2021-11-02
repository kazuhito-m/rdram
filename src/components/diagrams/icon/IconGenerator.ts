import { Figure } from "draw2d";
import Resource from "@/domain/resource/Resource";
import Placement from "@/domain/diagram/placement/Placement";
import ResourceType from "@/domain/resource/ResourceType";
import IconFontAndChar from "./IconFontAndChar";

export default interface IconGenerator<T extends Resource> {
    resourceType(): ResourceType;
    generate(placement: Placement, resource: T, iconChar: IconFontAndChar): Figure;
}