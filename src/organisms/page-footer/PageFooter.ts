import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';
import { LegalNavigationCategory } from '../../molecules/navigation-item/LegalNavigationCategory';
import { FooterNavigationCategory } from '../../molecules/navigation-item/FooterNavigationCategory';

export class PageFooter {
    navigation: FooterNavigationCategory[];
    localeSelector: CountryAutoCompleteField;
    legalNavigation: LegalNavigationCategory;
}
