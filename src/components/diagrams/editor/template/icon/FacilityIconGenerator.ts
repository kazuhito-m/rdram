import GenericSingleIconGenerator from '@/components/diagrams/icon/GenericSingleIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';

export default class FacilityIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        return ResourceType.建物;
    }
}
