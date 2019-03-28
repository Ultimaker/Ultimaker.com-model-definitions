import { OrganismInterface } from '../OrganismInterface';
import { Tab } from '../../molecules/tab/Tab';
import { CtaBlock } from '../../molecules/cta/CtaBlock';

export class TabbedContent implements OrganismInterface {
    title: string;
    subtitle?: string;
    tabs: Tab[];
    ctas?: CtaBlock;
}
