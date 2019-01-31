import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { ResellerSection } from '../../molecules/sections/ResellerSection';
import { Section } from '../../molecules/sections/Section';

enum SectionTypes {
    Section,
    ResellerSection,
}

export class Overview implements OrganismInterface {
    title: string;
    subtitle?: string;
    sections: SectionTypes[];
    ctas?: CtaBlock;
}
