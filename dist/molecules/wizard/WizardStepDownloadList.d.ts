import { WizardStepInterface } from './WizardStepInterface';
import { SubmitButton } from '../../atoms/button/SubmitButton';
import { CardDownload } from '../cards/CardDownload';
export declare class WizardStepDownloadList implements WizardStepInterface {
    title: string;
    subtitle?: string;
    items: CardDownload[];
    submitButton: SubmitButton;
}
