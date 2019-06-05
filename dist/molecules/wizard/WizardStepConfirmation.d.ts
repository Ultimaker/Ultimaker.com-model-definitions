import { WizardStepInterface } from './WizardStepInterface';
import { Image } from '../../atoms/media/Image';
import { CtaBlock } from '../cta/CtaBlock';
export declare class WizardStepConfirmation implements WizardStepInterface {
    title: string;
    subtitle?: string;
    contentTitle: string;
    content: string;
    image: Image;
    ctas?: CtaBlock;
}
