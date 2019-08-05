import { ArticleAuthor } from '../../molecules/article/ArticleAuthor';
import { OrganismInterface } from '../OrganismInterface';
export declare class ArticleHeader implements OrganismInterface {
    author: ArticleAuthor;
    publishedDate: string;
    labels?: string[];
}
