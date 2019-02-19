import { NavigationItem } from '../../molecules/navigation-item/NavigationItem';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { Search } from '../../molecules/search/Search';

export class PageHeader {
    navigation: NavigationItem[];
    cta: ContentLink;
    search: Search;
}
