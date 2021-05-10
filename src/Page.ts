import { OrganismInterface } from './organisms/OrganismInterface';
import { Meta } from './Meta';
import { AnalyticalEvent } from './events/AnalyticalEvent';
import { Notification } from './molecules/notification/Notification';

export class Page {
    meta: Meta;
    organisms: OrganismInterface[];
    language?: string;
    loadEvent?: AnalyticalEvent;
    notifications?: Notification[];
}
