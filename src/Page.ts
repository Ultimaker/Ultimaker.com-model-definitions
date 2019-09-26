import { OrganismInterface } from './organisms/OrganismInterface';
import { Meta } from './Meta';
import { SubNavigation } from './organisms/sub-navigation/SubNavigation';
import { AnalyticalEvent } from './events/AnalyticalEvent';
import { Notification } from './molecules/notification/Notification';

export class Page {
    meta: Meta;
    organisms: OrganismInterface[];
    loadEvent: AnalyticalEvent;
    language?: string;
    notifications?: Notification[];
    subNavigation?: SubNavigation;
}
