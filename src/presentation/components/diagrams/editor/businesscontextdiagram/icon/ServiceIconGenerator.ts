import GenericSingleIconGenerator from '~/presentation/components/diagrams/icon/GenericSingleIconGenerator';
import ResourceType from '~/domain/resource/ResourceType';

export default class ServiceIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.サービス;
    }
}