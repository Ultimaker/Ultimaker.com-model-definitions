import { ContentLink } from '../../atoms/cta/ContentLink';
import { MainNavigationItem } from '../../molecules/navigation/MainNavigationItem';
import { AppLink } from '../../atoms/app-link/AppLink';

export class PageHeader {
    navigation: MainNavigationItem[];
    cta: ContentLink;
    language?: string;
    appLinks?: AppLink[];
}
