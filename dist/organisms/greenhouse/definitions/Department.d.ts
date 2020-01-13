import { Job } from '../Job';
export declare class Department {
    id: number;
    name: string;
    children: Department[];
    jobs: Job[];
}
