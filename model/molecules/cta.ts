import { Uri } from 'atoms/uri';

export enum CtaModifier {
    BUTTON = 'button',
    LINK = 'link',
}

export interface Cta {
    label: string;
    uri: Uri;
    modifier: CtaModifier;
    icon?: string;
}
