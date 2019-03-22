import { Image } from '../../atoms/media/Image';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { OrganismInterface } from '../OrganismInterface';
export declare abstract class Hero implements OrganismInterface {
    title: string;
    subtitle?: string;
    image?: Image;
    ctas?: CtaBlock;
}
