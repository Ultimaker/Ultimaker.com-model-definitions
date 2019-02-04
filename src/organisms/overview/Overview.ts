import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { ListSection } from '../../molecules/sections/ListSection';

export class Overview implements OrganismInterface {
    title: string;
    subtitle?: string;
    sections: ListSection[];
    ctas?: CtaBlock;
}
