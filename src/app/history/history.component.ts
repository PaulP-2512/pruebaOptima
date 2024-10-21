import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  listHistory: string[] = [];

  constructor(private dataService: DataService, private historyService: HistoryService) {}

  ngOnInit(): void {
    this.listHistory = this.historyService.getHistory();
  }

  search(gifName: string) {
    
    if (gifName !== '') {
      this.dataService.searchGifs(gifName);
    }
  
  }

}
