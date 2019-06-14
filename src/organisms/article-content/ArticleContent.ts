import { OrganismInterface } from '../OrganismInterface';
import { ArticleIntro } from 'molecules/article/ArticleIntro';

export class ArticleContent implements OrganismInterface {
    molecules: [ArticleIntro];
}
