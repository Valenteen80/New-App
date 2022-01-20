import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = '“News App”';
  date: Date = new Date(); // Получил объект даты
  dateRu: string = this.date.toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }); // сформатировал объект даты и  перевёл в строку

  constructor() {}

  ngOnInit(): void {}
}
