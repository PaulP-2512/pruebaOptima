import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  private listHistory: string[] = [];

  addToHistory(item: string) {
    if (!this.listHistory.includes(item)) {
      this.listHistory.push(item);
    }
  }

  getHistory(): string[] {
    return this.listHistory;
  }
}
