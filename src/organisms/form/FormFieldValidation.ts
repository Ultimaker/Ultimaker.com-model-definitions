export class FormFieldValidation {
    name: 'IsEmailAddress' | 'NotEmpty' | 'Length' | 'IsRequired';
    regex: RegExp;
    errorMessage: string;
}
