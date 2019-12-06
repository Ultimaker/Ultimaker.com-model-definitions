import { FormFieldValidation } from './FormFieldValidation';

export class FormField {
    id: string;
    name: string;
    label: string;
    // datatype
    // value
    // fieldType
    validations: FormFieldValidation[];
}
