import { NavigationItem } from '../../molecules/navigation-item/NavigationItem';
import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';
import { LegalNavigation } from '../../molecules/legal-navigation/LegalNavigation';

export class PageFooter {
    navigation: NavigationItem[];
    localeSelector: CountryAutoCompleteField;
    legalNavigation: LegalNavigation;
}
