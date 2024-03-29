import IconZOrderLevel from "./IconZOrderLevel";

/**
 * アイコンの形状の状態を定義する。
 * <p>
 * FigureのuserDataに仕込む。
 */
export default class IconStatus {
    constructor(public readonly zOrder = IconZOrderLevel.NORMAL) { }
}