import { Card } from './Card';
import { Label } from '../../atoms/label/Label';
export declare class CardArticle extends Card {
    description: string;
    labels?: Label[];
    url: string;
}
