import { ContentLink } from '../../atoms/cta/ContentLink';
import { FlyoutItem } from './FlyoutItem';
import { Image } from '../../atoms/media/Image';

export class Flyout {
    image: Image;
    items: FlyoutItem[];
    link?: ContentLink;
}
