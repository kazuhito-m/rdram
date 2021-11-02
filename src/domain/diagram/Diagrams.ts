import Diagram from "./Diagram";
import DiagramType from "./DiagramType";
import DiagramFactory from "./DiagramFactory";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";

export default class Diagrams {
    private readonly values: Diagram[];

    constructor(values: Diagram[]) {
        this.values = values;
    }

    public static prototypeOf(): Diagrams {
        return new Diagrams([]);
    }

    public createNewDiagram(name: string, diagramType: DiagramType, resources: Resources): Diagram {
        const newDiagramId = this.generateDiagramId();
        const factory = new DiagramFactory(resources);
        return factory.create(newDiagramId, name, diagramType);
    }

    public generateDiagramId(): number {
        return this.values
            .map(d => d.id)
            .reduce((l, r) => Math.max(l, r), 0) + 1;
    }

    public countOfUsingOf(resource: Resource): number {
        return this.values
            .filter(diagram => diagram.usingOf(resource))
            .length;
    }

    public existsSomeName(name: string, diagramType: DiagramType): boolean {
        return this.values
            .some(d => d.name === name && d.type.equals(diagramType));
    }

    public of(diagramId: number): Diagram | null {
        const found = this.values.find(diagram => diagram.id === diagramId);
        return found ? found : null;
    }

    public add(diagram: Diagram): Diagrams {
        const newValues = Array.from(this.values);
        newValues.push(diagram);
        return new Diagrams(newValues);
    }

    public remove(diagram: Diagram): Diagrams {
        const newValues = this.values
            .filter(value => value.id !== diagram.id);
        return new Diagrams(newValues);
    }

    public meage(diagram: Diagram): Diagrams {
        if (this.values.some(d => d.id === diagram.id)) {
            const newValues = this.values
                .map(d => d.id === diagram.id ? diagram : d);
            return new Diagrams(newValues);
        }
        const newValues = Array.from(this.values);
        newValues.push(diagram);
        return new Diagrams(newValues);
    }

    public removeResouceOf(resource: Resource): Diagrams {
        const newValues = this.values
            .map(diagram => diagram.removeResouceOf(resource));
        return new Diagrams(newValues);
    }

    public forEach(func: (diagram: Diagram) => void) {
        this.values.forEach(func);
    }

    public static empty(): Diagrams {
        return new Diagrams([]);
    }

    public eixistsSomeName(diagram: Diagram) {
        return this.values
            .filter(d => d.id !== diagram.id)
            .map(i => { console.log(i.id, i.name); return i })
            .some(d => d.name === diagram.name);
    }

    public last(): Diagram {
        return this.values[this.values.length - 1];
    }
}