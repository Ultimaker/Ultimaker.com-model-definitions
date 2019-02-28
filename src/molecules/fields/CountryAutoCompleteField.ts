import { AutoCompleteField } from './AutoCompleteField';
import { CountryDatasourceValue } from './data/CountryDatasourceValue';

export class CountryAutoCompleteField extends AutoCompleteField{
    datasource: Map<string, CountryDatasourceValue>;
}
