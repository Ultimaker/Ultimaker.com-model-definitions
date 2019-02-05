import { Image } from '../../atoms/media/Image';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { CraftImage } from '../../atoms/media/CraftImage';

export class Card {
    title: string;
    image: Image | CraftImage;
    contentLink: ContentLink;
}
