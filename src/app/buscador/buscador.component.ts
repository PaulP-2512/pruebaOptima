import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  constructor(private dataService: DataService, private historyService: HistoryService) {}

  

  ngOnInit(): void {
      
  }

  search(gifName: string) {
    
    if (gifName !== '') {
      this.dataService.searchGifs(gifName);
    }
  
  }

  addHistory(value: string) {
    this.historyService.addToHistory(value);
  }

}
