import { CountrySelectBoxField } from '../../molecules/fields/CountrySelectBoxField';
import { LocaleSelectBoxField } from '../../molecules/fields/LocaleSelectBoxField';
import { NavigationItem } from '../../molecules/navigation/NavigationItem';
import { NavigationCategory } from '../../molecules/navigation/NavigationCategory';
export declare class PageFooter {
    copyrightLabel: string;
    navigation: NavigationCategory[];
    countrySelector: CountrySelectBoxField;
    localeSelector: LocaleSelectBoxField;
    legalNavigation: NavigationItem[];
    language?: string;
}
