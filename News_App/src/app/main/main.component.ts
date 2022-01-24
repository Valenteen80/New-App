import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Article } from '../article';
import { ARTICLES, ButtonText } from '../article-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild('btnShow', { static: false }) btnShowRef: ElementRef;

  public articles = ARTICLES;

  public toggleArticle(article: Article) {
    article.isVisible = !article.isVisible;
    article.buttonText = article.isVisible
      ? ButtonText.BUTTON_HIDE
      : ButtonText.BUTTON_SHOW;
    if (article.isVisible) {
      article.viewCounterArticle++;
    }
  }

  /**
   * name
   */
  public likeCounter(article: Article) {
    article.likeCount++;
  }

  constructor() {}

  ngOnInit(): void {}
}
