import { Figure } from "draw2d";
import Resource from "@/domain/resource/Resource";
import IconStatus from "@/components/diagrams/icon/IconStatus";
import IconZOrderLevel from "@/components/diagrams/icon/IconZOrderLevel";

export default class IconViewModel {
    constructor(
        public readonly resource: Resource,
        public readonly icon: Figure
    ) { }

    public static compare(left: IconViewModel, right: IconViewModel) {
        return left.compareNumber() - right.compareNumber();
    }

    public compareNumber(): number {
        const zOrderLevel = this.zOrderLevelOf(this.icon);
        return zOrderLevel * 1000000
            + this.resource.resourceId;
    }

    private zOrderLevelOf(icon: Figure): IconZOrderLevel {
        const iconStatus: IconStatus = icon.getUserData();
        if (!iconStatus) return IconZOrderLevel.NORMAL;
        return iconStatus.zOrder;
    }

    public toString(): string {
        return [this.compareNumber(), this.resource.name].join(", ");
    }
}