import { FlyoutItem } from './FlyoutItem';
import { Image } from '../../atoms/media/Image';
import { Link } from '../../atoms/link/Link';
import { MenuHighlight } from '../../molecules/menu-highlight/MenuHighlight';

export class Flyout {
    image: Image;
    items: FlyoutItem[];
    link?: Link;
    menuHighlight: MenuHighlight;
}
