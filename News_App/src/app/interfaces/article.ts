import { ButtonText } from '../article-list';

export interface Article {
  headline?: string;
  body?: string;
  img?: string;
  viewCounterArticle: number;
  isLike: boolean;
  isVisible: boolean;
  buttonText: ButtonText;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  id: number;
}
