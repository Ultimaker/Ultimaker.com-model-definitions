import { AnalyticalEvent } from '../../events/AnalyticalEvent';

export abstract class Cta {
    clickEvent?: AnalyticalEvent;
    icon?: string;
    label: string;
}
