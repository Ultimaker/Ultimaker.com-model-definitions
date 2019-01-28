export abstract class AutoCompleteField {
    readonly label: string;
    readonly placeholder: string;
    readonly highlightedLabel: string;
    readonly suggestionsLabel: string;
    readonly datasource: Map<string, string>;
}
