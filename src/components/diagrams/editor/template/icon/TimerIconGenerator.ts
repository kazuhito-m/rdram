import GenericSingleIconGenerator from '@/components/diagrams/icon/GenericSingleIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';

export default class TimerIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.タイマー;
    }
}