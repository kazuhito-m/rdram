import { Figure } from 'draw2d';
import ResourceType from '@/domain/resource/ResourceType';
import GenericTextCardIconGenerator from '@/components/diagrams/icon/GenericTextCardIconGenerator';
import Placement from '@/domain/diagram/placement/Placement';
import Request from '@/domain/resource/Request';
import IconFontAndChar from '@/components/diagrams/icon/IconFontAndChar';

export default class RequestIconGenerator extends GenericTextCardIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.要求;
    }

    public generate(placement: Placement, request: Request, iconChar: IconFontAndChar): Figure {
        const figure = super.generate(placement, request, iconChar) as any;
        figure.setBackgroundColor("#FBDADE");
        return figure;
    }
}