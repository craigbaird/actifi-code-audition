import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FantasyLeaguePlayersComponent } from './components/fantasy-league-players/fantasy-league-players.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FantasyLeaguePlayersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [SweetAlert2Module.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
