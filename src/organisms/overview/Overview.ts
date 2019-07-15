import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { FilterCategory } from '../../molecules/filter-category/FilterCategory';
import { ListSection } from '../../molecules/sections/ListSection';
import { OrganismInterface } from '../OrganismInterface';

export class Overview implements OrganismInterface {
    ctas?: CtaBlock;
    filter?: FilterCategory[];
    sections: ListSection[];
    subtitle?: string;
    title: string;
}
