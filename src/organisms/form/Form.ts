import { OrganismInterface } from '../OrganismInterface';
import { FormField } from './FormField';

export class Form implements OrganismInterface {
    id: string;
    fields: FormField[];
}
