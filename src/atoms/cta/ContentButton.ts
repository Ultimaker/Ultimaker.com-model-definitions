import { Cta } from './Cta';

export enum ButtonStyle {
    primary = 'primary',
    secondary = 'secondary',
}

export class ContentButton extends Cta {
    buttonStyle: ButtonStyle;
    url?: string;
}
