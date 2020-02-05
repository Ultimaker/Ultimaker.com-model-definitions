import { Option } from './Option';

export class Select {
    disabled?: boolean;
    id?: string;
    name: string;
    options: Option[];
    required?: boolean;
}
