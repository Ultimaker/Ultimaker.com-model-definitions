import { Cta } from 'molecules/cta';
import { Heading } from 'molecules/heading';

export interface Base {
    header: Heading;
    content: any;
    footer: Cta[];
}
