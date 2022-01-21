import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = '“News App”';
  date: Date = new Date();
  dateRu: string = this.date.toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  constructor() {}

  ngOnInit(): void {}
}
