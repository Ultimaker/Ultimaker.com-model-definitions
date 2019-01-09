import { List, CardList, ListModifier } from '../../model/molecules/lists';

import { card } from './cards.data';
import { cta } from './cta.data';
import { iconLabel } from './icon-label.data'

export const list: List = {
	item: ['Item 1', 'Item 2'],
	modifier: ListModifier.DEFINITION
}

export const iconList: List = {
	item: [iconLabel, iconLabel], 
	modifier: ListModifier.ORDERED
}

export const cardList: CardList = {
	items: [card, card],
	cta
}