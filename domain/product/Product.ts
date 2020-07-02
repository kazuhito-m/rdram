import Diagram from '@/domain/diagram/Diagram';

export default interface Product {
    id: string;
    name: string;
    diagrams: Diagram[];
}