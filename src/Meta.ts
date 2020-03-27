import { Image } from './atoms/media/Image';
import { Hreflang } from './Hreflang';
import { Canonical } from './Canonical';
import { Thing, WithContext } from 'schema-dts';

export class Meta {
    title: string;
    description: string;
    canonical: Canonical;
    hreflang?: Hreflang[];
    image?: Image;
    robots?: string;
    structuredData?: WithContext<Thing>[];
}
