export abstract class AutoCompleteField {
    label: string;
    placeholder: string;
    highlightedLabel: string;
    suggestionsLabel: string;
    datasource: Map<string, string>;
}
