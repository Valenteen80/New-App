import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../interfaces/article';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(newArticles: Article[], search: string = ''): Article[] {
    if (!search.trim()) {
      return newArticles;
    }

    return newArticles.filter((newArticle: Article) => {
      return (
        newArticle.title.includes(search) ||
        newArticle.description.includes(search) ||
        newArticle.content.includes(search)
      );
    });
  }
}
