import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../article-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public articles = ARTICLES;

  constructor() {}

  ngOnInit(): void {}
}
