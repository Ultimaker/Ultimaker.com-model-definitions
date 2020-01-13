import { OrganismInterface } from '../OrganismInterface';
export declare class Job implements OrganismInterface {
    id: number;
    title: string;
    location: string;
    htmlContent?: string;
    detailPageUrl?: string;
}
