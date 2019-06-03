import { OrganismInterface } from '../OrganismInterface';
import { WizardStepInterface } from './WizardStepInterface';
export declare class ModalWizard implements OrganismInterface {
    title: string;
    steps: WizardStepInterface[];
}
