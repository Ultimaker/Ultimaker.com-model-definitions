import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { Brand } from '../../molecules/brand/Brand';
import { Limit } from '../../atoms/limit/Limit';
import { ContentButton } from '../../atoms/cta/ContentButton';

export class Brands implements OrganismInterface {
    items: Brand[];
    title: string;
    ctas?: CtaBlock;
    expand?: ContentButton;
    limit?: Limit;
    subtitle?: string;
}
