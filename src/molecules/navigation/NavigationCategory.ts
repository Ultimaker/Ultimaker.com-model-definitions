import { NavigationItem } from './NavigationItem';

export abstract class NavigationCategory{
    label: string;
    items?: NavigationItem[];
}
