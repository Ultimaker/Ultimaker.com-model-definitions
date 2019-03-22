import { OrganismInterface } from './organisms/OrganismInterface';
import { Meta } from './Meta';
import { SubNavigation } from './organisms/sub-navigation/SubNavigation';

export class Page {
    meta: Meta;
    subNavigation?: SubNavigation;
    organisms: OrganismInterface[];
}
