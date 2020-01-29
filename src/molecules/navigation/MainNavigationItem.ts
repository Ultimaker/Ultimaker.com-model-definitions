import { NavigationItem } from './NavigationItem';
import { MainNavigationCategory } from './MainNavigationCategory';
import { SubNavigation } from '../../organisms/sub-navigation/SubNavigation';
import { MainNavigationCategories } from './MainNavigationCategories';

export class MainNavigationItem extends NavigationItem {
    categories?: MainNavigationCategory[];
    subNavigation?: MainNavigationCategories | SubNavigation;
}
