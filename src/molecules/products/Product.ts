import { ProductPricing } from './ProductPricing';
import { ProductProperties } from './ProductProperties';

export class Product {
    abbreviation: string;
    icon: string;
    name: string;
    pricing: ProductPricing;
    properties: ProductProperties;
}
