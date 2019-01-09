import { Card, CardModifier } from '../../model/molecules/cards';

import { image } from '../atoms/image.data';
import { cta } from './cta.data'; 
import { list } from './lists.data';

export const card: Card = {
    title: 'Hoi hoi',
    paragraph: 'Paragraph',
    icon: 'icon',
    image,
    cta,
    list,
    modifier: CardModifier.BRAND
}