import { Job } from '../Job';

export class Department {
    id: number;
    name: string;
    children: Department[];
    jobs: Job[];
}
