import { Image } from '../../atoms/media/Image';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { OrganismInterface } from '../OrganismInterface';

export abstract class Hero implements OrganismInterface {
    readonly image: Image;
    readonly title: string;
    readonly description: string;
    readonly ctas: CtaBlock;
}
