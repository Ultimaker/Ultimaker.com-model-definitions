import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { ComparisonTableCell } from './ComparisonTableCell';

export class TableRow {
    content: string;
    label?: string;
    tooltip?: Tooltip;
    cells!: ComparisonTableCell[];
}
