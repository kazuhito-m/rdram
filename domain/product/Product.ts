import Diagram from '@/domain/diagram/Diagram';
import UserSettings from '@/domain//setting/UserSettings';
import Resource from '@/domain/resource/Resource';

export default interface Product {
    id: string;
    name: string;
    userSettings: UserSettings;
    diagrams: Diagram[];
    resourceIdSequence: number;
    resources: Resource[];
}