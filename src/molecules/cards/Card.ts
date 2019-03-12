import { AnalyticalEvent } from '../../events/AnalyticalEvent';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { CraftImage } from '../../atoms/media/CraftImage';
import { Image } from '../../atoms/media/Image';

export class Card {
    contentLink: ContentLink;
    title: string;
    clickEvent?: AnalyticalEvent;
    image?: Image | CraftImage;
}
