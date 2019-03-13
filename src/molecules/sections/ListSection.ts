import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Limit } from '../../atoms/limit/Limit';
import { Card } from '../cards/Card';
import { Expand } from './Expand';

export class ListSection {
    cards: Card[];
    expand?: Expand;
    limit?: Limit;
    title?: string;
    tooltip?: Tooltip;
}
