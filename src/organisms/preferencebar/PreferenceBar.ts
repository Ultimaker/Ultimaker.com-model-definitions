import { OrganismInterface } from '../OrganismInterface';
import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';
import { LocaleAutoCompleteField } from '../../molecules/fields/LocaleAutoCompleteField';

export class PreferenceBar implements OrganismInterface {
    title: string;
    intro: string;
    yourCountryLabel: string;
    countrySelect: CountryAutoCompleteField;
    localeSelect: LocaleAutoCompleteField;
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
