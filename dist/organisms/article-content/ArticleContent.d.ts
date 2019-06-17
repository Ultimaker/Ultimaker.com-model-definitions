import { OrganismInterface } from '../OrganismInterface';
import { ArticleIntro } from '../../molecules/article/ArticleIntro';
import { ArticleText } from '../../molecules/article/ArticleText';
export declare class ArticleContent implements OrganismInterface {
    molecules: [ArticleIntro | ArticleText];
}
