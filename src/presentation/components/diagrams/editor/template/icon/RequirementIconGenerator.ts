import GenericSingleIconGenerator from '~/presentation/components/diagrams/icon/GenericSingleIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';
import GenericTextCardIconGenerator from '@/presentation/components/diagrams/icon/GenericTextCardIconGenerator';

export default class RequirementIconGenerator extends GenericTextCardIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.要件;
    }
}