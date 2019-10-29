import { Hero } from './Hero';
import { Image } from '../../atoms/media/Image';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { Product } from '../../molecules/products/Product';

export class HeroProduct extends Hero {
    description: string;
    products?: Product[];
    image?: Image;
    linkList?: ContentLink[];
    subtitle?: string;
}
