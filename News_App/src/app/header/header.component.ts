import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title = '“News App”';
  private date: Date = new Date();
  public dateRu: string = this.date.toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}
