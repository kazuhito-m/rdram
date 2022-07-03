import { Figure } from "draw2d";

/**
 * drow2dのCommandから抽出した「処理に必要なモノ(要約)」。
 */
export default class EventGist {
    private constructor(
        public readonly rootCommand: any,
        public readonly eventType: string,
        public readonly figure?: Figure, // rootイベントの場合はundifinedになる可能性が在る。
        private readonly source?: Figure,
        private readonly target?: Figure,
        public readonly connection?: any
    ) { }

    public existsIdWhenConnectPorts(): boolean {
        const srcResourceId = this.sourceResouceId();
        const distResourceId = this.targetResouceId();
        return !!srcResourceId && !!distResourceId;
    }

    public sourceResouceId(): number {
        return this.searchPortId(this.source?.getParent()) as number;
    }

    public targetResouceId(): number {
        return this.searchPortId(this.target?.getParent()) as number;
    }

    private searchPortId(target: Figure | undefined, depth = 0): number | undefined {
        if (!target) return undefined;
        if (this.isNumeric(target.getId()))
            return parseInt(target.getId(), 10);

        if (depth > 1) return undefined; // 一つ上の親Figureまでidを追う。
        return this.searchPortId(target.getParent(), depth + 1);
    }

    private isNumeric(value: string): boolean {
        return !!value.match(/^[0-9]+$/) && !isNaN(parseInt(value));
    }

    public static of(targetCommand: any, rootCommand: any): EventGist {
        return new EventGist(
            rootCommand,
            targetCommand.getLabel(),
            targetCommand.figure,
            targetCommand.source,
            targetCommand.target,
            targetCommand.connection,
        );
    }
}
