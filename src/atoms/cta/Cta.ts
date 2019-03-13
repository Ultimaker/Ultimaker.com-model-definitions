import { AnalyticalEvent } from '../../events/AnalyticalEvent';

export abstract class Cta {
    label: string;
    url: string;
    clickEvent?: AnalyticalEvent;
}
