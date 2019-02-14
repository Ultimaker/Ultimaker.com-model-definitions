import { Link } from 'atoms/cta/Link';
import { ListHeading } from 'atoms/ListHeading/ListHeading';

export class LinkList {
    lists?: LinkList[];
    links?: Link[];
    listHeading: ListHeading;
    bottomLink?: Link;
}
