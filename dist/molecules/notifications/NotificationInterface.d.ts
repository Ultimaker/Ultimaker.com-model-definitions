import { NotificationControls } from './NotificationControls';
export interface NotificationInterface {
    title: string;
    body: string;
    controls?: NotificationControls;
}
