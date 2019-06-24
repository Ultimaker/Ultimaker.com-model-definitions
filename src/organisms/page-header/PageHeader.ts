import { ContentLink } from '../../atoms/cta/ContentLink';
import { Search } from '../../molecules/search/Search';
import { MainNavigationItem } from '../../molecules/navigation-item/MainNavigationItem';

export class PageHeader {
    navigation: MainNavigationItem[];
    cta: ContentLink;
    search: Search;
}
