import { ContentButton } from '../../atoms/cta/ContentButton';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { YoutubeLink } from '../../atoms/cta/YoutubeLink';
import { ModalButton } from '../wizard/ModalButton';

export class CtaBlock {
    ctas: (ContentButton | ContentLink | YoutubeLink | ModalButton)[];
}
