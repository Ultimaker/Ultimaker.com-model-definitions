import { Image } from '../../atoms/media/Image';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { ContentButton } from '../../atoms/cta/ContentButton';
import { YoutubeLink } from '../../atoms/cta/YoutubeLink';
export declare class ContentCover {
    title: string;
    description: string;
    image?: Image;
    cta?: ContentLink | ContentButton | YoutubeLink;
}
