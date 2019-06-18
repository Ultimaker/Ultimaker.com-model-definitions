import { OrganismInterface } from '../OrganismInterface';
import { ArticleIntro } from '../../molecules/article/ArticleIntro';
import { ArticleText } from '../../molecules/article/ArticleText';
import { ArticleImage } from '../../molecules/article/ArticleImage';
import { ArticleCtas } from '../../molecules/article/ArticleCtas';

export class ArticleContent implements OrganismInterface {
    molecules: [ArticleIntro|ArticleText|ArticleImage|ArticleCtas];
}
