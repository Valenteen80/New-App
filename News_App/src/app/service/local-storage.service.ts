import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public views: string = '';

  private counterLoad() {
    let date = new Date().toLocaleDateString();
    let viewsQuntity =
      JSON.parse(localStorage.getItem('localStorageName')) || {};
    if (viewsQuntity.hasOwnProperty(date)) {
      viewsQuntity[date]++;
    } else {
      viewsQuntity = {};
      // localStorage.clear();
      viewsQuntity[date] = 1;
    }
    localStorage.setItem('localStorageName', JSON.stringify(viewsQuntity));
    this.views = viewsQuntity[date];
  }
  constructor() {
    this.counterLoad();
  }
}
