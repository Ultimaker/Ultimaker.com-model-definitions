import { Image } from './atoms/media/Image';
import { Hreflang } from './Hreflang';
import { Canonical } from './Canonical';
export declare class Meta {
    title: string;
    description: string;
    canonical: Canonical;
    hreflang?: Hreflang[];
    image?: Image;
}
