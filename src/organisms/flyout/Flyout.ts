import { FlyoutItem } from './FlyoutItem';
import { Image } from '../../atoms/media/Image';
import { Link } from '../../atoms/link/Link';

export class Flyout {
    image: Image;
    items: FlyoutItem[];
    link?: Link;
}
