import Relation from "@/domain/relation/Relation";
import Resource from "@/domain/resource/Resource";
import { relativeTimeRounding } from "moment";

export default class Relations {
    private readonly values: Relation[];

    constructor(values: Relation[]) {
        this.values = values;
    }

    public exists(relation: Relation): boolean {
        return this.values
            .some(i => i.equalRoute(relation));
    }

    public existsFromResource(resource: Resource): boolean {
        return this.values
            .some(i => i.fromResourceId === resource.resourceId);
    }

    /**
     * ルートが逆も含め(f->t,t->f のどちらか)在る場合。
     */
    public existsOrReversivle(relation: Relation) {
        return this.values.some(i => i.equalRouteReversivle(relation));
    }

    /**
     * ルートが両方(f->t,t->f の2つとも)在る場合。
     */
    public existsBothReversivle(relation: Relation): boolean {
        const rs = this.values;
        const reverse: Relation = relation.reverse();
        return rs.some(i => i.equalRoute(relation))
            && rs.some(i => i.equalRoute(reverse));
    }

    public static prototypeOf(): Relations {
        return new Relations([]);
    }

    public of(relationId: string): Relation | undefined {
        return this.values
            .find(Relation => Relation.id === relationId);
    }

    public add(relation: Relation): Relations {
        const newValues = Array.from(this.values);
        newValues.push(relation);
        return new Relations(newValues);
    }

    public remove(relation: Relation): Relations {
        const newValues = this.values
            .filter(value => value.id !== relation.id);
        return new Relations(newValues);
    }

    public meage(relation: Relation): Relations {
        if (this.values.some(d => d.id === relation.id)) {
            const newValues = this.values
                .map(d => d.id === relation.id ? relation : d);
            return new Relations(newValues);
        }
        const newValues = Array.from(this.values);
        newValues.push(relation);
        return new Relations(newValues);
    }

    public forEach(func: (Relation: Relation) => void) {
        this.values.forEach(func);
    }

    public static empty(): Relations {
        return new Relations([]);
    }

    public last(): Relation {
        return this.values[this.values.length - 1];
    }

    public uniqueIgnoreDirection(): Relations {
        const dic = new Map();
        for (const relation of this.values) {
            const key = this.makeKeyIgnoreDirectionOf(relation);
            dic.set(key, relation);
        }
        const relations = Array.from(dic.values());
        return new Relations(relations);
    }

    private makeKeyIgnoreDirectionOf(relation: Relation): string {
        return [relation.fromResourceId, relation.toResourceId]
            .sort()
            .join(":");
    }

    public onlyRelatedOf(resource: Resource): Relation[] {
        const resourceId = resource.resourceId;
        return this.values
            .filter(relation => relation.isRelatedTo(resourceId))
    }
}