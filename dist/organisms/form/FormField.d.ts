import { Submit } from './Submit';
import { Select } from './Select';
import { Input } from './Input';
import { FormFieldValidation } from './FormFieldValidation';
export declare class FormField {
    field: Input | Select | Submit;
    instructions?: string;
    label?: string;
    validations?: FormFieldValidation[];
}
