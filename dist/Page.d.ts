import { OrganismInterface } from './organisms/OrganismInterface';
import { Meta } from './Meta';
import { SubNavigation } from './organisms/sub-navigation/SubNavigation';
export declare class Page {
    meta: Meta;
    subNavigation?: SubNavigation;
    organisms: OrganismInterface[];
}
