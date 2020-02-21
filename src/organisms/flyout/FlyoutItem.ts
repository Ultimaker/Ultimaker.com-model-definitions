import { Heading } from '../../atoms/heading/Heading';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { Tag } from '../../atoms/tag/Tag';

export class FlyoutItem {
    description?: Paragraph;
    heading: Heading;
    url: string;
    tag?: Tag;
}
