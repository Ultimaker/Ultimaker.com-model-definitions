import { OrganismInterface } from './organisms/OrganismInterface';
import { Meta } from './Meta';
import { SubNavigation } from './organisms/sub-navigation/SubNavigation';
import { NotificationInterface } from './molecules/notifications/NotificationInterface';

export class Page {
    notifications?: NotificationInterface[];
    meta: Meta;
    subNavigation?: SubNavigation;
    organisms: OrganismInterface[];
}
