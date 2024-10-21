import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrls: ['./list-gifs.component.css'],
})
export class ListGifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription = this.dataService
      .getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
