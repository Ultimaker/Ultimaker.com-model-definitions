import {Uri} from "../uri";

export enum Type {
    BUTTON = 'button',
    LINK = 'link',
}

export class Cta {
    label: string;
    uri: Uri;
    type: Type;
    icon?: string;
}
