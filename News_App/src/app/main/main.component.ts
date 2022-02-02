import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ButtonText } from '../article-list';
import { Visitors } from '../interfaces/visitors';
import { ArticlesService } from '../services/article-servise/articles.service';

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

  constructor(public articlesService: ArticlesService) {}

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

  public receptionEvent(search): void {
    this.search = search;
  }

  private getNewArtiles(): void {
    this.articlesService.getArtiles().subscribe((respons) => {
      this.newArticles = respons['articles'];
      this.newArticles.forEach(function (element) {
        element.isVisible = false;
        element.viewCounterArticle = 0;
        element.buttonText = ButtonText.BUTTON_SHOW;
      });
    });
  }
}
