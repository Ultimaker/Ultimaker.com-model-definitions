import { OrganismInterface } from '../../organisms/OrganismInterface';
import { CtaBlock } from '../../molecules/cta/CtaBlock';
import { ProductColor } from '../../molecules/products/ProductColor';

export class Colors implements OrganismInterface {
    title: string;
    subtitle?: string;
    colorList: ProductColor[];
    colorCtas: CtaBlock;
    ctas?: CtaBlock;
}
