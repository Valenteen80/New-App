import { ButtonText } from '../enum';

export interface Article {
  headline?: string;
  body?: string;
  img?: string;
  isLike?: boolean;
  viewCounterArticle: number;
  isVisible: boolean;
  buttonText: ButtonText;
  id: number;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: object;
  title: string;
  url: string;
  urlToImage: string;
}
