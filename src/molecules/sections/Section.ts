import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Card } from '../cards/Card';

export class Section {
    cards: Card[];
    title?: string;
    tooltip?: Tooltip;
    limit?: number;
    showAllLabel?: string;
}
