export abstract class AutoCompleteField {
    label: string;
    placeholder: string;
    highlightedLabel: string;
    suggestionsLabel: string;
    datasource: { [key:string]:string; };
}
