import { ComboBoxField } from '../../molecules/fields/ComboBoxField';
import { Overview } from './Overview';
import { ResellerMap } from './map/ResellerMap';

export class OverviewResellers extends Overview {
    countrySelector: ComboBoxField;
    resellerMap?: ResellerMap;
    noResultsMessage?: string;
}
