import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ARTICLES } from '../article-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild('btnShow', { static: false }) btnShowRef: ElementRef;

  public articles = ARTICLES;
  public isVisible = true;
  private viewCounterArticle: number = 0;
  public showArticle(event) {
    if (event.target.className !== 'article__btn') {
      return;
    } else if (event.target.className === 'article__btn') {
      this.isVisible = !this.isVisible;
      if (!this.isVisible) {
        event.target.nextElementSibling.style.display = 'block';
        event.target.textContent = 'скрыть статью';
        event.target.nextElementSibling.nextElementSibling.className =
          'article__picture--active';
        this.viewCounterArticle++;
      } else {
        event.target.nextElementSibling.style.display = 'none';
        event.target.textContent = 'читать статью полностью';
        event.target.nextElementSibling.nextElementSibling.className =
          'article__picture';
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
