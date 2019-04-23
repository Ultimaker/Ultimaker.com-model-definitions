import { BlockIcon } from '../../molecules/blocks/BlockIcon';
import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
export declare class OverviewUBR implements OrganismInterface {
    title: string;
    subtitle?: string;
    items: BlockIcon[];
    ctas?: CtaBlock;
}
