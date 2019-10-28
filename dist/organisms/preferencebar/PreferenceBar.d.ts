import { OrganismInterface } from '../OrganismInterface';
import { CountrySelectBoxField } from '../../molecules/fields/CountrySelectBoxField';
import { LocaleSelectBoxField } from '../../molecules/fields/LocaleSelectBoxField';
export declare class PreferenceBar implements OrganismInterface {
    title: string;
    intro: string;
    yourCountryLabel: string;
    countrySelect: CountrySelectBoxField;
    localeSelect: LocaleSelectBoxField;
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
