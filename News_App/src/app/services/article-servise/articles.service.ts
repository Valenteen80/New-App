import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private apiUrl: string = `${environment.newsapiUrl}&${environment.newsapiKey} `;

  constructor(private http: HttpClient) {}

  public getArtiles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  public postArticle() {
    // this.http
    //   .post<Article[]>(this.apiUrl, this.article)
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
  }

  public putArticle() {
    // this.http
    //   .put<Article[]>(this.apiUrl, this.article)
    //   .subscribe((response) => {
    //     console.log(response);
    //   });
  }

  public deleteArticle() {
    this.http
      .delete(`${environment.newsapiUrl}3${environment.newsapiKey}`)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
