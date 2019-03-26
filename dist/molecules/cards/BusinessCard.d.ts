import { Card } from './Card';
import { Property } from '../../atoms/properties/Property';
import { ContentLink } from '../../atoms/cta/ContentLink';
export declare class BusinessCard extends Card {
    contentLink: ContentLink;
    properties?: Property[];
}
