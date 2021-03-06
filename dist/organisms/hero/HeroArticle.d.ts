import { Image } from '../../atoms/media/Image';
import { OrganismInterface } from '../OrganismInterface';
export declare class HeroArticle implements OrganismInterface {
    title: string;
    estimatedReadingTime?: string;
    image?: Image;
    subtitle?: string;
}
