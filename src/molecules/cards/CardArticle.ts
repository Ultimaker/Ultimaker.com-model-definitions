import { Card } from './Card';

export class CardArticle extends Card {
    description: string;
    labels?: string[];
    subtitle?: string;
    url: string;
}
