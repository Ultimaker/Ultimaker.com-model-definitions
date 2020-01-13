import { OrganismInterface } from '../OrganismInterface';
import { Department } from './definitions/Department';

export class JobBoard implements OrganismInterface {
    title: string;
    departments: Department[];
}
