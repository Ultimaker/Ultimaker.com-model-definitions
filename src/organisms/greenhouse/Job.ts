import { OrganismInterface } from '../OrganismInterface';

export class Job implements OrganismInterface {
    id: number;
    title: string;
    location: string;
    htmlContent?: string;
    detailPageUrl?: string;
}
