import { Flyout } from '../../organisms/flyout/Flyout';
import { NavigationItem } from './NavigationItem';
import { MainNavigationCategories } from './MainNavigationCategories';
export declare class MainNavigationItem extends NavigationItem {
    subNavigation?: Flyout | MainNavigationCategories;
}
