import { TestBed } from '@angular/core/testing';

import { FantasyLeaguePlayersDataService } from './fantasy-league-players-data.service';

describe('FantasyLeaguePlayersDataService', () => {
  let service: FantasyLeaguePlayersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasyLeaguePlayersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
