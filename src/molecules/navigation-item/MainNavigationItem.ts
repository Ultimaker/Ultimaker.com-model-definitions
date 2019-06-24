import { NavigationCategory } from './NavigationCategory';
import { NavigationItem } from './NavigationItem';

export class MainNavigationItem extends NavigationItem{
    childCategories?: NavigationCategory[];
}
