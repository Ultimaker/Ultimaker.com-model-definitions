import { WizardStepInterface } from '../../organisms/modal/WizardStepInterface';
import { SubmitButton } from '../../atoms/cta/SubmitButton';
import { CardDownload } from '../cards/CardDownload';
export declare class WizardStepDownloadList implements WizardStepInterface {
    title: string;
    subtitle?: string;
    items: CardDownload[];
    cta: SubmitButton;
}
