import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Card } from '../cards/Card';

export class ListSection {
    cards: Card[];
    title?: string;
    tooltip?: Tooltip;
    limit?: number;
    showAllLabel?: string;
}
