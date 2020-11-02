import { Image } from '../../atoms/media/Image';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { ContentButton } from '../../atoms/cta/ContentButton';
export declare class HighlightGridBlock {
    title: string;
    description: string;
    image: Image;
    cta: ContentLink | ContentButton;
    reversed: boolean;
}
