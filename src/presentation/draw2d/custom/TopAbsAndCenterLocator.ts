import draw2d, { Figure } from 'draw2d';

/**
 * draw2dのToLocatorが「上に付くが、横位置は真ん中に固定」なので、
 * 「上について横位置は左端」というロケータが欲しくて、自力で実装したもの。
 */
export default class TopAbsAndCenterLocator extends draw2d.layout.locator.XYAbsPortLocator {
    public readonly NAME = 'draw2d.layout.locator.TopAbsAndCenterLocator';

    constructor(attr?: any, setter?: any, getter?: any) {
        super(attr, setter, getter);
    }

    public relocate(index: any, target: Figure) {
        let x = 0;
        const parent = target.getParent();
        if (!(target instanceof draw2d.Port))
            x = (parent.getWidth() - target.getWidth()) / 2;
        this.x = x;
        super.relocate(index, target);
    }
}