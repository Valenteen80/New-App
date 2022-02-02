import { Component, OnInit } from '@angular/core';
import { Visitors } from './interfaces/visitors';
import { LocalStorageService } from './services/local-storage-servise/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentVisitorsAmount: Visitors = {} as Visitors;

  constructor(public localStorageServise: LocalStorageService) {}

  ngOnInit(): void {
    this.getVisitorsAmount();
    this.increaseVisitorsAmount();
  }

  private compareDiferencTime(): Boolean {
    const currentDay: number = new Date().getDate();
    const currentVisitorDay: number = new Date(
      this.currentVisitorsAmount?.date
    ).getDate();

    return currentDay === currentVisitorDay;
  }

  private increaseVisitorsAmount(): void {
    const isDifferensTime: Boolean = !this.compareDiferencTime();

    if (isDifferensTime) {
      this.localStorageServise.clearLocalStorage();
      this.currentVisitorsAmount.amount = 1;
    } else {
      this.currentVisitorsAmount.amount += 1;
    }

    this.updateVisitorsAmount();
  }

  private updateVisitorsAmount(): void {
    this.localStorageServise.setLocalStorage(
      'amountVisitorsCounter',
      this.currentVisitorsAmount?.amount || 1
    );
  }

  private getVisitorsAmount(): void {
    this.currentVisitorsAmount = this.localStorageServise.getLocalStorage(
      'amountVisitorsCounter'
    ) || { amount: 0, date: new Date() };
  }
}
