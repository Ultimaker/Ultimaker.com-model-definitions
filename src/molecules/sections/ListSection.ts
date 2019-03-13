import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Limit } from '../../atoms/limit/Limit';
import { Card } from '../cards/Card';
import { ContentButton } from '../../atoms/cta/ContentButton';

export class ListSection {
    cards: Card[];
    expand?: ContentButton;
    limit?: Limit;
    title?: string;
    tooltip?: Tooltip;
}
