import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { TabTable } from '../../molecules/tabTable/TabTable';
export declare class TabbedTable implements OrganismInterface {
    title: string;
    subtitle?: string;
    tabs: TabTable[];
    ctas?: CtaBlock;
}
