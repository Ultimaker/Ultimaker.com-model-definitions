import { AnalyticalEvent } from '../../events/AnalyticalEvent';
import { Image } from '../../atoms/media/Image';

export class Card {
    title: string;
    clickEvent?: AnalyticalEvent;
    image?: Image;
}
