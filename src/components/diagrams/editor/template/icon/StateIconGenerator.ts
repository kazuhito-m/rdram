import { Figure } from 'draw2d';
import GenericTextEllipseIconGenerator from '@/components/diagrams/icon/GenericTextEllipseIconGenerator';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';
import Resource from '@/domain/resource/Resource';
import ResourceType from '@/domain/resource/ResourceType';
import Placement from '@/domain/diagram/placement/Placement';

export default class StateIconGenerator extends GenericTextEllipseIconGenerator {
    constructor(private readonly isSinglePort = false) { super(); }

    public resourceType(): ResourceType {
        return ResourceType.状態;
    }

    public generate(placement: Placement, resource: Resource, iconChar: IconFontAndChar): Figure {
        const icon = super.generate(placement, resource, iconChar) as any;
        icon.setStroke(2);
        icon.setBackgroundColor("#FFE0AF");

        icon.getOutputPorts().asArray()
            .forEach((port: Figure) => icon.removePort(port));

        if (this.isSinglePort) this.makeSingleHybridPort(icon);
        else this.makeDoubleVectorPorts(icon);

        return icon;
    }
}
