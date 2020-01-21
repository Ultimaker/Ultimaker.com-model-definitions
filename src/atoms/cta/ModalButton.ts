import { AnalyticalEvent } from '../../events/AnalyticalEvent';
import { Modal } from '../../molecules/modal/Modal';

export class ModalButton {
    clickEvent?: AnalyticalEvent;
    label: string;
    modal: Modal;
}
