import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import DiagramCanvas from "@/presentation/components/diagrams/editor/template/canvas/DiagramCanvas.vue";
import Product from "~/domain/product/Product";
import { Figure } from "draw2d";
import FigureAnalyzer from "./FigureAnalyzer";
import Diagram from "~/domain/diagram/Diagram";

export default class GemerocDeleteShapeEvents implements EventsOfType<Diagram, DiagramCanvas> {
    public eventGists: EventGist[] = [];

    private readonly figureAnalyzer = new FigureAnalyzer();

    public eventType(): string {
        return "Delete Shape";
    }

    public prototype(): GemerocDeleteShapeEvents {
        return new GemerocDeleteShapeEvents();
    }

    public validate(diagram: Diagram, product: Product, view: DiagramCanvas): boolean {
        // TODO なんども連打される問題について
        // ひょっとして「Rootじゃなく、子イベントを叩いてる」からかな？
        const resourceIds = this.figureAnalyzer.analyzeResourceIds(this.validTargetFigures());
        if (view.confirmResourceDelete(resourceIds, diagram)) return true;

        const rootCommand = this.eventGists[0].rootCommand;
        rootCommand.undo();
        return false;
    }

    public apply(diagram: Diagram, product: Product, view: DiagramCanvas): Diagram {
        // 対象のFigure
        const validTargetFigures = this.validTargetFigures();
        // Iconと線に分ける
        const resourceIds = this.figureAnalyzer.analyzeResourceIds(validTargetFigures);
        const relationIds = this.figureAnalyzer.analizeRelationIds(validTargetFigures);
        console.log(`消す位置:${resourceIds.join()}`)
        console.log(`消す線:${relationIds.join()}`)

        return diagram
            .removeResourcesOf(resourceIds)
            .removeRelationsOf(relationIds);
    }

    private validTargetFigures(): Figure[] {
        return this.eventGists
            .map(eventGist => eventGist.figure)
            .filter(figure => typeof figure !== 'undefined')
            .map(figure => figure as Figure);
    }
}