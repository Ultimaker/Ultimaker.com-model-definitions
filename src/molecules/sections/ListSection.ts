import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Limit } from '../../atoms/limit/Limit';
import { Card } from '../cards/Card';

export class ListSection {
    cards: Card[];
    title?: string;
    tooltip?: Tooltip;
    limit?: Limit;
    showAllLabel?: string;
}
