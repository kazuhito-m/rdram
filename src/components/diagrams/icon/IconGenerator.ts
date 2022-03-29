import { Figure } from "draw2d";
import IconFontAndChar from "@/components/diagrams/icon/IconFontAndChar";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Placement from "@/domain/diagram/placement/Placement";

export default interface IconGenerator<T extends Resource> {
    resourceType(): ResourceType;
    generate(placement: Placement, resource: T, iconChar: IconFontAndChar): Figure;
}