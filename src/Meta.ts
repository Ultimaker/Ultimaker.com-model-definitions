import { Image } from './atoms/media/Image';
import { Hreflang } from './Hreflang';

export class Meta {
    title: string;
    description: string;
    hreflang?: Hreflang[];
    image?: Image;
}
