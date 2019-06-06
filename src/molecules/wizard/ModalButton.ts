import { ModalWizard } from './ModalWizard';
import { AnalyticalEvent } from '../../events/AnalyticalEvent';

export class ModalButton {
    clickEvent?: AnalyticalEvent;
    label: string;
    modal: ModalWizard;
}
