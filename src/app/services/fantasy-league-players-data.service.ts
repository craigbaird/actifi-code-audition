import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from "../assets/player-data.json";

@Injectable({
  providedIn: 'root'
})
export class FantasyLeaguePlayersDataService {

  allPlayerData: any = (data as any).default;

  constructor(private httpClient: HttpClient) { }

  getInitialFantasyLeaguePlayersData() {
     this.addIdToPlayers();
     return this.allPlayerData;
  }

  addIdToPlayers() {
    var counter = 1;
    this.allPlayerData.forEach(function(player, index) {
      player.id = counter;
      counter ++;
    })
  }

  getAllFantasyLeaguePlayers() {
    return this.allPlayerData;
  }
  
  setAllFantasyLeaguePlayers(updatedPlayerData) {
    this.allPlayerData = updatedPlayerData;
  }
}
