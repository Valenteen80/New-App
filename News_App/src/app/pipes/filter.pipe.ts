import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../article';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(articles: Article[], search: string = ''): Article[] {
    if (!search.trim()) {
      return articles;
    }
    return articles.filter((article: Article) => {
      return (
        article.title.includes(search) ||
        article.headline.includes(search) ||
        article.body.includes(search)
      );
    });
  }
}
