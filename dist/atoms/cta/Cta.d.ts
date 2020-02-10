import { AnalyticalEvent } from '../../events/AnalyticalEvent';
import { Component } from '../../Component';
export declare abstract class Cta implements Component {
    clickEvent?: AnalyticalEvent;
    icon?: string;
    label: string;
}
