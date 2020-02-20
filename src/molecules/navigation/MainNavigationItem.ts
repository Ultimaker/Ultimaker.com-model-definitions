import { Flyout } from '../../organisms/flyout/Flyout';
import { NavigationItem } from './NavigationItem';
import { SubNavigation } from '../../organisms/sub-navigation/SubNavigation';
import { MainNavigationCategories } from './MainNavigationCategories';

export class MainNavigationItem extends NavigationItem {
    subNavigation?: Flyout | MainNavigationCategories | SubNavigation;
}
