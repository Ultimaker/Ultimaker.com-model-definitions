import { Fieldset } from './Fieldset';
import { Heading } from '../../atoms/heading/Heading';
import { InputHidden } from './InputHidden';
import { OrganismInterface } from '../OrganismInterface';
import { Paragraph } from '../../atoms/paragraph/Paragraph';

export class Form implements OrganismInterface {
    action: string;
    fieldsets?: Fieldset[];
    hiddenFields?: InputHidden[];
    id?: string;
    method: string;
}
