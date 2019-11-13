import { ComboBoxField } from '../../molecules/fields/ComboBoxField';
import { SelectBoxField } from '../../molecules/fields/SelectBoxField';
import { NavigationItem } from '../../molecules/navigation/NavigationItem';
import { NavigationCategory } from '../../molecules/navigation/NavigationCategory';
export declare class PageFooter {
    copyrightLabel: string;
    navigation: NavigationCategory[];
    countrySelector: ComboBoxField;
    localeSelector: SelectBoxField;
    legalNavigation: NavigationItem[];
    language?: string;
}
