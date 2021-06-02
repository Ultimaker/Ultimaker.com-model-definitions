import { Cta } from './Cta';
export declare enum ButtonStyle {
    primary = "primary",
    secondary = "secondary"
}
export declare class ContentButton extends Cta {
    buttonStyle: ButtonStyle;
    url?: string;
}
