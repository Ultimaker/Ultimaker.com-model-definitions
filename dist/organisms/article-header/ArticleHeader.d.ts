import { ArticleAuthor } from '../../molecules/article/ArticleAuthor';
import { Label } from '../../atoms/label/Label';
import { OrganismInterface } from '../OrganismInterface';
export declare class ArticleHeader implements OrganismInterface {
    author: ArticleAuthor;
    publishedDate: Date;
    labels?: Label[];
}
