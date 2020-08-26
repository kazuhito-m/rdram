import Diagram from "./Diagram";
import DiagramType from "./DiagramType";
import DiagramFactory from "./DiagramFactory";

export default class Diagrams {
    private readonly values: Diagram[];

    constructor(values: Diagram[]) {
        this.values = values;
    }

    public static prototypeOf(): Diagrams {
        return new Diagrams([]);
    }

    public createNewDiagram(name: string, diagramType: DiagramType): Diagram {
        const newDiagramId = this.generateDiagramId();
        const factory = new DiagramFactory();
        return factory.create(newDiagramId, name, diagramType);
    }

    private generateDiagramId(): number {
        return this.values
            .map(d => d.id)
            .reduce((l, r) => Math.max(l, r), 0) + 1;
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

    public meage(diagram: Diagram): Diagrams {
        const newValues = Array.from(this.values);
        for (let i = 0; i < newValues.length; i++) {
            const p = newValues[i];
            if (p.id !== diagram.id) continue;
            newValues[i] = diagram;
            return new Diagrams(newValues);
        }
        newValues.push(diagram);
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
}