import { AnalyticalEvent } from '../../events/AnalyticalEvent';
import { CraftImage } from '../../atoms/media/CraftImage';
import { Image } from '../../atoms/media/Image';

export class Card {
    title: string;
    clickEvent?: AnalyticalEvent;
    image?: Image | CraftImage;
}
