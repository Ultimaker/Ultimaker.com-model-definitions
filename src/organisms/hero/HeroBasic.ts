import { Hero } from './Hero';
import { Image } from '../../atoms/media/Image';

export class HeroBasic extends Hero {
    description: string;
    image?: Image;
    subtitle?: string;
}
