import { Visitor } from '@angular/compiler/src/i18n/i18n_ast';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Visitors } from './interfaces/visitors';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  public currentVisitorsAmount: Visitors = {} as Visitors;

  constructor(public localStorageServise: LocalStorageService) {}

  ngOnInit(): void {
    this.getVisitorsAmount();
  }

  ngAfterViewInit(): void {
    this.increaseVisitorsAmount();
  }

  ngAfterContentInit(): void {
    // this.increaseVisitorsAmount();
  }

  private compareDiferencTime() {
    const currentDay: number = new Date().getDate();
    const currentVisitorDay: number = new Date(
      this.currentVisitorsAmount?.date
    ).getDate();

    return currentDay === currentVisitorDay;
  }

  private increaseVisitorsAmount() {
    const isDifferensTime: Boolean = !this.compareDiferencTime();

    if (isDifferensTime) {
      this.localStorageServise.clearLocalStorage();
    } else {
      this.currentVisitorsAmount.amount += 1;
    }
    this.updateVisitorsAmount();
  }

  updateVisitorsAmount() {
    this.localStorageServise.setLocalStorage(
      'amountVisitorsCounter',
      this.currentVisitorsAmount?.amount || 1
    );
  }

  getVisitorsAmount() {
    this.currentVisitorsAmount = this.localStorageServise.getLocalStorage(
      'amountVisitorsCounter'
    ) || { amount: 0, date: new Date() };
  }
}
