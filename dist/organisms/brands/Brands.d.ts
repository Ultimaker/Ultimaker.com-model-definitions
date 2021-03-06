import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { Brand } from '../../molecules/brand/Brand';
import { Limit } from '../../atoms/limit/Limit';
import { ContentButton } from '../../atoms/cta/ContentButton';
import { Expandable } from '../../atoms/limit/Expandable';
import { Limitable } from '../../atoms/limit/Limitable';
export declare class Brands implements OrganismInterface, Expandable, Limitable {
    items: Brand[];
    title: string;
    ctas?: CtaBlock;
    expand?: ContentButton;
    limit?: Limit;
    subtitle?: string;
}
