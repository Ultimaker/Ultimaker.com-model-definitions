import { OrganismInterface } from '../OrganismInterface';
import { Department } from './definitions/Department';
export declare class JobBoard implements OrganismInterface {
    title: string;
    departments: Department[];
}
