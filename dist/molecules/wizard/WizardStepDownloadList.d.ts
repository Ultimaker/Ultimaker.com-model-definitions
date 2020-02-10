import { SubmitButton } from '../../atoms/button/SubmitButton';
import { CardDownload } from '../cards/CardDownload';
import { Component } from '../../Component';
export declare class WizardStepDownloadList implements Component {
    title: string;
    subtitle?: string;
    description?: string;
    items: CardDownload[];
    submitButton: SubmitButton;
}
