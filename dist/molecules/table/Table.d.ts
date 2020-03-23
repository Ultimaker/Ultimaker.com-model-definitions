import { TableColumn } from './TableColumn';
import { TableRow } from './TableRow';
import { TableRowGroup } from './TableRowGroup';
export declare class Table {
    columns: TableColumn[];
    rows: (TableRow | TableRowGroup)[];
}
