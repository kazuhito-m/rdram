import GenericAreaIconGenerator from '@/components/diagrams/icon/GenericAreaIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';

export default class CompanyIconGenerator extends GenericAreaIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.会社;
    }
}