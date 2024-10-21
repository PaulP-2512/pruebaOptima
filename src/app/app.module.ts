import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListGifsComponent } from './list-gifs/list-gifs.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ListGifsComponent,
    HistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
