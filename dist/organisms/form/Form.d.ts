import { Component } from '../../Component';
import { FormField } from './FormField';
import { InputHidden } from './InputHidden';
import { Submit } from './Submit';
export declare class Form implements Component {
    action: string;
    analyticsIdentifier?: string;
    fields?: (FormField | Submit)[];
    hiddenFields?: InputHidden[];
    id?: string;
    method: string;
}
