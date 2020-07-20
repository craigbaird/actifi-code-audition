import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyLeaguePlayersComponent } from './fantasy-league-players.component';

describe('FantasyLeaguePlayersComponent', () => {
  let component: FantasyLeaguePlayersComponent;
  let fixture: ComponentFixture<FantasyLeaguePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasyLeaguePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasyLeaguePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
