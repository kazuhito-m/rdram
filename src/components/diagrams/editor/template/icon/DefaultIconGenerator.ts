import GenericSingleIconGenerator from '@/components/diagrams/icon/GenericSingleIconGenerator';
import ResourceType from '@/domain/resource/ResourceType';

export default class DefaultIconGenerator extends GenericSingleIconGenerator {
    public resourceType(): ResourceType {
        throw new Error("このアイコンジェネレータが比較されることはない。");
    }

    private static readonly ONE = new DefaultIconGenerator();

    public static get(): DefaultIconGenerator {
        return DefaultIconGenerator.ONE;
    }
}
