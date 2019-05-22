import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { Table } from '../../molecules/table/Table';
export declare class TableCompare implements OrganismInterface {
    title: string;
    subtitle?: string;
    content: Table;
    ctas?: CtaBlock;
}
