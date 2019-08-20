import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';
import { LocaleAutoCompleteField } from '../../molecules/fields/LocaleAutoCompleteField';
import { NavigationItem } from '../../molecules/navigation/NavigationItem';
import { NavigationCategory } from '../../molecules/navigation/NavigationCategory';

export class PageFooter {
    copyrightLabel: string;
    navigation: NavigationCategory[];
    countrySelector: CountryAutoCompleteField;
    localeSelector: LocaleAutoCompleteField;
    legalNavigation: NavigationItem[];
    language?: string;
}
