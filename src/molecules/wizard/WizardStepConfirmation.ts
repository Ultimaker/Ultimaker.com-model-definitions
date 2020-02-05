import { Image } from '../../atoms/media/Image';
import { Component } from '../../Component';
import { CtaBlock } from '../cta/CtaBlock';

export class WizardStepConfirmation implements Component {
    title: string;
    subtitle?: string;
    contentTitle: string;
    content: string;
    image: Image;
    ctas?: CtaBlock;
}
