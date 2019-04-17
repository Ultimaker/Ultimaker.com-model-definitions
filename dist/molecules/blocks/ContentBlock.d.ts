import { Image } from '../../atoms/media/Image';
import { ContentButton } from '../../atoms/cta/ContentButton';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { YoutubeLink } from '../../atoms/cta/YoutubeLink';
export declare class ContentBlock {
    title: string;
    description: string;
    image?: Image;
    cta?: ContentButton | ContentLink | YoutubeLink;
}
