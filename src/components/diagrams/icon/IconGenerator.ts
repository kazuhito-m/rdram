import { Figure } from "draw2d";
import IconFontAndChar from "@/components/diagrams/icon/IconFontAndChar";
import Resource from "@/domain/resource/Resource";
import ResourceType from "@/domain/resource/ResourceType";
import Placement from "@/domain/diagram/placement/Placement";

export default abstract class IconGenerator<T extends Resource> {
    public abstract resourceType(): ResourceType;
    public abstract generate(placement: Placement, resource: T, iconChar: IconFontAndChar): Figure;
}