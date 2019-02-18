import { LinkList } from '../../molecules/link-list/LinkList';
import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';

export class PageFooter {
    navigation: LinkList[];
    localeSelector: CountryAutoCompleteField;
    legalNavigation: LinkList;
}
