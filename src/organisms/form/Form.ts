import { Component } from '../../Component';
import { Fieldset } from './Fieldset';
import { Input } from './Input';
import { Select } from './Select';
import { Submit } from './Submit';

export class Form implements Component {
    action: string;
    fields?: (Input | Select | Submit)[];
    fieldsets?: Fieldset[];
    id?: string;
    method: string;
}
