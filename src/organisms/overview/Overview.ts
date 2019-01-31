import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { Section } from '../../molecules/sections/Section';

export class Overview implements OrganismInterface {
    title: string;
    subtitle?: string;
    sections: Section[];
    ctas?: CtaBlock;
}
