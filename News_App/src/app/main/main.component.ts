import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Article } from '../interfaces/article';
import { ARTICLES, ButtonText } from '../article-list';
import { Visitors } from '../interfaces/visitors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() visitorsAmount: Visitors;

  public valueAttributeImgAlt: string = 'photo';
  public articles = ARTICLES;
  public search: string = '';

  public toggleArticle(article: Article) {
    article.isVisible = !article.isVisible;
    article.buttonText = article.isVisible
      ? ButtonText.BUTTON_HIDE
      : ButtonText.BUTTON_SHOW;

    if (article.isVisible) {
      article.viewCounterArticle++;
    }
  }

  public toggleLikeButton(article: Article) {
    article.isLike = !article.isLike;
  }

  public receptionEvent(search) {
    this.search = search;
  }
}
