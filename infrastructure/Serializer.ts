export default class Sreializer {
    private readonly constructors: ObjectConstructor[];

    constructor(...constructors: any) {
        this.constructors = constructors;
    }

    public serialize(target: any): string {
        this.addClassNameProperty(target);  // TODO 元のオブジェクトを上書きまくるのでなんとかしたい
        return JSON.stringify(target);
    }

    public deserialize(json: string): any {
        const obj = JSON.parse(json);
        return this.toClassInstance(obj);
    }

    private addClassNameProperty(value: any): void {
        if (typeof value !== "object") return;
        if (Array.isArray(value)) return value.forEach(i => this.addClassNameProperty(i));
        value.__CLASS_NAME = value.constructor.name;
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                this.addClassNameProperty(value[key]);
            }
        }
    }

    private toClassInstance(value: any): any {
        if (typeof value !== "object") return value;
        if (Array.isArray(value)) return value.map(i => this.toClassInstance(i));
        if (!value.__CLASS_NAME) return value;
        const obj = this.createInstanceOf(value.__CLASS_NAME);
        if (!obj) return obj;
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                const inValue = value[key];
                obj[key] = this.toClassInstance(inValue);
            }
        }
        return obj;
    }

    private createInstanceOf(className: string): any {
        const foundCons = this.constructors
            .find(cons => className === cons.name);
        if (!foundCons) return null;
        return new foundCons();
    }
}