import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { ComparisonTableCell } from './ComparisonTableCell';

export class TableRow {
    label!: string;
    tooltip?: Tooltip;
    cells!: ComparisonTableCell[];
}
