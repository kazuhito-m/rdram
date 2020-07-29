import draw2d from 'draw2d';

/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */
export default class TopLeftLocator extends draw2d.layout.locator.TopLocator {
    public readonly NAME = 'draw2d.layout.locator.TopLeftLocator';

    constructor(attr?: any, setter?: any, getter?: any) {
        super(attr, setter, getter);
        this.padding = 0;
    }

    public relocate(index: any, target: any) {
        const targetBoundingBox = target.getBoundingBox();
        let y = 0;
        if (!(target instanceof draw2d.Port)) y = -targetBoundingBox.h - 2;
        target.setPosition(0, y);
    }
}