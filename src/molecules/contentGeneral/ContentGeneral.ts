import { Image } from '../../atoms/media/Image';
import { CtaBlock } from '../cta/CtaBlock';

export class ContentGeneral {
    title: string;
    description: string;
    image: Image;
    ctas: CtaBlock;
    reversed?: boolean;
}
