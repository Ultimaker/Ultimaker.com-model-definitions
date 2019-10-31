import { OrganismInterface } from '../OrganismInterface';
import { ComboBoxField } from '../../molecules/fields/ComboBoxField';
export declare class PreferenceBar implements OrganismInterface {
    title: string;
    intro: string;
    yourCountryLabel: string;
    countrySelect: ComboBoxField;
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
