import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { Limit } from '../../atoms/limit/Limit';
import { BusinessCard } from '../cards/BusinessCard';
import { ContentBlock } from '../blocks/ContentBlock';
import { ContentButton } from '../../atoms/cta/ContentButton';
import { CardProduct } from '../cards/CardProduct';
import { Limitable } from '../../atoms/limit/Limitable';
import { Expandable } from '../../atoms/limit/Expandable';
import { Tooltippable } from '../../atoms/tooltip/Tooltippable';

export class ListSection implements Limitable, Expandable, Tooltippable {
    cards: BusinessCard[] | ContentBlock[] | CardProduct[];
    // @Deprecated expand will become part of limit, refactor design components
    expand?: ContentButton;
    limit?: Limit;
    title?: string;
    tooltip?: Tooltip;
}
