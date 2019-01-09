import { Heading } from 'molecules/heading';
import { Image } from 'molecules/image';
import { Cta } from 'molecules/cta';

export interface Hero {
    heading: Heading;
    cta: Cta[];
    image: Image;
}
