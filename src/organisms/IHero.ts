import {ICtaBlock} from "../molecules/ICtaBlock";
import {IImage} from "../atoms/IImage";

export abstract class IHero {
    // HEAD
    title: string;

    // META
    image: IImage;

    // FOOT
    ctas: ICtaBlock
}
