import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';
import { LegalNavigation } from '../../molecules/legal-navigation/LegalNavigation';
import { FooterNavigationCategory } from '../../molecules/navigation-item/FooterNavigationCategory';

export class PageFooter {
    navigation: FooterNavigationCategory[];
    localeSelector: CountryAutoCompleteField;
    legalNavigation: LegalNavigation;
}
