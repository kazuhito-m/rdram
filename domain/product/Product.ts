import Diagram from '@/domain/diagram/Diagram';
import Company from '../company/Company';
import UserSettings from '../setting/UserSettings';

export default interface Product {
    id: string;
    name: string;
    userSettings: UserSettings;
    diagrams: Diagram[];
    resourceIdSequence: number;
    companies: Company[];
}