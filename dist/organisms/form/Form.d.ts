import { Component } from '../../Component';
import { Fieldset } from './Fieldset';
import { FormField } from './FormField';
import { InputHidden } from './InputHidden';
import { Submit } from './Submit';
export declare class Form implements Component {
    action: string;
    fields?: (FormField | Submit)[];
    fieldsets?: Fieldset[];
    hiddenFields?: InputHidden[];
    id?: string;
    method: string;
}
