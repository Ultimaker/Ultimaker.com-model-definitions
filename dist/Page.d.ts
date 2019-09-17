import { OrganismInterface } from './organisms/OrganismInterface';
import { Meta } from './Meta';
import { SubNavigation } from './organisms/sub-navigation/SubNavigation';
import { Notification } from './molecules/notification/Notification';
export declare class Page {
    meta: Meta;
    organisms: OrganismInterface[];
    language?: string;
    notifications?: Notification[];
    subNavigation?: SubNavigation;
}
