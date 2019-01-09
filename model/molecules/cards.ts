import { List } from './lists';
import { Cta } from './cta';
import { Image } from 'atoms/image';

export enum CardModifier {
    BRAND = 'brand',
    RESELLER = 'reseller',
    PRODUCT = 'product',
}

export interface Card {
    title: string;
    paragraph?: string;
    icon?: string;
    image: Image;
    cta: Cta;
    list: List;
    modifier: CardModifier;
}