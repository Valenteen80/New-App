import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { NewsapiArticles } from 'src/app/interfaces/newsapi-articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private apiUrl: string = `${environment.newsapiUrl}?${environment.newsapiKey}`;

  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.http
      .get<NewsapiArticles>(
        `${this.apiUrl}&q=beekeeping&sortBy=publishedAt&pageSize=5`
      )
      .pipe(
        map((response: NewsapiArticles) => {
          return response.articles;
        })
      );
  }

  public poseArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  public putArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.apiUrl, article);
  }

  public deleteArticle(article: Article): Observable<void> {
    return this.http.delete<void>(this.apiUrl, article);
  }
}
