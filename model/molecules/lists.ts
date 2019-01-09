import { IconLabel } from './icon-label';
import { Card } from './cards';
import { Cta } from './cta';

export enum ListModifier {
    DEFINITION = 'definition',
    HORIZONTAL = 'horizontal',
    ORDERED = 'ordered',
    UNORDERED = 'unordered',
}

export interface List {
    item: string[] | IconLabel[] | Cta[];
    modifier: ListModifier; 
}

export interface CardList {
    items: Card[];
    cta: Cta;
}
