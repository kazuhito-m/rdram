import EventsOfType from "~/presentation/draw2d/eventanalyze/EventsOfType";
import EventGist from "~/presentation/draw2d/eventanalyze/EventGist";
import Product from "~/domain/product/Product";
import BusinessContextDiagram from "~/domain/diagram/businesscontext/BusinessContextDiagram";
import { Figure } from "draw2d";

export default class BCDDeleteShapeEvents implements EventsOfType<BusinessContextDiagram> {
    public eventGists: EventGist[] = [];

    public eventType(): string {
        return "Delete Shape";
    }

    public prototype(): BCDDeleteShapeEvents {
        return new BCDDeleteShapeEvents();
    }

    public validate(diagram: BusinessContextDiagram, product: Product): boolean {
        const relations = diagram.relations;

        // TODO figure `が「線」だったときの考慮。

        const deleteTargetResourceIds = this.validTargetFigures()
            .map(figure => parseInt(figure.getId(), 10));

        const hasRelation = deleteTargetResourceIds.some(resourceId =>
            relations.some(relation => relation.fromResourceId === resourceId || relation.toResourceId === resourceId)
        );

        // TODO なんども連打される問題について
            // ひょっとして「Rootじゃなく、子イベントを叩いてる」からかな？

        if (hasRelation) {
            const message = `選択された要素には、他の要素への関連があります。それらを含め削除してよろしいですか。`;
            if (!confirm(message)) {
                const rootCommand = this.eventGists[0].rootCommand;
                rootCommand.undo();
                return false;
            }
        }
        return true;
    }
    public apply(diagram: BusinessContextDiagram, product: Product): boolean {

        // TODO figure `が「線」だったときの考慮。
        // 単体の場合だって在るし、線だけを選択されて削除、な場合もある。


        const deleteTargetResourceIds = this.validTargetFigures()
            .map(figure => parseInt(figure.getId(), 10));

        // TODO 関連線の削除
        // 仮実装として、今は「全線を削除する」ロジックを入れておく。
        diagram.relations.length = 0;

        const placements = diagram.placementObjects;
        for (let j = placements.length - 1; j >= 0; j--) {
            const resourceId = placements[j].resourceId;
            if (deleteTargetResourceIds.some(deleteResourceId => deleteResourceId === resourceId)) {
                placements.splice(j, 1);
            }
        }
        // UI同期。
        // TODO 親への伝搬
        // this.resyncParets();
        return true;
    }

    private validTargetFigures(): Figure[] {
        return this.eventGists
            .map(eventGist => eventGist.figure)
            .filter(figure => typeof figure !== 'undefined')
            .map(figure => figure as Figure);
    }
}