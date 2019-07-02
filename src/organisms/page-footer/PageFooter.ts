import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';
import { NavigationItem } from '../../molecules/navigation/NavigationItem';
import { NavigationCategory } from '../../molecules/navigation/NavigationCategory';

export class PageFooter {
    copyrightLabel: string;
    navigation: NavigationCategory[];
    localeSelector: CountryAutoCompleteField;
    legalNavigation: NavigationItem[];
}
