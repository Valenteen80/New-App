import { Injectable } from '@angular/core';
import { Visitors } from '../../interfaces/visitors';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getLocalStorage(name: string): Visitors {
    return JSON.parse(localStorage.getItem(name));
  }

  public setLocalStorage(name: string, value: number): void {
    const visitors: Visitors = {
      date: new Date(),
      amount: value,
    };
    localStorage.setItem(name, JSON.stringify(visitors));
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}
