import { Fieldset } from './Fieldset';
import { Input } from './Input';
import { Select } from './Select';
import { Submit } from './Submit';

export class Form {
    action: string;
    fields?: (Input | Select | Submit)[];
    fieldsets?: Fieldset[];
    id?: string;
    method: string;
}