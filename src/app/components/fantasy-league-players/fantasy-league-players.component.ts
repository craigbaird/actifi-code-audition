import { Component, OnInit } from '@angular/core';
import { FantasyLeaguePlayersDataService } from '../../services/fantasy-league-players-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fantasy-league-players',
  templateUrl: './fantasy-league-players.component.html',
  styleUrls: ['./fantasy-league-players.component.scss']
})
export class FantasyLeaguePlayersComponent implements OnInit {
  
  allPlayers: any;
  itemsPerPage: number = 10;
  numberOfPages: number
  numberOfItems: number;
  pageNumberList: Array<number>;
  currentPage: number = 1;

  constructor(private fantasyLeaguePlayersDataService: FantasyLeaguePlayersDataService) { }

  ngOnInit(): void {
    this.allPlayers = this.fantasyLeaguePlayersDataService.getInitialFantasyLeaguePlayersData();
    this.setAllValues();
  }

  setAllValues() {
    this.numberOfItems = this.allPlayers.length;
    this.setNumberOfPages();
    this.assignPlayersPageNumbers();
    this.createPageNumbersList();
    console.log(this.allPlayers, this.itemsPerPage, this.numberOfPages, this.numberOfItems, this.pageNumberList, this.currentPage);
  }

  addPlayerModal() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4']
    }).queue([
      {
        title: 'Name',
      },
      {
        title: 'Team',
      },
      {
        title: 'Position',
      },
      {
        title: 'Jersey Number',
      },
    ]).then((result: any) => {
      if (result.value) {
        this.formatPlayerToAdd(result.value);
        Swal.fire({
          title: 'Added!',
          confirmButtonText: 'Ok'
        })
      }
      this.fantasyLeaguePlayersDataService.setAllFantasyLeaguePlayers(this.allPlayers);
      this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
      this.setAllValues();
    })
  }

  formatPlayerToAdd(playerToAdd) {
    let newPlayer = {
      name: playerToAdd[0],
      team: playerToAdd[1],
      position: playerToAdd[2],
      jersey_number: playerToAdd[3], 
      id: this.allPlayers[0].id - 1
    }
    this.addPlayer(newPlayer);
  }

  addPlayer(newPlayer) {
    let allPlayers = this.allPlayers;
    allPlayers.unshift(newPlayer);
    // set and get values in service for persistance, and to make them accessible to other components
    this.fantasyLeaguePlayersDataService.setAllFantasyLeaguePlayers(allPlayers);
    this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
    this.createPageNumbersList()
  }

  editPlayerModal(player) {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4']
    }).queue([
      {
        title: 'Edit Name',
        inputValue: player.name
      },
      {
        title: 'Edit Team',
        inputValue: player.team
      },
      {
        title: 'Edit Position',
        inputValue: player.position
      },
      {
        title: 'Edit Jersey Number',
        inputValue: player.jersey_number
      },
    ]).then((result: any) => {
      if (result.value) {
        this.formatPlayerToEdit(player.id, result.value);
        Swal.fire({
          title: 'Updated!',
          confirmButtonText: 'Ok'
        })
      }
      this.fantasyLeaguePlayersDataService.setAllFantasyLeaguePlayers(this.allPlayers);
      this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
      this.setAllValues();
    })
  }

  formatPlayerToEdit(id, playerToEdit) {
    let editedPlayer = {
      name: playerToEdit[0],
      team: playerToEdit[1],
      position: playerToEdit[2],
      jersey_number: playerToEdit[3]
    }
    this.editPlayer(id, editedPlayer);
  }

  editPlayer(id, editedPlayer) {
    let allPlayers = this.allPlayers;
    allPlayers.forEach(function(player, index) {
      if (player.id === id) {
        player.name = editedPlayer.name;
        player.team = editedPlayer.team;
        player.position = editedPlayer.position;
        player.jersey_number = editedPlayer.jersey_number;
      }
    })
    this.fantasyLeaguePlayersDataService.setAllFantasyLeaguePlayers(this.allPlayers);
    this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
    this.setAllValues();
  }

  deletePlayerModal(player) {
    Swal.fire({
      title: 'Deleting ' + player.name + '?',
      text: "This can't be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result: any) => {
      if (result.value) {
        this.deletePlayer(player.id);
      }
      this.fantasyLeaguePlayersDataService.setAllFantasyLeaguePlayers(this.allPlayers);
      this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
      this.setAllValues();
    })
  }

  deletePlayer(id) {
    let allPlayers = this.allPlayers;
    allPlayers.forEach(function(player, index) {
      if (player.id === id) {
        allPlayers.splice(index, 1);
      }
    })
    // set and get values in service for persistance, and to make them accessible to other components
    this.fantasyLeaguePlayersDataService.setAllFantasyLeaguePlayers(allPlayers);
    this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
  }

  setItemsPerPage(itemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.allPlayers = this.fantasyLeaguePlayersDataService.getAllFantasyLeaguePlayers();
    this.setAllValues();
  }

  setNumberOfPages() {
    this.numberOfPages = Math.ceil(this.numberOfItems / this.itemsPerPage);
  }

  createPageNumbersList() {
    let pageNumberList = [];
    let i = 0;
    while (i <= this.numberOfPages) {
      i++;
      pageNumberList.push({pageNumber: i});
    }
    this.pageNumberList = pageNumberList;
  }

  assignPlayersPageNumbers() {
    let counter = 0;
    let pageCounter = 1;
    let itemsPerPage = this.itemsPerPage;
    this.allPlayers.forEach(function(player, index) {
      player.pageNumber = pageCounter;
      counter ++;
      if (counter === itemsPerPage) {
        counter = 0;
        pageCounter ++;
      }
    })
  }

  changePage(pageNumber) {
    console.log('page number', pageNumber);
  }

  updateNumberOfItems() {
    this.numberOfItems = this.allPlayers.length;
  }

  resultsAreOnCurrentPage(player) {
    if (player.pageNumber === this.currentPage) {
      return true;
    }  
    return false;
  }

  previousButtonClicked() {
    if (this.currentPage > 0) {
      this.currentPage --;
    } 
    if (this.currentPage === 0) {
      this.currentPage = this.numberOfPages;
    }
  }

  nextButtonClicked() {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage ++;
    } else {
      this.currentPage = 1;
    }
  }

}
