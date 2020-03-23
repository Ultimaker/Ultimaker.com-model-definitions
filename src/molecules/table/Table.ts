import { TableColumn } from './TableColumn';
import { TableRow } from './TableRow';
import { TableRowGroup } from './TableRowGroup';

export class Table {
    columns: TableColumn[];
    rows: (TableRow | TableRowGroup)[];
}
