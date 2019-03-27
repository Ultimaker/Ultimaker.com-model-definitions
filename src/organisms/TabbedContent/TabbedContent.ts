import { OrganismInterface } from '../OrganismInterface';
import { Tab } from '../../molecules/tab/Tab';

export class TabbedContent implements OrganismInterface {
    title: string;
    subtitle?: string;
    tabs: Tab[];
    ctas?: CtaBlock;
}
