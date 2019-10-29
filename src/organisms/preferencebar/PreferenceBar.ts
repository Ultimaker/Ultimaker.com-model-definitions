import { OrganismInterface } from '../OrganismInterface';
import { ComboBoxField } from '../../molecules/fields/ComboBoxField';
import { SelectBoxField } from '../../molecules/fields/SelectBoxField';

export class PreferenceBar implements OrganismInterface {
    title: string;
    intro: string;
    yourCountryLabel: string;
    countrySelect: ComboBoxField;
    localeSelect: SelectBoxField;
    yourPrivacySettingsLabel: string;
    fullExperienceLabel: string;
    customExperienceLabel: string;
    functionalCookieLabel: string;
    functionalCookieDescription: string;
    analyticsCookieLabel: string;
    analyticsCookieDescription: string;
    personalCookieLabel: string;
    personalCookieDescription: string;
    trackingCookieLabel: string;
    trackingCookieDescription: string;
    saveLabel: string;
    closeLabel: string;
    language?: string;
}
