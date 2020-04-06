import { Heading } from '../../atoms/heading/Heading';
import { Link } from '../../atoms/link/Link';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { Tag } from '../../atoms/tag/Tag';
export declare class FlyoutItem {
    description?: Paragraph;
    heading: Heading;
    link: Link;
    url: string;
    tag?: Tag;
}
