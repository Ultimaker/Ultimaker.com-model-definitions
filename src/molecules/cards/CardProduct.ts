import { Card } from './Card';

export class CardProduct extends Card {
    description?: string;
    properties?: string[];
    subtitle?: string;
    url: string;
}
