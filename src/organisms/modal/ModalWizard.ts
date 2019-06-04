import { OrganismInterface } from '../OrganismInterface';
import { WizardStepInterface } from './WizardStepInterface';

export class ModalWizard implements OrganismInterface {
    title: string;
    steps: WizardStepInterface[];
}
