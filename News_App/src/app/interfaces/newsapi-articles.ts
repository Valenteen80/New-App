import { Article } from './article';

export interface NewsapiArticles {
  articles: Article[];
  status: string;
  totalResults: number;
}
