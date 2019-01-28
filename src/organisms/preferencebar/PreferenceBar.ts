import { OrganismInterface } from '../OrganismInterface';
import { CountryAutoCompleteField } from '../../molecules/fields/CountryAutoCompleteField';

export class PreferenceBar implements OrganismInterface {
    readonly title: string;
    readonly intro: string;
    readonly yourCountryLabel: string;
    readonly countrySelect: CountryAutoCompleteField;
    readonly yourPrivacySettingsLabel: string;
    readonly fullExperienceLabel: string;
    readonly customExperienceLabel: string;
    readonly functionalCookieLabel: string;
    readonly functionalCookieDescription: string;
    readonly analyticsCookieLabel: string;
    readonly analyticsCookieDescription: string;
    readonly personalCookieLabel: string;
    readonly personalCookieDescription: string;
    readonly trackingCookieLabel: string;
    readonly trackingCookieDescription: string;
    readonly saveLabel: string;
    readonly closeLabel: string;
}
