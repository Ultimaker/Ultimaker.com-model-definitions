import { ArticleAuthor } from '../../molecules/article/ArticleAuthor';
import { Label } from '../../atoms/label/Label';
import { OrganismInterface } from '../OrganismInterface';

export class ArticleHeader implements OrganismInterface {
    author: ArticleAuthor;
    publishedDate: string; // Date formatted as YYYY-MM-DD
    labels?: Label[];
}
