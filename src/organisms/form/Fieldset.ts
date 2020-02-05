import { Input } from './Input';
import { Select } from './Select';
import { Submit } from './Submit';

export class Fieldset {
    legend?: string;
    fields?: (Input | Select | Submit)[];
}
