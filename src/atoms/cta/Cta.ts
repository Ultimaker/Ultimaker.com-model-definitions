import { AnalyticalEvent } from '../../events/AnalyticalEvent';
import { Component } from '../../Component';

export abstract class Cta implements Component {
    clickEvent?: AnalyticalEvent;
    icon?: string;
    label: string;
}
