import { Figure } from "draw2d";

export default class FigureAnalyzer {
    public isConnection(figure?: Figure): boolean {
        if (!figure) return false;
        let id = figure.getId();
        if (!id) return false;
        return !id.search(/^[0-9]+$/);
    }

    public analyzeResourceId(figure?: Figure): number | null {
        if (this.isConnection(figure)) return null;
        return parseInt(figure?.getId(), 10);
    }

    public analyzeResourceIds(figures: Figure[]): number[] {
        return figures.filter(figure => this.isConnection(figure))
            .map(figure => parseInt(figure.getId(), 10));
    }

    public analizeRelationIds(figures: Figure[]): string[] {
        return figures.filter(figure => !this.isConnection(figure))
            .map(figure => figure.getId() as string);
    }
}