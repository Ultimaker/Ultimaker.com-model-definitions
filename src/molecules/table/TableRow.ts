import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { ComparisonTableCell } from './ComparisonTableCell';

export class TableRow {
    content: string;
    tooltip?: Tooltip;
    cells!: ComparisonTableCell[];
}
