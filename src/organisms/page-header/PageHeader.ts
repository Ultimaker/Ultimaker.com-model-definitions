import { LinkList } from '../../molecules/link-list/LinkList';
import { ContentLink } from '../../atoms/cta/ContentLink';
import { Search } from '../../molecules/search/Search';

export class PageHeader {
    navigation: LinkList[];
    cta: ContentLink;
    search: Search;
}
