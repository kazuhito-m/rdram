import Diagram from '@/domain/diagram/Diagram';
import Company from '../company/Company';

export default interface Product {
    id: string;
    name: string;
    diagrams: Diagram[];
    companies: Company[];
}