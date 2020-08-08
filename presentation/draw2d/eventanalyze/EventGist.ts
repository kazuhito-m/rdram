import { Figure } from "draw2d";

/**
 * drow2dのCommandから抽出した「処理に必要なモノ(要約)」。
 */
export default interface EventGist {
    eventType: string;
    figure?: Figure; // rootイベントの場合はundifinedになる可能性が在る。
    source?: Figure;
    target?: Figure;
    rootCommand: any;
}