import { Hero } from './Hero';
import { Image } from '../../atoms/media/Image';

export class HeroBasic extends Hero {
    subtitle?: string;
    description: string;
    image?: Image;
}
