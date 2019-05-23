import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { ContentLink } from '../../atoms/cta/ContentLink';

export class TabTableRow  {
    label: string;
    tooltip?: Tooltip;
    value?: string;
    linkList?: ContentLink[];
}
