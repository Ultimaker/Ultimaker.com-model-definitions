import { NavigationItem } from './NavigationItem';

export class NavigationCategory{
    label: string;
    items?: NavigationItem[];
    bottomItem?: NavigationItem;
}
