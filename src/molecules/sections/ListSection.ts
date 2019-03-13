import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Limit } from '../../atoms/limit/Limit';
import { Card } from '../cards/Card';
import { AnalyticalEvent } from '../../events/AnalyticalEvent';

export class ListSection {
    cards: Card[];
    title?: string;
    tooltip?: Tooltip;
    limit?: Limit;
    showAllLabel?: string;
    clickEvent?: AnalyticalEvent;
}
