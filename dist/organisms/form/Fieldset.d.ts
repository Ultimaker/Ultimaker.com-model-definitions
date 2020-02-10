import { Input } from './Input';
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { Select } from './Select';
import { Submit } from './Submit';
export declare class Fieldset {
    legend?: string;
    instructions?: Paragraph;
    fields?: (Input | Select | Submit)[];
}
