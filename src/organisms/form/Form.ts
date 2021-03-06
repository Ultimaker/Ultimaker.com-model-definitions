import { Component } from '../../Component';
import { Fieldset } from './Fieldset';
import { FormField } from './FormField';
import { InputHidden } from './InputHidden';
import { Submit } from './Submit';

export class Form implements Component {
    action: string;
    analyticsIdentifier?: string;
    fields?: (FormField | Submit)[];
    hiddenFields?: InputHidden[];
    id?: string;
    method: string;
}
