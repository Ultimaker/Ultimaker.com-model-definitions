import { NavigationItem } from './NavigationItem';
import { SubNavigation } from '../../organisms/sub-navigation/SubNavigation';
import { MainNavigationCategories } from './MainNavigationCategories';

export class MainNavigationItem extends NavigationItem {
    subNavigation?: MainNavigationCategories | SubNavigation;
}
