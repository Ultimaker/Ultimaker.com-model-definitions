import { NotificationInterface } from './NotificationInterface';
import { NotificationControls } from './NotificationControls';
export declare abstract class AbstractNotification implements NotificationInterface {
    body: string;
    title: string;
    controls?: NotificationControls;
}
