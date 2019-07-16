import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { ListSection } from '../../molecules/sections/ListSection';
import { OrganismInterface } from '../OrganismInterface';
export declare class Overview implements OrganismInterface {
    ctas?: CtaBlock;
    sections: ListSection[];
    subtitle?: string;
    title: string;
}
