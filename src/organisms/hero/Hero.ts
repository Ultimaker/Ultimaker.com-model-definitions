import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { OrganismInterface } from '../OrganismInterface';

export abstract class Hero implements OrganismInterface {
    title: string;
    subtitle?: string;
    description: string;
    ctas?: CtaBlock;
}
