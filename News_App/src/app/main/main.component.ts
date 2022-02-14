import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ButtonText } from '../enum';
import { Visitors } from '../interfaces/visitors';
import { ArticlesService } from '../services/article-servise/articles.service';
import { AuthService } from '@auth0/auth0-angular';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input() visitorsAmount: Visitors;

  public valueAttributeImgAlt: string = 'photo';
  public search: string = '';
  public newArticles: Article[] = [];
  public profile: Profile = {};

  constructor(
    public articlesService: ArticlesService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getNewArtiles();
  }

  public toggleArticle(newArticle: Article): void {
    newArticle.isVisible = !newArticle.isVisible;
    newArticle.buttonText = newArticle.isVisible
      ? ButtonText.BUTTON_HIDE
      : ButtonText.BUTTON_SHOW;

    if (newArticle.isVisible) {
      newArticle.viewCounterArticle++;
    }
  }

  public toggleLikeButton(newArticle: Article): void {
    newArticle.isLike = !newArticle.isLike;
  }

  public searchEvent(search): void {
    this.search = search;
  }

  public authEvent(event): void {
    this.profile = event;
  }

  private getNewArtiles(): void {
    this.articlesService.getArticles().subscribe((respons) => {
      this.newArticles = respons;
      this.newArticles.forEach((element: Article) => {
        element.isVisible = false;
        element.viewCounterArticle = 0;
        element.buttonText = ButtonText.BUTTON_SHOW;
      });
    });
  }
}
