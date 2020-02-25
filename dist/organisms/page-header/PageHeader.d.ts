import { ContentLink } from '../../atoms/cta/ContentLink';
import { Search } from '../../molecules/search/Search';
import { MainNavigationItem } from '../../molecules/navigation/MainNavigationItem';
import { AppLink } from '../../atoms/app-link/AppLink';
export declare class PageHeader {
    navigation: MainNavigationItem[];
    cta: ContentLink;
    search: Search;
    language?: string;
    appLinks?: AppLink[];
}
