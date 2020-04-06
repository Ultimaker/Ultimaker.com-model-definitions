import { Heading } from '../../atoms/heading/Heading';
import { Link } from '../../atoms/link/Link';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { Tag } from '../../atoms/tag/Tag';

export class FlyoutItem {
    description?: Paragraph;
    heading: Heading;
    link: Link;
    url: string; // @todo: remove when integration service and nuxt are deployed using link
    tag?: Tag;
}
