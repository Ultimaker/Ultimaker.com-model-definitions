import { Tooltip } from '../../atoms/tooltip/Tooltip';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { Tooltippable } from '../../atoms/tooltip/Tooltippable';

export class TabTableRow implements Tooltippable {
    label: string;
    tooltip?: Tooltip;
    value?: string;
    linkList?: ContentLink[];
}
