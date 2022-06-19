import Relations from "@/domain/relation/Relations";
import Diagram from "@/domain/diagram/Diagram";
import DiagramType from "@/domain/diagram/DiagramType";
import DiagramFactory from "@/domain/diagram/DiagramFactory";
import Resource from "@/domain/resource/Resource";
import Resources from "@/domain/resource/Resources";

export default class Diagrams {
    constructor(private readonly values: Diagram[]) { }

    // with or part modify.

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

    // exists or counts.

    public existsSameTypeAndName(name: string, diagramType: DiagramType): boolean {
        return this.values
            .some(d => d.name === name
                && d.type.equals(diagramType));
    }

    public existsSameOf(diagram: Diagram): boolean {
        return !!this.sameOf(diagram);
    }

    public existsIdOf(diagramId: number): boolean {
        return !!this.of(diagramId);
    }

    // search methods.

    public of(diagramId: number): Diagram | undefined {
        return this.values
            .find(diagram => diagram.id === diagramId);
    }

    public sameOf(diagram: Diagram): Diagram | undefined {
        return this.values
            .find(d => d.sameOf(diagram));
    }

    public nameOf(name: string): Diagram | undefined {
        return this.values
            .find(diagram => diagram.name === name);
    }

    public findByNameOf(name: string): Diagrams {
        const diagrams = this.values
            .filter(diagram => diagram.name === name);
        return new Diagrams(diagrams);
    }

    public using(resource: Resource): Diagrams {
        const values = this.values
            .filter(diagram => diagram.usingOf(resource));
        return new Diagrams(values);
    }

    // modify and return method.

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

    public mergeByIdOf(diagram: Diagram): Diagrams {
        return this.remove(diagram)
            .add(diagram);
    }

    public mergeWhenSameOf(diagram: Diagram): Diagrams {
        const sameDiagram = this.sameOf(diagram);
        const newId = sameDiagram
            ? sameDiagram.id
            : this.generateDiagramId();
        const reIdDiagram = diagram.reIdOf(newId);
        return this.mergeByIdOf(reIdDiagram);
    }

    public removeResouceOf(resource: Resource): Diagrams {
        const newValues = this.values
            .map(diagram => diagram.removeResouceOf(resource));
        return new Diagrams(newValues);
    }

    public typesOf(...types: DiagramType[]): Diagrams {
        const filterd = this.values
            .filter(diagram => types.includes(diagram.type));
        return new Diagrams(filterd);
    }

    public typeOf(type: DiagramType): Diagrams {
        return this.typesOf(type);
    }

    // lambda function.

    public forEach(func: (diagram: Diagram) => void) {
        this.values.forEach(func);
    }

    public map<U>(callbackfn: (value: Diagram, index: number) => U): U[] {
        return this.values.map(callbackfn);
    }

    // factory methods.

    public static empty(): Diagrams {
        return new Diagrams([]);
    }

    public static prototypeOf(): Diagrams {
        return new Diagrams([]);
    }

    // get methods.

    public last(): Diagram {
        return this.values[this.values.length - 1];
    }

    public allRelations(): Relations {
        return this.values
            .map(diaglam => diaglam.allRelations())
            .reduce((left, right) => left.concat(right),
                Relations.empty());
    }

    public get length(): number {
        return this.values.length;
    }
}