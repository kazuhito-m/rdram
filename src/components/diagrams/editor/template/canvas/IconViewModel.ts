import { Figure } from "draw2d";
import IconStatus from "@/components/diagrams/icon/IconStatus";
import IconZOrderLevel from "@/components/diagrams/icon/IconZOrderLevel";
import Resources from "@/domain/resource/Resources";

export default class IconViewModel {
    constructor(
        public readonly icon: Figure
    ) { }

    public static compare(left: IconViewModel, right: IconViewModel) {
        return left.compareNumber() - right.compareNumber();
    }

    public compareNumber(): number {
        const zOrderLevel = this.zOrderLevelOf(this.icon);
        return zOrderLevel * 1000000
            + this.resourceId();
    }

    private zOrderLevelOf(icon: Figure): IconZOrderLevel {
        const iconStatus: IconStatus = icon.getUserData();
        if (!iconStatus) return IconZOrderLevel.NORMAL;
        return iconStatus.zOrder;
    }

    private resourceId(): number {
        return Number(this.icon.getId());
    }

    public toString(resources: Resources): string {
        const resource = resources.of(this.resourceId());
        return [this.compareNumber(), resource?.name].join(", ");
    }
}