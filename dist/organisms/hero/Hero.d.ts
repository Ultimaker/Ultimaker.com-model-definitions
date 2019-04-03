import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { OrganismInterface } from '../OrganismInterface';
export declare abstract class Hero implements OrganismInterface {
    title: string;
    description: string;
    ctas?: CtaBlock;
}
