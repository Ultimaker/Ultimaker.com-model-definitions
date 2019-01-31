import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { BusinessCard } from '../cards/BusinessCard';
import { Card } from '../cards/Card';

export class Section {
    cards: BusinessCard[] | Card[];
    title?: string;
    tooltip?: Tooltip;
    limit?: number;
    showAllLabel?: string;
}
