import { OrganismInterface } from '../OrganismInterface';
import { AutoCompleteField } from '../../molecules/fields/AutoCompleteField';

export abstract class PreferenceBar implements OrganismInterface {
    readonly title: string;
    readonly localeIntro: string;
    readonly yourCountryLabel: string;
    readonly countrySelect: AutoCompleteField;
    readonly yourPrivacySettingsLabel: string;
    readonly fullExperienceLabel: string;
    readonly customExperienceLabel: string;
    readonly functionalCookieLabel: string;
    readonly functionalCookieDesc: string;
    readonly analyticsCookieLabel: string;
    readonly analyticsCookieDesc: string;
    readonly personalCookieLabel: string;
    readonly personalCookieDesc: string;
    readonly trackingCookieLabel: string;
    readonly trackingCookieDesc: string;
    readonly saveButton: string;
    readonly closeButton: string;
}
