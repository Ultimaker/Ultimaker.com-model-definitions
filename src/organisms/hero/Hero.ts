import { Image } from '../../atoms/media/Image';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { OrganismInterface } from '../OrganismInterface';

export abstract class Hero implements OrganismInterface {
    readonly title: string;
    readonly subtitle?: string;
    readonly image?: Image;
    readonly ctas?: CtaBlock;
}
