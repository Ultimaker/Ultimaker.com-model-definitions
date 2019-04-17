import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Limit } from '../../atoms/limit/Limit';
import { BusinessCard } from '../cards/BusinessCard';
import { ContentBlock } from '../blocks/ContentBlock';
import { ContentButton } from '../../atoms/cta/ContentButton';
import { CardProduct } from '../cards/CardProduct';

export class ListSection {
    cards: BusinessCard[] | ContentBlock[] | CardProduct[];
    expand?: ContentButton;
    limit?: Limit;
    title?: string;
    tooltip?: Tooltip;
}
