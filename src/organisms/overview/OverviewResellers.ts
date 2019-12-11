import { ComboBoxField } from '../../molecules/fields/ComboBoxField';
import { Overview } from './Overview';
import { ResellerMap } from '../../molecules/map/ResellerMap';

export class OverviewResellers extends Overview {
    countrySelector: ComboBoxField;
    resellerMap?: ResellerMap;
    noResultsMessage?: string;
}
