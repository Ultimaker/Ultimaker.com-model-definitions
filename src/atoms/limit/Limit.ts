import { ContentButton } from '../cta/ContentButton';
import { Expandable } from './Expandable';

export class Limit implements Expandable {
    smallScreen?: number;
    largeScreen?: number;
    expand?: ContentButton;
    expandAmount?: number;
}
