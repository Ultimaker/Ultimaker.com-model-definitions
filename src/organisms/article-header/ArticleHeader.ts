import { OrganismInterface } from '../OrganismInterface';

import { ArticleAuthor } from '../../molecules/article/ArticleAuthor';

export class ArticleHeader implements OrganismInterface {
    author: ArticleAuthor;
    publishedDate: Date;
    labels?: string[];
}
