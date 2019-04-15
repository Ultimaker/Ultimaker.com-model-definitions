import { ContentGeneral } from '../contentGeneral/ContentGeneral';
import { ContentCover } from '../contentCover/ContentCover';

export class Tab  {
    label: string;
    content: ContentGeneral | ContentCover;
}
