import { ModalWizard } from './ModalWizard';
import { AnalyticalEvent } from '../../events/AnalyticalEvent';

export class ModalButton {
    clickEvent?: AnalyticalEvent;
    icon?: string;
    label: string;
    modal: ModalWizard;
}
