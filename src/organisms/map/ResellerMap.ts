import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { OrganismInterface } from '../OrganismInterface';
import { Marker } from './Marker';

export class ResellerMap implements OrganismInterface {
    title: string;
    subtitle?: string;
    currentCountryName: string;
    markers: Marker[];
    ctas?: CtaBlock;
}
