import {CtaBlockInterface} from "../molecules/CtaBlockInterface";
import {ImageInterface} from "../atoms/ImageInterface";

export abstract class HeroInterface {
    // HEAD
    title: string;

    // META
    image: ImageInterface;

    // FOOT
    ctas: CtaBlockInterface
}
