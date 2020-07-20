import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FantasyLeaguePlayersComponent } from './components/fantasy-league-players/fantasy-league-players.component';


const routes: Routes = [
  { path: 'fantasyLeaguePlayers', component: FantasyLeaguePlayersComponent },
  { path: '**', component: FantasyLeaguePlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
