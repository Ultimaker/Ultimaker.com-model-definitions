import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { ComparisonTableCell } from './ComparisonTableCell';
export declare class TableRow {
    content: string;
    label?: string;
    tooltip?: Tooltip;
    cells: ComparisonTableCell[];
}
