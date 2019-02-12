import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Card } from '../cards/Card';

export interface Limit {
	smallScreen?: number;
	largeScreen?: number;
}

export class ListSection {
    cards: Card[];
    title?: string;
    tooltip?: Tooltip;
    limit?: Limit;
    showAllLabel?: string;
}
