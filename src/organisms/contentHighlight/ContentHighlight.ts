import { OrganismInterface } from '../OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { Image } from '../../atoms/media/Image';

export class ContentHighlight implements OrganismInterface{
    title: string;
    subtitle?: string;
    description?: string;
    image?: Image;
    ctas?: CtaBlock;
    reversed: boolean;
}
