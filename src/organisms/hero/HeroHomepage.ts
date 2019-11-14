import { Hero } from './Hero';
import { Image } from '../../atoms/media/Image';
import { VideoSource } from '../../atoms/video-source/VideoSource';

export class HeroHomepage extends Hero {
    description?: string;
    image?: Image;
    loop?: boolean;
    notSupportedMessage?: string;
    videoSources?: VideoSource[];
}
