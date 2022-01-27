import { ButtonText } from './article-list';
export interface Article {
  title: string;
  headline: string;
  body: string;
  img: string;
  author: string;
  viewCounterArticle: number;
  isLike: boolean;
  isVisible: boolean;
  buttonText: ButtonText;
  id: number;
}
