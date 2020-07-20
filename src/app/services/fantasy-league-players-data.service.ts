import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FantasyLeaguePlayersDataService {

  allPlayerData: any;

  constructor(private httpClient: HttpClient) { }

  getInitialFantasyLeaguePlayersData() {
    this.allPlayerData = [
      {
        "team": "Patriots",
        "jersey_number": 12,
        "name": "Tom Brady",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 87,
        "name": "Rob Gronkowski",
        "position": "TE"
      },
      {
        "team": "Steelers",
        "jersey_number": 84,
        "name": "Antonio Brown",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 58,
        "name": "Von Miller",
        "position": "LOLB"
      },
      {
        "team": "Packers",
        "jersey_number": 12,
        "name": "Aaron Rodgers",
        "position": "QB"
      },
      {
        "team": "Panthers",
        "jersey_number": 59,
        "name": "Luke Kuechly",
        "position": "MLB"
      },
      {
        "team": "Rams",
        "jersey_number": 99,
        "name": "Aaron Donald",
        "position": "RE"
      },
      {
        "team": "Texans",
        "jersey_number": 99,
        "name": "J.J. Watt",
        "position": "LE"
      },
      {
        "team": "Raiders",
        "jersey_number": 52,
        "name": "Khalil Mack",
        "position": "LE"
      },
      {
        "team": "Falcons",
        "jersey_number": 11,
        "name": "Julio Jones",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 20,
        "name": "Jalen Ramsey",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 69,
        "name": "David Bakhtiari",
        "position": "LT"
      },
      {
        "team": "Vikings",
        "jersey_number": 22,
        "name": "Harrison Smith",
        "position": "FS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 54,
        "name": "Bobby Wagner",
        "position": "MLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 26,
        "name": "Le'Veon Bell",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 29,
        "name": "Eric Berry",
        "position": "SS"
      },
      {
        "team": "Cowboys",
        "jersey_number": 72,
        "name": "Travis Frederick",
        "position": "C"
      },
      {
        "team": "Cowboys",
        "jersey_number": 50,
        "name": "Sean Lee",
        "position": "ROLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 70,
        "name": "Zack Martin",
        "position": "RG"
      },
      {
        "team": "Steelers",
        "jersey_number": 66,
        "name": "David DeCastro",
        "position": "RG"
      },
      {
        "team": "Raiders",
        "jersey_number": 61,
        "name": "Rodney Hudson",
        "position": "C"
      },
      {
        "team": "Chiefs",
        "jersey_number": 87,
        "name": "Travis Kelce",
        "position": "TE"
      },
      {
        "team": "Giants",
        "jersey_number": 13,
        "name": "Odell Beckham Jr",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 98,
        "name": "Damon Harrison Sr",
        "position": "DT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 77,
        "name": "Tyron Smith",
        "position": "LT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 54,
        "name": "Lavonte David",
        "position": "ROLB"
      },
      {
        "team": "Saints",
        "jersey_number": 94,
        "name": "Cameron Jordan",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 29,
        "name": "Earl Thomas III",
        "position": "FS"
      },
      {
        "team": "Texans",
        "jersey_number": 10,
        "name": "DeAndre Hopkins",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 21,
        "name": "A.J. Bouye",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 27,
        "name": "Malcolm Jenkins",
        "position": "SS"
      },
      {
        "team": "Redskins",
        "jersey_number": 86,
        "name": "Jordan Reed",
        "position": "TE"
      },
      {
        "team": "Redskins",
        "jersey_number": 71,
        "name": "Trent Williams",
        "position": "LT"
      },
      {
        "team": "Rams",
        "jersey_number": 93,
        "name": "Ndamukong Suh",
        "position": "DT"
      },
      {
        "team": "Bengals",
        "jersey_number": 18,
        "name": "A.J. Green",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 32,
        "name": "Tyrann Mathieu",
        "position": "FS"
      },
      {
        "team": "Titans",
        "jersey_number": 82,
        "name": "Delanie Walker",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 79,
        "name": "Brandon Brooks",
        "position": "RG"
      },
      {
        "team": "Eagles",
        "jersey_number": 91,
        "name": "Fletcher Cox",
        "position": "DT"
      },
      {
        "team": "Eagles",
        "jersey_number": 55,
        "name": "Brandon Graham",
        "position": "LE"
      },
      {
        "team": "Falcons",
        "jersey_number": 21,
        "name": "Desmond Trufant",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 31,
        "name": "David Johnson",
        "position": "HB"
      },
      {
        "team": "Bills",
        "jersey_number": 23,
        "name": "Micah Hyde",
        "position": "SS"
      },
      {
        "team": "Patriots",
        "jersey_number": 32,
        "name": "Devin McCourty",
        "position": "FS"
      },
      {
        "team": "Ravens",
        "jersey_number": 73,
        "name": "Marshal Yanda",
        "position": "RG"
      },
      {
        "team": "Jaguars",
        "jersey_number": 93,
        "name": "Calais Campbell",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 13,
        "name": "Keenan Allen",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 21,
        "name": "Ezekiel Elliott",
        "position": "HB"
      },
      {
        "team": "Eagles",
        "jersey_number": 62,
        "name": "Jason Kelce",
        "position": "C"
      },
      {
        "team": "Vikings",
        "jersey_number": 97,
        "name": "Everson Griffen",
        "position": "RE"
      },
      {
        "team": "Panthers",
        "jersey_number": 88,
        "name": "Greg Olsen",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 29,
        "name": "Xavier Rhodes",
        "position": "CB"
      },
      {
        "team": "Rams",
        "jersey_number": 30,
        "name": "Todd Gurley II",
        "position": "HB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 21,
        "name": "Patrick Peterson",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 3,
        "name": "Russell Wilson",
        "position": "QB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 20,
        "name": "Reshad Jones",
        "position": "SS"
      },
      {
        "team": "Bengals",
        "jersey_number": 97,
        "name": "Geno Atkins",
        "position": "DT"
      },
      {
        "team": "Texans",
        "jersey_number": 90,
        "name": "Jadeveon Clowney",
        "position": "ROLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 68,
        "name": "Andrew Norwell",
        "position": "LG"
      },
      {
        "team": "Chargers",
        "jersey_number": 26,
        "name": "Casey Hayward Jr",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 86,
        "name": "Zach Ertz",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 65,
        "name": "Lane Johnson",
        "position": "RT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 90,
        "name": "DeMarcus Lawrence",
        "position": "LE"
      },
      {
        "team": "Eagles",
        "jersey_number": 71,
        "name": "Jason Peters",
        "position": "LT"
      },
      {
        "team": "Packers",
        "jersey_number": 76,
        "name": "Mike Daniels",
        "position": "RE"
      },
      {
        "team": "Lions",
        "jersey_number": 23,
        "name": "Darius Slay Jr",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 9,
        "name": "Drew Brees",
        "position": "QB"
      },
      {
        "team": "Falcons",
        "jersey_number": 24,
        "name": "Devonta Freeman",
        "position": "HB"
      },
      {
        "team": "Saints",
        "jersey_number": 13,
        "name": "Michael Thomas",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 25,
        "name": "LeSean McCoy",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 50,
        "name": "Telvin Smith",
        "position": "ROLB"
      },
      {
        "team": "Chargers",
        "jersey_number": 99,
        "name": "Joey Bosa",
        "position": "LE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 50,
        "name": "Justin Houston",
        "position": "LOLB"
      },
      {
        "team": "Chargers",
        "jersey_number": 54,
        "name": "Melvin Ingram III",
        "position": "RE"
      },
      {
        "team": "Raiders",
        "jersey_number": 70,
        "name": "Kelechi Osemele",
        "position": "LG"
      },
      {
        "team": "Eagles",
        "jersey_number": 17,
        "name": "Alshon Jeffery",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 75,
        "name": "Brandon Scherff",
        "position": "RG"
      },
      {
        "team": "Bears",
        "jersey_number": 38,
        "name": "Adrian Amos",
        "position": "SS"
      },
      {
        "team": "Vikings",
        "jersey_number": 14,
        "name": "Stefon Diggs",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 98,
        "name": "Linval Joseph",
        "position": "DT"
      },
      {
        "team": "Falcons",
        "jersey_number": 45,
        "name": "Deion Jones",
        "position": "MLB"
      },
      {
        "team": "Saints",
        "jersey_number": 23,
        "name": "Marshon Lattimore",
        "position": "CB"
      },
      {
        "team": "Falcons",
        "jersey_number": 51,
        "name": "Alex Mack",
        "position": "C"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 93,
        "name": "Gerald McCoy",
        "position": "DT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 89,
        "name": "Doug Baldwin",
        "position": "WR"
      },
      {
        "team": "Seahawks",
        "jersey_number": 31,
        "name": "Kam Chancellor",
        "position": "SS"
      },
      {
        "team": "Rams",
        "jersey_number": 20,
        "name": "Lamarcus Joyner",
        "position": "FS"
      },
      {
        "team": "49ers",
        "jersey_number": 25,
        "name": "Richard Sherman",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 74,
        "name": "Joe Staley",
        "position": "LT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 91,
        "name": "Cameron Wake",
        "position": "LE"
      },
      {
        "team": "Bengals",
        "jersey_number": 85,
        "name": "Tyler Eifert",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 22,
        "name": "Jimmy Smith",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 98,
        "name": "Brandon Williams",
        "position": "LE"
      },
      {
        "team": "Browns",
        "jersey_number": 75,
        "name": "Joel Bitonio",
        "position": "LG"
      },
      {
        "team": "Colts",
        "jersey_number": 13,
        "name": "T.Y. Hilton",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 93,
        "name": "Jabaal Sheard",
        "position": "RE"
      },
      {
        "team": "Browns",
        "jersey_number": 70,
        "name": "Kevin Zeitler",
        "position": "RG"
      },
      {
        "team": "Titans",
        "jersey_number": 31,
        "name": "Kevin Byard",
        "position": "FS"
      },
      {
        "team": "Titans",
        "jersey_number": 99,
        "name": "Jurrell Casey",
        "position": "RE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 65,
        "name": "Brandon Linder",
        "position": "C"
      },
      {
        "team": "Chargers",
        "jersey_number": 28,
        "name": "Melvin Gordon III",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 27,
        "name": "Kareem Hunt",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 15,
        "name": "Golden Tate III",
        "position": "WR"
      },
      {
        "team": "Panthers",
        "jersey_number": 99,
        "name": "Kawann Short",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 13,
        "name": "Mike Evans",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 22,
        "name": "Keanu Neal",
        "position": "SS"
      },
      {
        "team": "Falcons",
        "jersey_number": 2,
        "name": "Matt Ryan",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 11,
        "name": "Larry Fitzgerald",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 55,
        "name": "Chandler Jones",
        "position": "RE"
      },
      {
        "team": "Rams",
        "jersey_number": 21,
        "name": "Aqib Talib",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 71,
        "name": "Josh Sitton",
        "position": "LG"
      },
      {
        "team": "Patriots",
        "jersey_number": 11,
        "name": "Julian Edelman",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 21,
        "name": "Jordan Poyer",
        "position": "FS"
      },
      {
        "team": "Bills",
        "jersey_number": 27,
        "name": "Tre'Davious White",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 97,
        "name": "Cameron Heyward",
        "position": "LE"
      },
      {
        "team": "Steelers",
        "jersey_number": 7,
        "name": "Ben Roethlisberger",
        "position": "QB"
      },
      {
        "team": "Browns",
        "jersey_number": 95,
        "name": "Myles Garrett",
        "position": "RE"
      },
      {
        "team": "Broncos",
        "jersey_number": 25,
        "name": "Chris Harris Jr",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 10,
        "name": "Emmanuel Sanders",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 88,
        "name": "Demaryius Thomas",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 86,
        "name": "Hunter Henry",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 77,
        "name": "Michael Bennett",
        "position": "RE"
      },
      {
        "team": "Giants",
        "jersey_number": 21,
        "name": "Landon Collins",
        "position": "SS"
      },
      {
        "team": "Giants",
        "jersey_number": 20,
        "name": "Janoris Jenkins",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 17,
        "name": "Davante Adams",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 53,
        "name": "Zach Brown",
        "position": "MLB"
      },
      {
        "team": "Packers",
        "jersey_number": 97,
        "name": "Kenny Clark",
        "position": "DT"
      },
      {
        "team": "Panthers",
        "jersey_number": 1,
        "name": "Cam Newton",
        "position": "QB"
      },
      {
        "team": "Vikings",
        "jersey_number": 19,
        "name": "Adam Thielen",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 69,
        "name": "Demar Dotson",
        "position": "RT"
      },
      {
        "team": "Saints",
        "jersey_number": 41,
        "name": "Alvin Kamara",
        "position": "HB"
      },
      {
        "team": "Rams",
        "jersey_number": 90,
        "name": "Michael Brockers",
        "position": "LE"
      },
      {
        "team": "Rams",
        "jersey_number": 77,
        "name": "Andrew Whitworth",
        "position": "LT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 95,
        "name": "William Hayes",
        "position": "LE"
      },
      {
        "team": "Patriots",
        "jersey_number": 24,
        "name": "Stephon Gilmore",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 30,
        "name": "Jason McCourty",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 55,
        "name": "Vontaze Burfict",
        "position": "ROLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 97,
        "name": "Michael Pierce",
        "position": "DT"
      },
      {
        "team": "Texans",
        "jersey_number": 29,
        "name": "Andre Hal",
        "position": "SS"
      },
      {
        "team": "Browns",
        "jersey_number": 80,
        "name": "Jarvis Landry",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 12,
        "name": "Andrew Luck",
        "position": "QB"
      },
      {
        "team": "Titans",
        "jersey_number": 21,
        "name": "Malcolm Butler",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 27,
        "name": "Leonard Fournette",
        "position": "HB"
      },
      {
        "team": "Titans",
        "jersey_number": 33,
        "name": "Dion Lewis",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 10,
        "name": "Tyreek Hill",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 95,
        "name": "Chris Jones",
        "position": "RE"
      },
      {
        "team": "Chargers",
        "jersey_number": 17,
        "name": "Philip Rivers",
        "position": "QB"
      },
      {
        "team": "Lions",
        "jersey_number": 29,
        "name": "LeGarrette Blount",
        "position": "HB"
      },
      {
        "team": "Packers",
        "jersey_number": 21,
        "name": "Ha Ha Clinton-Dix",
        "position": "FS"
      },
      {
        "team": "Lions",
        "jersey_number": 11,
        "name": "Marvin Jones Jr",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 91,
        "name": "Ryan Kerrigan",
        "position": "LOLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 24,
        "name": "Josh Norman",
        "position": "CB"
      },
      {
        "team": "Lions",
        "jersey_number": 27,
        "name": "Glover Quin",
        "position": "FS"
      },
      {
        "team": "Redskins",
        "jersey_number": 36,
        "name": "D.J. Swearinger",
        "position": "SS"
      },
      {
        "team": "Panthers",
        "jersey_number": 22,
        "name": "Christian McCaffrey",
        "position": "HB"
      },
      {
        "team": "Bears",
        "jersey_number": 12,
        "name": "Allen Robinson",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 71,
        "name": "Ryan Ramczyk",
        "position": "RT"
      },
      {
        "team": "Rams",
        "jersey_number": 12,
        "name": "Brandin Cooks",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 56,
        "name": "Reuben Foster",
        "position": "MLB"
      },
      {
        "team": "Rams",
        "jersey_number": 22,
        "name": "Marcus Peters",
        "position": "CB"
      },
      {
        "team": "Jets",
        "jersey_number": 33,
        "name": "Jamal Adams",
        "position": "SS"
      },
      {
        "team": "Patriots",
        "jersey_number": 98,
        "name": "Trey Flowers",
        "position": "RE"
      },
      {
        "team": "Steelers",
        "jersey_number": 77,
        "name": "Marcus Gilbert",
        "position": "RT"
      },
      {
        "team": "Steelers",
        "jersey_number": 50,
        "name": "Ryan Shazier",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 55,
        "name": "Terrell Suggs",
        "position": "ROLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 9,
        "name": "Justin Tucker",
        "position": "K"
      },
      {
        "team": "Steelers",
        "jersey_number": 91,
        "name": "Stephon Tuitt",
        "position": "RE"
      },
      {
        "team": "Ravens",
        "jersey_number": 32,
        "name": "Eric Weddle",
        "position": "FS"
      },
      {
        "team": "Titans",
        "jersey_number": 22,
        "name": "Derrick Henry",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 91,
        "name": "Yannick Ngakoue",
        "position": "RE"
      },
      {
        "team": "Titans",
        "jersey_number": 98,
        "name": "Brian Orakpo",
        "position": "ROLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 89,
        "name": "Amari Cooper",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 22,
        "name": "Rashaan Melvin",
        "position": "CB"
      },
      {
        "team": "Raiders",
        "jersey_number": 82,
        "name": "Jordy Nelson",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 72,
        "name": "Donald Penn",
        "position": "LT"
      },
      {
        "team": "Chargers",
        "jersey_number": 22,
        "name": "Jason Verrett",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 26,
        "name": "Jay Ajayi",
        "position": "HB"
      },
      {
        "team": "Eagles",
        "jersey_number": 21,
        "name": "Ronald Darby",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 11,
        "name": "Carson Wentz",
        "position": "QB"
      },
      {
        "team": "Packers",
        "jersey_number": 80,
        "name": "Jimmy Graham",
        "position": "TE"
      },
      {
        "team": "Lions",
        "jersey_number": 76,
        "name": "T.J. Lang",
        "position": "RG"
      },
      {
        "team": "Packers",
        "jersey_number": 52,
        "name": "Clay Matthews",
        "position": "LOLB"
      },
      {
        "team": "Bears",
        "jersey_number": 96,
        "name": "Akiem Hicks",
        "position": "LE"
      },
      {
        "team": "Vikings",
        "jersey_number": 82,
        "name": "Kyle Rudolph",
        "position": "TE"
      },
      {
        "team": "Falcons",
        "jersey_number": 26,
        "name": "Tevin Coleman",
        "position": "HB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 24,
        "name": "Brent Grimes",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 22,
        "name": "Mark Ingram II",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 97,
        "name": "Grady Jarrett",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 99,
        "name": "DeForest Buckner",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 15,
        "name": "Pierre Garcon",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 6,
        "name": "Johnny Hekker",
        "position": "P"
      },
      {
        "team": "Dolphins",
        "jersey_number": 80,
        "name": "Danny Amendola",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 71,
        "name": "Danny Shelton",
        "position": "DT"
      },
      {
        "team": "Steelers",
        "jersey_number": 23,
        "name": "Joe Haden",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 53,
        "name": "Maurkice Pouncey",
        "position": "C"
      },
      {
        "team": "Colts",
        "jersey_number": 84,
        "name": "Jack Doyle",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 24,
        "name": "Johnathan Joseph",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 26,
        "name": "Lamar Miller",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 39,
        "name": "Tashaun Gipson",
        "position": "FS"
      },
      {
        "team": "Jaguars",
        "jersey_number": 97,
        "name": "Malik Jackson",
        "position": "DT"
      },
      {
        "team": "Titans",
        "jersey_number": 77,
        "name": "Taylor Lewan",
        "position": "LT"
      },
      {
        "team": "Raiders",
        "jersey_number": 87,
        "name": "Jared Cook",
        "position": "TE"
      },
      {
        "team": "Raiders",
        "jersey_number": 24,
        "name": "Marshawn Lynch",
        "position": "HB"
      },
      {
        "team": "Eagles",
        "jersey_number": 53,
        "name": "Nigel Bradham",
        "position": "LOLB"
      },
      {
        "team": "Giants",
        "jersey_number": 88,
        "name": "Evan Engram",
        "position": "TE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 6,
        "name": "Chris Jones",
        "position": "P"
      },
      {
        "team": "Lions",
        "jersey_number": 9,
        "name": "Matthew Stafford",
        "position": "QB"
      },
      {
        "team": "Lions",
        "jersey_number": 71,
        "name": "Rick Wagner",
        "position": "RT"
      },
      {
        "team": "Vikings",
        "jersey_number": 33,
        "name": "Dalvin Cook",
        "position": "HB"
      },
      {
        "team": "Bears",
        "jersey_number": 24,
        "name": "Jordan Howard",
        "position": "HB"
      },
      {
        "team": "Vikings",
        "jersey_number": 34,
        "name": "Andrew Sendejo",
        "position": "SS"
      },
      {
        "team": "Falcons",
        "jersey_number": 23,
        "name": "Robert Alford",
        "position": "CB"
      },
      {
        "team": "Falcons",
        "jersey_number": 3,
        "name": "Matt Bryant",
        "position": "K"
      },
      {
        "team": "Saints",
        "jersey_number": 56,
        "name": "Demario Davis",
        "position": "MLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 11,
        "name": "DeSean Jackson",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 9,
        "name": "Robbie Gould",
        "position": "K"
      },
      {
        "team": "Rams",
        "jersey_number": 43,
        "name": "John Johnson III",
        "position": "SS"
      },
      {
        "team": "49ers",
        "jersey_number": 28,
        "name": "Jerick McKinnon",
        "position": "HB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 70,
        "name": "Ja'Wuan James",
        "position": "RT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 10,
        "name": "Kenny Stills",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 11,
        "name": "Robby Anderson",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 60,
        "name": "David Andrews",
        "position": "C"
      },
      {
        "team": "Bills",
        "jersey_number": 13,
        "name": "Kelvin Benjamin",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 85,
        "name": "Charles Clay",
        "position": "TE"
      },
      {
        "team": "Patriots",
        "jersey_number": 94,
        "name": "Adrian Clayborn",
        "position": "LE"
      },
      {
        "team": "Patriots",
        "jersey_number": 54,
        "name": "Dont'a Hightower",
        "position": "LOLB"
      },
      {
        "team": "Jets",
        "jersey_number": 92,
        "name": "Leonard Williams",
        "position": "LE"
      },
      {
        "team": "Bengals",
        "jersey_number": 25,
        "name": "Giovani Bernard",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 42,
        "name": "Morgan Burnett",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 15,
        "name": "Michael Crabtree",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 96,
        "name": "Carlos Dunlap",
        "position": "LE"
      },
      {
        "team": "Bengals",
        "jersey_number": 22,
        "name": "William Jackson",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 23,
        "name": "Tony Jefferson",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 4,
        "name": "Sam Koch",
        "position": "P"
      },
      {
        "team": "Ravens",
        "jersey_number": 57,
        "name": "C.J. Mosley",
        "position": "MLB"
      },
      {
        "team": "Colts",
        "jersey_number": 74,
        "name": "Anthony Castonzo",
        "position": "LT"
      },
      {
        "team": "Colts",
        "jersey_number": 85,
        "name": "Eric Ebron",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 4,
        "name": "Adam Vinatieri",
        "position": "K"
      },
      {
        "team": "Jaguars",
        "jersey_number": 99,
        "name": "Marcell Dareus",
        "position": "DT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 44,
        "name": "Myles Jack",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 1,
        "name": "Marquette King",
        "position": "P"
      },
      {
        "team": "Raiders",
        "jersey_number": 59,
        "name": "Tahir Whitehead",
        "position": "LOLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 13,
        "name": "Nelson Agholor",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 80,
        "name": "Jamison Crowder",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 10,
        "name": "Paul Richardson Jr",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 25,
        "name": "Theo Riddick",
        "position": "HB"
      },
      {
        "team": "Redskins",
        "jersey_number": 11,
        "name": "Alex Smith",
        "position": "QB"
      },
      {
        "team": "Redskins",
        "jersey_number": 25,
        "name": "Chris Thompson",
        "position": "HB"
      },
      {
        "team": "Vikings",
        "jersey_number": 55,
        "name": "Anthony Barr",
        "position": "ROLB"
      },
      {
        "team": "Bears",
        "jersey_number": 80,
        "name": "Trey Burton",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 99,
        "name": "Danielle Hunter",
        "position": "LE"
      },
      {
        "team": "Bears",
        "jersey_number": 59,
        "name": "Danny Trevathan",
        "position": "MLB"
      },
      {
        "team": "Panthers",
        "jersey_number": 60,
        "name": "Daryl Williams",
        "position": "RT"
      },
      {
        "team": "Falcons",
        "jersey_number": 37,
        "name": "Ricardo Allen",
        "position": "FS"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 90,
        "name": "Jason Pierre-Paul",
        "position": "LE"
      },
      {
        "team": "Saints",
        "jersey_number": 43,
        "name": "Marcus Williams",
        "position": "FS"
      },
      {
        "team": "49ers",
        "jersey_number": 44,
        "name": "Kyle Juszczyk",
        "position": "FB"
      },
      {
        "team": "Patriots",
        "jersey_number": 23,
        "name": "Patrick Chung",
        "position": "SS"
      },
      {
        "team": "Patriots",
        "jersey_number": 3,
        "name": "Stephen Gostkowski",
        "position": "K"
      },
      {
        "team": "Patriots",
        "jersey_number": 15,
        "name": "Chris Hogan",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 55,
        "name": "Jerry Hughes",
        "position": "RE"
      },
      {
        "team": "Jets",
        "jersey_number": 10,
        "name": "Jermaine Kearse",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 69,
        "name": "Shaq Mason",
        "position": "RG"
      },
      {
        "team": "Jets",
        "jersey_number": 99,
        "name": "Steve McLendon",
        "position": "DT"
      },
      {
        "team": "Patriots",
        "jersey_number": 28,
        "name": "James White",
        "position": "HB"
      },
      {
        "team": "Jets",
        "jersey_number": 54,
        "name": "Avery Williamson",
        "position": "MLB"
      },
      {
        "team": "Browns",
        "jersey_number": 29,
        "name": "Duke Johnson Jr",
        "position": "HB"
      },
      {
        "team": "Colts",
        "jersey_number": 56,
        "name": "Quenton Nelson",
        "position": "LG"
      },
      {
        "team": "Colts",
        "jersey_number": 99,
        "name": "Al Woods",
        "position": "DT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 42,
        "name": "Barry Church",
        "position": "SS"
      },
      {
        "team": "Titans",
        "jersey_number": 25,
        "name": "Adoree' Jackson",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 29,
        "name": "Bradley Roby",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 26,
        "name": "Logan Ryan",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 31,
        "name": "Justin Simmons",
        "position": "FS"
      },
      {
        "team": "Broncos",
        "jersey_number": 95,
        "name": "Derek Wolfe",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 12,
        "name": "Travis Benjamin",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 4,
        "name": "Derek Carr",
        "position": "QB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 2,
        "name": "Dustin Colquitt",
        "position": "P"
      },
      {
        "team": "Raiders",
        "jersey_number": 42,
        "name": "Karl Joseph",
        "position": "SS"
      },
      {
        "team": "Chargers",
        "jersey_number": 94,
        "name": "Corey Liuget",
        "position": "DT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 14,
        "name": "Sammy Watkins",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 24,
        "name": "Trevor Williams",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 93,
        "name": "Tim Jernigan",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 76,
        "name": "Nate Solder",
        "position": "LT"
      },
      {
        "team": "Eagles",
        "jersey_number": 43,
        "name": "Darren Sproles",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 23,
        "name": "Jonathan Stewart",
        "position": "HB"
      },
      {
        "team": "Eagles",
        "jersey_number": 14,
        "name": "Mike Wallace",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 94,
        "name": "Ezekiel Ansah",
        "position": "RE"
      },
      {
        "team": "Packers",
        "jersey_number": 18,
        "name": "Randall Cobb",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 85,
        "name": "Vernon Davis",
        "position": "TE"
      },
      {
        "team": "Packers",
        "jersey_number": 50,
        "name": "Blake Martinez",
        "position": "MLB"
      },
      {
        "team": "Packers",
        "jersey_number": 96,
        "name": "Muhammad Wilkerson",
        "position": "LE"
      },
      {
        "team": "Bears",
        "jersey_number": 29,
        "name": "Tarik Cohen",
        "position": "HB"
      },
      {
        "team": "Panthers",
        "jersey_number": 58,
        "name": "Thomas Davis Sr",
        "position": "ROLB"
      },
      {
        "team": "Panthers",
        "jersey_number": 95,
        "name": "Dontari Poe",
        "position": "DT"
      },
      {
        "team": "Vikings",
        "jersey_number": 93,
        "name": "Sheldon Richardson",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 97,
        "name": "Vinny Curry",
        "position": "RE"
      },
      {
        "team": "Saints",
        "jersey_number": 81,
        "name": "Cameron Meredith",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 21,
        "name": "Patrick Robinson",
        "position": "CB"
      },
      {
        "team": "Falcons",
        "jersey_number": 73,
        "name": "Ryan Schraeder",
        "position": "RT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 50,
        "name": "K.J. Wright",
        "position": "ROLB"
      },
      {
        "team": "49ers",
        "jersey_number": 10,
        "name": "Jimmy Garoppolo",
        "position": "QB"
      },
      {
        "team": "Rams",
        "jersey_number": 16,
        "name": "Jared Goff",
        "position": "QB"
      },
      {
        "team": "49ers",
        "jersey_number": 11,
        "name": "Marquise Goodwin",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 29,
        "name": "Jaquiski Tartt",
        "position": "SS"
      },
      {
        "team": "Rams",
        "jersey_number": 17,
        "name": "Robert Woods",
        "position": "WR"
      },
      {
        "team": "Dolphins",
        "jersey_number": 32,
        "name": "Kenyan Drake",
        "position": "HB"
      },
      {
        "team": "Patriots",
        "jersey_number": 77,
        "name": "Trent Brown",
        "position": "RT"
      },
      {
        "team": "Patriots",
        "jersey_number": 90,
        "name": "Malcom Brown",
        "position": "DT"
      },
      {
        "team": "Patriots",
        "jersey_number": 61,
        "name": "Marcus Cannon",
        "position": "RT"
      },
      {
        "team": "Jets",
        "jersey_number": 22,
        "name": "Trumaine Johnson",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 95,
        "name": "Kyle Williams",
        "position": "DT"
      },
      {
        "team": "Bengals",
        "jersey_number": 58,
        "name": "Carl Lawson",
        "position": "RE"
      },
      {
        "team": "Browns",
        "jersey_number": 12,
        "name": "Josh Gordon",
        "position": "WR"
      },
      {
        "team": "Browns",
        "jersey_number": 34,
        "name": "Carlos Hyde",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 54,
        "name": "Mychal Kendricks",
        "position": "MLB"
      },
      {
        "team": "Texans",
        "jersey_number": 4,
        "name": "Deshaun Watson",
        "position": "QB"
      },
      {
        "team": "Titans",
        "jersey_number": 37,
        "name": "Johnathan Cyprien",
        "position": "SS"
      },
      {
        "team": "Broncos",
        "jersey_number": 65,
        "name": "Ron Leary",
        "position": "LG"
      },
      {
        "team": "Jaguars",
        "jersey_number": 11,
        "name": "Marqise Lee",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 18,
        "name": "Rishard Matthews",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 37,
        "name": "Jahleel Addae",
        "position": "FS"
      },
      {
        "team": "Chiefs",
        "jersey_number": 23,
        "name": "Kendall Fuller",
        "position": "CB"
      },
      {
        "team": "Raiders",
        "jersey_number": 31,
        "name": "Marcus Gilchrist",
        "position": "FS"
      },
      {
        "team": "Chiefs",
        "jersey_number": 53,
        "name": "Anthony Hitchens",
        "position": "MLB"
      },
      {
        "team": "Chargers",
        "jersey_number": 16,
        "name": "Tyrell Williams",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 26,
        "name": "Saquon Barkley",
        "position": "HB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 95,
        "name": "David Irving",
        "position": "DT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 4,
        "name": "Dak Prescott",
        "position": "QB"
      },
      {
        "team": "Giants",
        "jersey_number": 87,
        "name": "Sterling Shepard",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 94,
        "name": "Dalvin Tomlinson",
        "position": "RE"
      },
      {
        "team": "Giants",
        "jersey_number": 54,
        "name": "Olivier Vernon",
        "position": "ROLB"
      },
      {
        "team": "Lions",
        "jersey_number": 21,
        "name": "Ameer Abdullah",
        "position": "HB"
      },
      {
        "team": "Packers",
        "jersey_number": 85,
        "name": "Marcedes Lewis",
        "position": "TE"
      },
      {
        "team": "Packers",
        "jersey_number": 53,
        "name": "Nick Perry",
        "position": "ROLB"
      },
      {
        "team": "Lions",
        "jersey_number": 5,
        "name": "Matt Prater",
        "position": "K"
      },
      {
        "team": "Vikings",
        "jersey_number": 8,
        "name": "Kirk Cousins",
        "position": "QB"
      },
      {
        "team": "Panthers",
        "jersey_number": 17,
        "name": "Devin Funchess",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 25,
        "name": "Latavius Murray",
        "position": "HB"
      },
      {
        "team": "Panthers",
        "jersey_number": 90,
        "name": "Julius Peppers",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 70,
        "name": "Trai Turner",
        "position": "RG"
      },
      {
        "team": "Saints",
        "jersey_number": 72,
        "name": "Terron Armstead",
        "position": "LT"
      },
      {
        "team": "Falcons",
        "jersey_number": 44,
        "name": "Vic Beasley Jr",
        "position": "LE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 84,
        "name": "Cameron Brate",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 20,
        "name": "Ken Crawley",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 19,
        "name": "Ted Ginn Jr",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 98,
        "name": "Takkarist McKinley",
        "position": "LE"
      },
      {
        "team": "Saints",
        "jersey_number": 6,
        "name": "Thomas Morstead",
        "position": "P"
      },
      {
        "team": "Falcons",
        "jersey_number": 38,
        "name": "Ron Parker",
        "position": "FS"
      },
      {
        "team": "Falcons",
        "jersey_number": 50,
        "name": "Brooks Reed",
        "position": "RE"
      },
      {
        "team": "Falcons",
        "jersey_number": 12,
        "name": "Mohamed Sanu Sr",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 60,
        "name": "Max Unger",
        "position": "C"
      },
      {
        "team": "Seahawks",
        "jersey_number": 16,
        "name": "Tyler Lockett",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 41,
        "name": "Antoine Bethea",
        "position": "FS"
      },
      {
        "team": "Rams",
        "jersey_number": 23,
        "name": "Nickell Robey-Coleman",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 84,
        "name": "Jermaine Gresham",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 11,
        "name": "DeVante Parker",
        "position": "WR"
      },
      {
        "team": "Dolphins",
        "jersey_number": 94,
        "name": "Robert Quinn",
        "position": "RE"
      },
      {
        "team": "Patriots",
        "jersey_number": 83,
        "name": "Dwayne Allen",
        "position": "TE"
      },
      {
        "team": "Bills",
        "jersey_number": 93,
        "name": "Trent Murphy",
        "position": "RE"
      },
      {
        "team": "Steelers",
        "jersey_number": 25,
        "name": "Artie Burns",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 34,
        "name": "Alex Collins",
        "position": "HB"
      },
      {
        "team": "Bengals",
        "jersey_number": 28,
        "name": "Joe Mixon",
        "position": "HB"
      },
      {
        "team": "Bengals",
        "jersey_number": 36,
        "name": "Shawn Williams",
        "position": "SS"
      },
      {
        "team": "Texans",
        "jersey_number": 15,
        "name": "Will Fuller V",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 73,
        "name": "Zach Fulton",
        "position": "LG"
      },
      {
        "team": "Browns",
        "jersey_number": 26,
        "name": "Derrick Kindred",
        "position": "SS"
      },
      {
        "team": "Browns",
        "jersey_number": 6,
        "name": "Baker Mayfield",
        "position": "QB"
      },
      {
        "team": "Texans",
        "jersey_number": 59,
        "name": "Whitney Mercilus",
        "position": "LOLB"
      },
      {
        "team": "Browns",
        "jersey_number": 85,
        "name": "David Njoku",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 98,
        "name": "D.J. Reader",
        "position": "DT"
      },
      {
        "team": "Browns",
        "jersey_number": 5,
        "name": "Tyrod Taylor",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 48,
        "name": "Shaquil Barrett",
        "position": "ROLB"
      },
      {
        "team": "Titans",
        "jersey_number": 78,
        "name": "Jack Conklin",
        "position": "RT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 56,
        "name": "Dante Fowler Jr",
        "position": "LE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 88,
        "name": "Austin Seferian-Jenkins",
        "position": "TE"
      },
      {
        "team": "Titans",
        "jersey_number": 90,
        "name": "DaQuan Jones",
        "position": "LE"
      },
      {
        "team": "Broncos",
        "jersey_number": 4,
        "name": "Case Keenum",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 61,
        "name": "Matt Paradis",
        "position": "C"
      },
      {
        "team": "Raiders",
        "jersey_number": 12,
        "name": "Martavis Bryant",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 76,
        "name": "Laurent Duvernay-Tardif",
        "position": "RG"
      },
      {
        "team": "Chargers",
        "jersey_number": 30,
        "name": "Austin Ekeler",
        "position": "HB"
      },
      {
        "team": "Raiders",
        "jersey_number": 51,
        "name": "Bruce Irvin",
        "position": "RE"
      },
      {
        "team": "Chargers",
        "jersey_number": 20,
        "name": "Desmond King",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 24,
        "name": "Chidobe Awuzie",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 11,
        "name": "Cole Beasley",
        "position": "WR"
      },
      {
        "team": "Eagles",
        "jersey_number": 4,
        "name": "Jake Elliott",
        "position": "K"
      },
      {
        "team": "Eagles",
        "jersey_number": 58,
        "name": "Jordan Hicks",
        "position": "MLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 17,
        "name": "Allen Hurns",
        "position": "WR"
      },
      {
        "team": "Eagles",
        "jersey_number": 23,
        "name": "Rodney McLeod Jr",
        "position": "FS"
      },
      {
        "team": "Eagles",
        "jersey_number": 56,
        "name": "Chris Long",
        "position": "LE"
      },
      {
        "team": "Eagles",
        "jersey_number": 31,
        "name": "Jalen Mills",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 75,
        "name": "Bryan Bulaga",
        "position": "RT"
      },
      {
        "team": "Redskins",
        "jersey_number": 96,
        "name": "Pernell McPhee",
        "position": "LOLB"
      },
      {
        "team": "Packers",
        "jersey_number": 88,
        "name": "Ty Montgomery",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 32,
        "name": "Tavon Wilson Sr",
        "position": "SS"
      },
      {
        "team": "Redskins",
        "jersey_number": 5,
        "name": "Tress Way",
        "position": "P"
      },
      {
        "team": "Lions",
        "jersey_number": 69,
        "name": "Anthony Zettel",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 20,
        "name": "C.J. Anderson",
        "position": "HB"
      },
      {
        "team": "Bears",
        "jersey_number": 18,
        "name": "Taylor Gabriel",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 86,
        "name": "Zach Miller",
        "position": "TE"
      },
      {
        "team": "Bears",
        "jersey_number": 58,
        "name": "Roquan Smith",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 65,
        "name": "Cody Whitehair",
        "position": "LG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 9,
        "name": "Bryan Anger",
        "position": "P"
      },
      {
        "team": "Falcons",
        "jersey_number": 5,
        "name": "Matt Bosher",
        "position": "P"
      },
      {
        "team": "Falcons",
        "jersey_number": 59,
        "name": "De'Vondre Campbell",
        "position": "ROLB"
      },
      {
        "team": "Saints",
        "jersey_number": 95,
        "name": "Tyeler Davison",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 89,
        "name": "Josh Hill",
        "position": "TE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 74,
        "name": "Ali Marpet",
        "position": "RG"
      },
      {
        "team": "Falcons",
        "jersey_number": 70,
        "name": "Jake Matthews",
        "position": "LT"
      },
      {
        "team": "Saints",
        "jersey_number": 57,
        "name": "Alex Okafor",
        "position": "RE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 76,
        "name": "Duane Brown",
        "position": "LT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 55,
        "name": "Frank Clark",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 11,
        "name": "Sebastian Janikowski",
        "position": "K"
      },
      {
        "team": "Seahawks",
        "jersey_number": 15,
        "name": "Brandon Marshall",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 98,
        "name": "Corey Peters",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 58,
        "name": "Weston Richburg",
        "position": "C"
      },
      {
        "team": "Dolphins",
        "jersey_number": 2,
        "name": "Matt Haack",
        "position": "P"
      },
      {
        "team": "Patriots",
        "jersey_number": 6,
        "name": "Ryan Allen",
        "position": "P"
      },
      {
        "team": "Jets",
        "jersey_number": 96,
        "name": "Henry Anderson",
        "position": "RE"
      },
      {
        "team": "Patriots",
        "jersey_number": 21,
        "name": "Duron Harmon",
        "position": "FS"
      },
      {
        "team": "Bills",
        "jersey_number": 33,
        "name": "Chris Ivory",
        "position": "HB"
      },
      {
        "team": "Jets",
        "jersey_number": 41,
        "name": "Buster Skrine",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 24,
        "name": "Brandon Carr",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 79,
        "name": "Javon Hargrave",
        "position": "DT"
      },
      {
        "team": "Ravens",
        "jersey_number": 29,
        "name": "Marlon Humphrey",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 99,
        "name": "Matthew Judon",
        "position": "LOLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 27,
        "name": "Dre Kirkpatrick",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 19,
        "name": "JuJu Smith-Schuster",
        "position": "WR"
      },
      {
        "team": "Steelers",
        "jersey_number": 90,
        "name": "T.J. Watt",
        "position": "ROLB"
      },
      {
        "team": "Browns",
        "jersey_number": 20,
        "name": "Briean Boddy-Calhoun",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 38,
        "name": "T.J. Carrie",
        "position": "CB"
      },
      {
        "team": "Colts",
        "jersey_number": 41,
        "name": "Matthias Farley",
        "position": "SS"
      },
      {
        "team": "Browns",
        "jersey_number": 28,
        "name": "E.J. Gaines",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 21,
        "name": "Denzel Ward",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 5,
        "name": "Blake Bortles",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 55,
        "name": "Bradley Chubb",
        "position": "RE"
      },
      {
        "team": "Titans",
        "jersey_number": 84,
        "name": "Corey Davis",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 60,
        "name": "Ben Jones",
        "position": "C"
      },
      {
        "team": "Titans",
        "jersey_number": 64,
        "name": "Josh Kline",
        "position": "RG"
      },
      {
        "team": "Broncos",
        "jersey_number": 8,
        "name": "Brandon McManus",
        "position": "K"
      },
      {
        "team": "Broncos",
        "jersey_number": 26,
        "name": "Darian Stewart",
        "position": "SS"
      },
      {
        "team": "Jaguars",
        "jersey_number": 12,
        "name": "Dede Westbrook",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 59,
        "name": "Wesley Woodyard",
        "position": "MLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 24,
        "name": "David Amerson",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 7,
        "name": "Harrison Butker",
        "position": "K"
      },
      {
        "team": "Raiders",
        "jersey_number": 97,
        "name": "Mario Edwards Jr",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 78,
        "name": "Justin Ellis",
        "position": "DT"
      },
      {
        "team": "Chargers",
        "jersey_number": 33,
        "name": "Derwin James",
        "position": "SS"
      },
      {
        "team": "Raiders",
        "jersey_number": 56,
        "name": "Derrick Johnson",
        "position": "MLB"
      },
      {
        "team": "Chargers",
        "jersey_number": 76,
        "name": "Russell Okung",
        "position": "LT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 71,
        "name": "Mitchell Schwartz",
        "position": "RT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 10,
        "name": "Tavon Austin",
        "position": "HB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 5,
        "name": "Dan Bailey",
        "position": "K"
      },
      {
        "team": "Eagles",
        "jersey_number": 96,
        "name": "Derek Barnett",
        "position": "RE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 98,
        "name": "Tyrone Crawford",
        "position": "RE"
      },
      {
        "team": "Eagles",
        "jersey_number": 9,
        "name": "Nick Foles",
        "position": "QB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 31,
        "name": "Byron Jones",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 94,
        "name": "Haloti Ngata",
        "position": "DT"
      },
      {
        "team": "Redskins",
        "jersey_number": 98,
        "name": "Matthew Ioannidis",
        "position": "LE"
      },
      {
        "team": "Lions",
        "jersey_number": 6,
        "name": "Sam Martin",
        "position": "P"
      },
      {
        "team": "Panthers",
        "jersey_number": 97,
        "name": "Mario Addison",
        "position": "RE"
      },
      {
        "team": "Bears",
        "jersey_number": 37,
        "name": "Bryce Callahan",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 23,
        "name": "Kyle Fuller",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 9,
        "name": "Graham Gano",
        "position": "K"
      },
      {
        "team": "Bears",
        "jersey_number": 39,
        "name": "Eddie Jackson",
        "position": "FS"
      },
      {
        "team": "Panthers",
        "jersey_number": 54,
        "name": "Shaq Thompson",
        "position": "LOLB"
      },
      {
        "team": "Vikings",
        "jersey_number": 26,
        "name": "Trae Waynes",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 58,
        "name": "Kwon Alexander",
        "position": "MLB"
      },
      {
        "team": "Falcons",
        "jersey_number": 81,
        "name": "Austin Hooper",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 98,
        "name": "Sheldon Rankins",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 98,
        "name": "Mitch Unrein",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 82,
        "name": "Benjamin Watson",
        "position": "TE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 3,
        "name": "Jameis Winston",
        "position": "QB"
      },
      {
        "team": "Rams",
        "jersey_number": 4,
        "name": "Greg Zuerlein",
        "position": "K"
      },
      {
        "team": "Seahawks",
        "jersey_number": 26,
        "name": "Shaquill Griffin",
        "position": "CB"
      },
      {
        "team": "Rams",
        "jersey_number": 76,
        "name": "Rodger Saffold III",
        "position": "LG"
      },
      {
        "team": "Rams",
        "jersey_number": 18,
        "name": "Cooper Kupp",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 5,
        "name": "Bradley Pinion",
        "position": "P"
      },
      {
        "team": "Cardinals",
        "jersey_number": 67,
        "name": "Justin Pugh",
        "position": "RG"
      },
      {
        "team": "Cardinals",
        "jersey_number": 28,
        "name": "Jamar Taylor",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 29,
        "name": "Minkah Fitzpatrick",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 28,
        "name": "Bobby McCain",
        "position": "CB"
      },
      {
        "team": "Jets",
        "jersey_number": 68,
        "name": "Kelvin Beachum",
        "position": "LT"
      },
      {
        "team": "Jets",
        "jersey_number": 20,
        "name": "Isaiah Crowell",
        "position": "HB"
      },
      {
        "team": "Jets",
        "jersey_number": 81,
        "name": "Quincy Enunwa",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 4,
        "name": "Stephen Hauschka",
        "position": "K"
      },
      {
        "team": "Jets",
        "jersey_number": 48,
        "name": "Jordan Jenkins",
        "position": "LOLB"
      },
      {
        "team": "Jets",
        "jersey_number": 29,
        "name": "Bilal Powell",
        "position": "HB"
      },
      {
        "team": "Patriots",
        "jersey_number": 62,
        "name": "Joe Thuney",
        "position": "LG"
      },
      {
        "team": "Steelers",
        "jersey_number": 4,
        "name": "Jordan Berry",
        "position": "P"
      },
      {
        "team": "Steelers",
        "jersey_number": 9,
        "name": "Chris Boswell",
        "position": "K"
      },
      {
        "team": "Ravens",
        "jersey_number": 13,
        "name": "John Brown",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 21,
        "name": "Darqueze Dennard",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 5,
        "name": "Joe Flacco",
        "position": "QB"
      },
      {
        "team": "Bengals",
        "jersey_number": 77,
        "name": "Cordy Glenn",
        "position": "LT"
      },
      {
        "team": "Ravens",
        "jersey_number": 69,
        "name": "Willie Henry",
        "position": "LE"
      },
      {
        "team": "Bengals",
        "jersey_number": 43,
        "name": "George Iloka",
        "position": "FS"
      },
      {
        "team": "Ravens",
        "jersey_number": 8,
        "name": "Lamar Jackson",
        "position": "QB"
      },
      {
        "team": "Bengals",
        "jersey_number": 90,
        "name": "Michael Johnson",
        "position": "RE"
      },
      {
        "team": "Bengals",
        "jersey_number": 81,
        "name": "Tyler Kroft",
        "position": "TE"
      },
      {
        "team": "Bengals",
        "jersey_number": 11,
        "name": "Brandon LaFell",
        "position": "WR"
      },
      {
        "team": "Steelers",
        "jersey_number": 89,
        "name": "Vance McDonald",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 79,
        "name": "Ronnie Stanley",
        "position": "LT"
      },
      {
        "team": "Ravens",
        "jersey_number": 25,
        "name": "Tavon Young",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 19,
        "name": "Corey Coleman",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 22,
        "name": "Aaron Colvin",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 41,
        "name": "Zach Cunningham",
        "position": "MLB"
      },
      {
        "team": "Browns",
        "jersey_number": 23,
        "name": "Damarious Randall",
        "position": "FS"
      },
      {
        "team": "Broncos",
        "jersey_number": 72,
        "name": "Garett Bolles",
        "position": "LT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 84,
        "name": "Keelan Cole",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 6,
        "name": "Brett Kern",
        "position": "P"
      },
      {
        "team": "Titans",
        "jersey_number": 96,
        "name": "Bennie Logan",
        "position": "DT"
      },
      {
        "team": "Titans",
        "jersey_number": 8,
        "name": "Marcus Mariota",
        "position": "QB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 10,
        "name": "Donte Moncrief",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 94,
        "name": "Domata Peko Sr",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 96,
        "name": "Tank Carradine",
        "position": "RE"
      },
      {
        "team": "Raiders",
        "jersey_number": 66,
        "name": "Gabe Jackson",
        "position": "RG"
      },
      {
        "team": "Chiefs",
        "jersey_number": 59,
        "name": "Reggie Ragland",
        "position": "MLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 32,
        "name": "Spencer Ware",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 35,
        "name": "Charcandrick West",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 26,
        "name": "Damien Williams",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 25,
        "name": "Kerwynn Williams",
        "position": "HB"
      },
      {
        "team": "Chargers",
        "jersey_number": 81,
        "name": "Mike Williams",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 76,
        "name": "Kony Ealy",
        "position": "RE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 27,
        "name": "Jourdan Lewis",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 83,
        "name": "Terrance Williams",
        "position": "WR"
      },
      {
        "team": "Eagles",
        "jersey_number": 61,
        "name": "Stefen Wisniewski",
        "position": "LG"
      },
      {
        "team": "Redskins",
        "jersey_number": 93,
        "name": "Jonathan Allen",
        "position": "RE"
      },
      {
        "team": "Redskins",
        "jersey_number": 47,
        "name": "Quinton Dunbar",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 29,
        "name": "Mike Adams",
        "position": "SS"
      },
      {
        "team": "Bears",
        "jersey_number": 20,
        "name": "Prince Amukamara",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 94,
        "name": "Leonard Floyd",
        "position": "ROLB"
      },
      {
        "team": "Bears",
        "jersey_number": 72,
        "name": "Charles Leno Jr",
        "position": "LT"
      },
      {
        "team": "Vikings",
        "jersey_number": 54,
        "name": "Eric Kendricks",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 75,
        "name": "Kyle Long",
        "position": "RG"
      },
      {
        "team": "Vikings",
        "jersey_number": 4,
        "name": "Ryan Quigley",
        "position": "P"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 12,
        "name": "Chris Godwin",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 80,
        "name": "O.J. Howard",
        "position": "TE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 10,
        "name": "Adam Humphries",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 67,
        "name": "Andy Levitre",
        "position": "LG"
      },
      {
        "team": "Saints",
        "jersey_number": 3,
        "name": "Wil Lutz",
        "position": "K"
      },
      {
        "team": "Saints",
        "jersey_number": 93,
        "name": "David Onyemata",
        "position": "DT"
      },
      {
        "team": "Falcons",
        "jersey_number": 34,
        "name": "Brian Poole",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 50,
        "name": "Vita Vea",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 91,
        "name": "Arik Armstead",
        "position": "LE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 36,
        "name": "Budda Baker",
        "position": "SS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 9,
        "name": "Sam Bradford",
        "position": "QB"
      },
      {
        "team": "Rams",
        "jersey_number": 79,
        "name": "Rob Havenstein",
        "position": "RT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 95,
        "name": "Dion Jordan",
        "position": "RE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 2,
        "name": "Andy Lee",
        "position": "P"
      },
      {
        "team": "Seahawks",
        "jersey_number": 90,
        "name": "Jarran Reed",
        "position": "DT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 90,
        "name": "Charles Harris",
        "position": "RE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 17,
        "name": "Ryan Tannehill",
        "position": "QB"
      },
      {
        "team": "Bills",
        "jersey_number": 57,
        "name": "Lorenzo Alexander",
        "position": "LOLB"
      },
      {
        "team": "Jets",
        "jersey_number": 5,
        "name": "Teddy Bridgewater",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 34,
        "name": "Rex Burkhead",
        "position": "HB"
      },
      {
        "team": "Jets",
        "jersey_number": 21,
        "name": "Morris Claiborne",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 22,
        "name": "Vontae Davis",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 93,
        "name": "Lawrence Guy",
        "position": "DT"
      },
      {
        "team": "Jets",
        "jersey_number": 26,
        "name": "Marcus Maye",
        "position": "FS"
      },
      {
        "team": "Jets",
        "jersey_number": 15,
        "name": "Josh McCown",
        "position": "QB"
      },
      {
        "team": "Jets",
        "jersey_number": 8,
        "name": "Cairo Santos",
        "position": "K"
      },
      {
        "team": "Steelers",
        "jersey_number": 73,
        "name": "Ramon Foster",
        "position": "LG"
      },
      {
        "team": "Steelers",
        "jersey_number": 28,
        "name": "Mike Hilton",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 81,
        "name": "Hayden Hurst",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 41,
        "name": "Anthony Levine Sr",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 42,
        "name": "Patrick Ricard",
        "position": "FB"
      },
      {
        "team": "Steelers",
        "jersey_number": 78,
        "name": "Alejandro Villanueva",
        "position": "LT"
      },
      {
        "team": "Steelers",
        "jersey_number": 98,
        "name": "Vince Williams",
        "position": "MLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 75,
        "name": "Jordan Willis",
        "position": "RE"
      },
      {
        "team": "Colts",
        "jersey_number": 26,
        "name": "Clayton Geathers",
        "position": "FS"
      },
      {
        "team": "Colts",
        "jersey_number": 11,
        "name": "Ryan Grant",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 32,
        "name": "T.J. Green",
        "position": "SS"
      },
      {
        "team": "Colts",
        "jersey_number": 29,
        "name": "Malik Hooker",
        "position": "FS"
      },
      {
        "team": "Texans",
        "jersey_number": 25,
        "name": "Kareem Jackson",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 9,
        "name": "Shane Lechler",
        "position": "P"
      },
      {
        "team": "Texans",
        "jersey_number": 55,
        "name": "Benardrick McKinney",
        "position": "MLB"
      },
      {
        "team": "Colts",
        "jersey_number": 75,
        "name": "Jack Mewhort",
        "position": "RG"
      },
      {
        "team": "Texans",
        "jersey_number": 43,
        "name": "Corey Moore",
        "position": "FS"
      },
      {
        "team": "Browns",
        "jersey_number": 90,
        "name": "Emmanuel Ogbah",
        "position": "LE"
      },
      {
        "team": "Browns",
        "jersey_number": 22,
        "name": "Jabrill Peppers",
        "position": "SS"
      },
      {
        "team": "Colts",
        "jersey_number": 51,
        "name": "John Simon",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 51,
        "name": "Todd Davis",
        "position": "MLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 35,
        "name": "Cody Davis",
        "position": "FS"
      },
      {
        "team": "Broncos",
        "jersey_number": 96,
        "name": "Shelby Harris",
        "position": "LE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 4,
        "name": "Josh Lambo",
        "position": "K"
      },
      {
        "team": "Jaguars",
        "jersey_number": 78,
        "name": "Jermey Parnell",
        "position": "RT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 24,
        "name": "T.J. Yeldon",
        "position": "HB"
      },
      {
        "team": "Chargers",
        "jersey_number": 77,
        "name": "Forrest Lamp",
        "position": "RG"
      },
      {
        "team": "Chargers",
        "jersey_number": 52,
        "name": "Denzel Perryman",
        "position": "ROLB"
      },
      {
        "team": "Chargers",
        "jersey_number": 6,
        "name": "Caleb Sturgis",
        "position": "K"
      },
      {
        "team": "Giants",
        "jersey_number": 71,
        "name": "Will Hernandez",
        "position": "LG"
      },
      {
        "team": "Redskins",
        "jersey_number": 18,
        "name": "Josh Doctson",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 19,
        "name": "Kenny Golladay",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 29,
        "name": "Derrius Guice",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 61,
        "name": "Kerry Hyder Jr",
        "position": "LE"
      },
      {
        "team": "Packers",
        "jersey_number": 84,
        "name": "Lance Kendricks",
        "position": "TE"
      },
      {
        "team": "Redskins",
        "jersey_number": 76,
        "name": "Morgan Moses",
        "position": "RT"
      },
      {
        "team": "Packers",
        "jersey_number": 47,
        "name": "Jake Ryan",
        "position": "MLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 26,
        "name": "Orlando Scandrick",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 94,
        "name": "Preston Smith",
        "position": "ROLB"
      },
      {
        "team": "Packers",
        "jersey_number": 38,
        "name": "Tramon Williams",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 24,
        "name": "James Bradberry",
        "position": "CB"
      },
      {
        "team": "Vikings",
        "jersey_number": 2,
        "name": "Kai Forbath",
        "position": "K"
      },
      {
        "team": "Bears",
        "jersey_number": 91,
        "name": "Eddie Goldman",
        "position": "DT"
      },
      {
        "team": "Bears",
        "jersey_number": 44,
        "name": "Nick Kwiatkoski",
        "position": "MLB"
      },
      {
        "team": "Vikings",
        "jersey_number": 23,
        "name": "Terence Newman",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 5,
        "name": "Michael Palardy",
        "position": "P"
      },
      {
        "team": "Panthers",
        "jersey_number": 11,
        "name": "Torrey Smith",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 17,
        "name": "Kendall Wright",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 66,
        "name": "Ryan Jensen",
        "position": "C"
      },
      {
        "team": "Saints",
        "jersey_number": 52,
        "name": "Craig Robertson",
        "position": "ROLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 57,
        "name": "Noah Spence",
        "position": "RE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 68,
        "name": "Justin Britt",
        "position": "C"
      },
      {
        "team": "Seahawks",
        "jersey_number": 18,
        "name": "Jaron Brown",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 4,
        "name": "Phil Dawson",
        "position": "K"
      },
      {
        "team": "49ers",
        "jersey_number": 69,
        "name": "Mike McGlinchey",
        "position": "RT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 51,
        "name": "Barkevious Mingo",
        "position": "LOLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 3,
        "name": "Josh Rosen",
        "position": "QB"
      },
      {
        "team": "Rams",
        "jersey_number": 65,
        "name": "John Sullivan",
        "position": "C"
      },
      {
        "team": "49ers",
        "jersey_number": 94,
        "name": "Solomon Thomas",
        "position": "RE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 85,
        "name": "A.J. Derby",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 86,
        "name": "Mike Gesicki",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 36,
        "name": "Tony Lippett",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 78,
        "name": "Laremy Tunsil",
        "position": "LT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 15,
        "name": "Albert Wilson",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 73,
        "name": "Dion Dawkins",
        "position": "LT"
      },
      {
        "team": "Jets",
        "jersey_number": 4,
        "name": "Lac Edwards",
        "position": "P"
      },
      {
        "team": "Patriots",
        "jersey_number": 35,
        "name": "Mike Gillislee",
        "position": "HB"
      },
      {
        "team": "Bills",
        "jersey_number": 14,
        "name": "Jeremy Kerley",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 90,
        "name": "Shaq Lawson",
        "position": "LE"
      },
      {
        "team": "Patriots",
        "jersey_number": 80,
        "name": "Jordan Matthews",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 22,
        "name": "Sony Michel",
        "position": "HB"
      },
      {
        "team": "Patriots",
        "jersey_number": 44,
        "name": "Will Tye",
        "position": "TE"
      },
      {
        "team": "Patriots",
        "jersey_number": 78,
        "name": "Isaiah Wynn",
        "position": "LT"
      },
      {
        "team": "Steelers",
        "jersey_number": 94,
        "name": "Tyson Alualu",
        "position": "RE"
      },
      {
        "team": "Bengals",
        "jersey_number": 65,
        "name": "Clint Boling",
        "position": "LG"
      },
      {
        "team": "Bengals",
        "jersey_number": 14,
        "name": "Andy Dalton",
        "position": "QB"
      },
      {
        "team": "Steelers",
        "jersey_number": 81,
        "name": "Jesse James",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 95,
        "name": "Denico Autry",
        "position": "RE"
      },
      {
        "team": "Browns",
        "jersey_number": 87,
        "name": "Seth DeValve",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 12,
        "name": "Bruce Ellington",
        "position": "WR"
      },
      {
        "team": "Browns",
        "jersey_number": 88,
        "name": "Darren Fells",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 92,
        "name": "Margus Hunt",
        "position": "LE"
      },
      {
        "team": "Browns",
        "jersey_number": 58,
        "name": "Christian Kirksey",
        "position": "ROLB"
      },
      {
        "team": "Colts",
        "jersey_number": 25,
        "name": "Marlon Mack",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 65,
        "name": "Larry Ogunjobi",
        "position": "DT"
      },
      {
        "team": "Colts",
        "jersey_number": 2,
        "name": "Rigoberto Sanchez",
        "position": "P"
      },
      {
        "team": "Browns",
        "jersey_number": 64,
        "name": "J.C. Tretter",
        "position": "C"
      },
      {
        "team": "Jaguars",
        "jersey_number": 95,
        "name": "Abry Jones",
        "position": "DT"
      },
      {
        "team": "Broncos",
        "jersey_number": 54,
        "name": "Brandon Marshall",
        "position": "MLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 56,
        "name": "Shane Ray",
        "position": "ROLB"
      },
      {
        "team": "Titans",
        "jersey_number": 4,
        "name": "Ryan Succop",
        "position": "K"
      },
      {
        "team": "Chiefs",
        "jersey_number": 97,
        "name": "Allen Bailey",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 57,
        "name": "Jatavis Brown",
        "position": "ROLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 21,
        "name": "Gareon Conley",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 15,
        "name": "Patrick Mahomes II",
        "position": "QB"
      },
      {
        "team": "Chargers",
        "jersey_number": 92,
        "name": "Brandon Mebane",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 77,
        "name": "Kolton Miller",
        "position": "RT"
      },
      {
        "team": "Raiders",
        "jersey_number": 27,
        "name": "Reggie Nelson",
        "position": "FS"
      },
      {
        "team": "Chiefs",
        "jersey_number": 20,
        "name": "Steven Nelson",
        "position": "CB"
      },
      {
        "team": "Raiders",
        "jersey_number": 10,
        "name": "Seth Roberts",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 97,
        "name": "Taco Charlton",
        "position": "LE"
      },
      {
        "team": "Eagles",
        "jersey_number": 30,
        "name": "Corey Clement",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 85,
        "name": "Rhett Ellison",
        "position": "TE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 55,
        "name": "Leighton Vander Esch",
        "position": "LOLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 88,
        "name": "Dallas Goedert",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 22,
        "name": "Sidney Jones IV",
        "position": "CB"
      },
      {
        "team": "Giants",
        "jersey_number": 77,
        "name": "John Jerry",
        "position": "RG"
      },
      {
        "team": "Cowboys",
        "jersey_number": 25,
        "name": "Xavier Woods",
        "position": "FS"
      },
      {
        "team": "Packers",
        "jersey_number": 23,
        "name": "Jaire Alexander",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 2,
        "name": "Mason Crosby",
        "position": "K"
      },
      {
        "team": "Lions",
        "jersey_number": 40,
        "name": "Jarrad Davis",
        "position": "MLB"
      },
      {
        "team": "Lions",
        "jersey_number": 68,
        "name": "Taylor Decker",
        "position": "LT"
      },
      {
        "team": "Lions",
        "jersey_number": 28,
        "name": "Quandre Diggs",
        "position": "CB"
      },
      {
        "team": "Lions",
        "jersey_number": 42,
        "name": "Devon Kennard",
        "position": "ROLB"
      },
      {
        "team": "Packers",
        "jersey_number": 20,
        "name": "Kevin King",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 63,
        "name": "Corey Linsley",
        "position": "C"
      },
      {
        "team": "Redskins",
        "jersey_number": 95,
        "name": "Da'Ron Payne",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 91,
        "name": "A'Shawn Robinson",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 82,
        "name": "Luke Willson",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 7,
        "name": "Daniel Carlson",
        "position": "K"
      },
      {
        "team": "Panthers",
        "jersey_number": 12,
        "name": "D.J. Moore",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 71,
        "name": "Riley Reiff",
        "position": "LT"
      },
      {
        "team": "Bears",
        "jersey_number": 88,
        "name": "Dion Sims",
        "position": "TE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 7,
        "name": "Chandler Catanzaro",
        "position": "K"
      },
      {
        "team": "Saints",
        "jersey_number": 16,
        "name": "Brandon Coleman",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 28,
        "name": "Vernon Hargreaves III",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 27,
        "name": "Ronald Jones II",
        "position": "HB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 34,
        "name": "Charles Sims III",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 18,
        "name": "Calvin Ridley",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 51,
        "name": "Manti Te'o",
        "position": "MLB"
      },
      {
        "team": "Saints",
        "jersey_number": 67,
        "name": "Larry Warford",
        "position": "RG"
      },
      {
        "team": "Rams",
        "jersey_number": 26,
        "name": "Mark Barron",
        "position": "MLB"
      },
      {
        "team": "49ers",
        "jersey_number": 27,
        "name": "Adrian Colbert",
        "position": "FS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 84,
        "name": "Ed Dickson",
        "position": "TE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 4,
        "name": "Michael Dickson",
        "position": "P"
      },
      {
        "team": "Rams",
        "jersey_number": 81,
        "name": "Gerald Everett",
        "position": "TE"
      },
      {
        "team": "Rams",
        "jersey_number": 89,
        "name": "Tyler Higbee",
        "position": "TE"
      },
      {
        "team": "49ers",
        "jersey_number": 85,
        "name": "George Kittle",
        "position": "TE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 21,
        "name": "J.D. McKissic",
        "position": "HB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 14,
        "name": "J.J. Nelson",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 20,
        "name": "Jimmie Ward",
        "position": "FS"
      },
      {
        "team": "Dolphins",
        "jersey_number": 21,
        "name": "Frank Gore",
        "position": "HB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 22,
        "name": "T.J. McDonald Jr",
        "position": "FS"
      },
      {
        "team": "Jets",
        "jersey_number": 23,
        "name": "Terrence Brooks",
        "position": "SS"
      },
      {
        "team": "Patriots",
        "jersey_number": 46,
        "name": "James Develin",
        "position": "FB"
      },
      {
        "team": "Patriots",
        "jersey_number": 33,
        "name": "Jeremy Hill",
        "position": "HB"
      },
      {
        "team": "Patriots",
        "jersey_number": 31,
        "name": "Jonathan Jones",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 98,
        "name": "Star Lotulelei",
        "position": "DT"
      },
      {
        "team": "Bills",
        "jersey_number": 58,
        "name": "Matt Milano",
        "position": "ROLB"
      },
      {
        "team": "Patriots",
        "jersey_number": 53,
        "name": "Kyle Van Noy",
        "position": "ROLB"
      },
      {
        "team": "Patriots",
        "jersey_number": 84,
        "name": "Cordarrelle Patterson",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 27,
        "name": "Darryl Roberts",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 92,
        "name": "Chris Baker",
        "position": "DT"
      },
      {
        "team": "Ravens",
        "jersey_number": 78,
        "name": "Orlando Brown",
        "position": "LT"
      },
      {
        "team": "Bengals",
        "jersey_number": 4,
        "name": "Randy Bullock",
        "position": "K"
      },
      {
        "team": "Ravens",
        "jersey_number": 83,
        "name": "Willie Snead IV",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 15,
        "name": "John Ross",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 7,
        "name": "Jacoby Brissett",
        "position": "QB"
      },
      {
        "team": "Browns",
        "jersey_number": 31,
        "name": "Nick Chubb",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 51,
        "name": "Jamie Collins Sr",
        "position": "LOLB"
      },
      {
        "team": "Colts",
        "jersey_number": 78,
        "name": "Ryan Kelly",
        "position": "C"
      },
      {
        "team": "Browns",
        "jersey_number": 53,
        "name": "Joe Schobert",
        "position": "MLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 23,
        "name": "Devontae Booker",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 90,
        "name": "Taven Bryan",
        "position": "DT"
      },
      {
        "team": "Broncos",
        "jersey_number": 21,
        "name": "Su'a Cravens",
        "position": "SS"
      },
      {
        "team": "Titans",
        "jersey_number": 54,
        "name": "Rashaan Evans",
        "position": "MLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 30,
        "name": "Corey Grant",
        "position": "HB"
      },
      {
        "team": "Broncos",
        "jersey_number": 98,
        "name": "Clinton McDonald",
        "position": "RE"
      },
      {
        "team": "Titans",
        "jersey_number": 91,
        "name": "Derrick Morgan",
        "position": "LOLB"
      },
      {
        "team": "Titans",
        "jersey_number": 13,
        "name": "Taywan Taylor",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 17,
        "name": "Chris Conley",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 72,
        "name": "Eric Fisher",
        "position": "LT"
      },
      {
        "team": "Chargers",
        "jersey_number": 88,
        "name": "Virgil Green",
        "position": "TE"
      },
      {
        "team": "Raiders",
        "jersey_number": 73,
        "name": "Maurice Hurst",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 28,
        "name": "Doug Martin",
        "position": "HB"
      },
      {
        "team": "Raiders",
        "jersey_number": 30,
        "name": "Jalen Richard",
        "position": "HB"
      },
      {
        "team": "Raiders",
        "jersey_number": 98,
        "name": "Frostee Rucker",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 2,
        "name": "Giorgio Tavecchio",
        "position": "K"
      },
      {
        "team": "Chargers",
        "jersey_number": 27,
        "name": "Jaylen Watkins",
        "position": "SS"
      },
      {
        "team": "Cowboys",
        "jersey_number": 96,
        "name": "Maliek Collins",
        "position": "DT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 94,
        "name": "Randy Gregory",
        "position": "RE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 38,
        "name": "Jeff Heath",
        "position": "SS"
      },
      {
        "team": "Giants",
        "jersey_number": 10,
        "name": "Eli Manning",
        "position": "QB"
      },
      {
        "team": "Eagles",
        "jersey_number": 82,
        "name": "Richard Rodgers",
        "position": "TE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 99,
        "name": "Charles Tapper",
        "position": "LE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 52,
        "name": "Connor Williams",
        "position": "LG"
      },
      {
        "team": "Redskins",
        "jersey_number": 3,
        "name": "Dustin Hopkins",
        "position": "K"
      },
      {
        "team": "Lions",
        "jersey_number": 13,
        "name": "T.J. Jones",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 35,
        "name": "Montae Nicholson",
        "position": "FS"
      },
      {
        "team": "Redskins",
        "jersey_number": 32,
        "name": "Samaje Perine",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 77,
        "name": "Frank Ragnow",
        "position": "C"
      },
      {
        "team": "Lions",
        "jersey_number": 90,
        "name": "Cornelius Washington",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 38,
        "name": "Kenjon Barner",
        "position": "HB"
      },
      {
        "team": "Panthers",
        "jersey_number": 47,
        "name": "Ross Cockrell",
        "position": "CB"
      },
      {
        "team": "Vikings",
        "jersey_number": 42,
        "name": "Ben Gedeon",
        "position": "LOLB"
      },
      {
        "team": "Panthers",
        "jersey_number": 67,
        "name": "Ryan Kalil",
        "position": "C"
      },
      {
        "team": "Bears",
        "jersey_number": 99,
        "name": "Aaron Lynch",
        "position": "LOLB"
      },
      {
        "team": "Bears",
        "jersey_number": 16,
        "name": "Pat O'Donnell",
        "position": "P"
      },
      {
        "team": "Bears",
        "jersey_number": 1,
        "name": "Cody Parkey",
        "position": "K"
      },
      {
        "team": "Vikings",
        "jersey_number": 74,
        "name": "Mike Remmers",
        "position": "RT"
      },
      {
        "team": "Panthers",
        "jersey_number": 27,
        "name": "Kevon Seymour",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 87,
        "name": "Adam Shaheen",
        "position": "TE"
      },
      {
        "team": "Panthers",
        "jersey_number": 13,
        "name": "Jarius Wright",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 91,
        "name": "Trey Hendrickson",
        "position": "LE"
      },
      {
        "team": "Saints",
        "jersey_number": 26,
        "name": "P.J. Williams",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 35,
        "name": "Maurice Alexander",
        "position": "SS"
      },
      {
        "team": "49ers",
        "jersey_number": 22,
        "name": "Matt Breida",
        "position": "HB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 20,
        "name": "Deone Bucannon",
        "position": "ROLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 18,
        "name": "Brice Butler",
        "position": "WR"
      },
      {
        "team": "Seahawks",
        "jersey_number": 28,
        "name": "Justin Coleman",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 44,
        "name": "Markus Golden",
        "position": "LE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 74,
        "name": "D.J. Humphries",
        "position": "LT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 76,
        "name": "Mike Iupati",
        "position": "LG"
      },
      {
        "team": "Seahawks",
        "jersey_number": 41,
        "name": "Byron Maxwell",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 30,
        "name": "Bradley McDougald",
        "position": "FS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 2,
        "name": "Jason Myers",
        "position": "K"
      },
      {
        "team": "Seahawks",
        "jersey_number": 20,
        "name": "Rashaad Penny",
        "position": "HB"
      },
      {
        "team": "49ers",
        "jersey_number": 18,
        "name": "Dante Pettis",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 51,
        "name": "Malcolm Smith",
        "position": "ROLB"
      },
      {
        "team": "49ers",
        "jersey_number": 81,
        "name": "Trent Taylor",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 59,
        "name": "Korey Toomer",
        "position": "MLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 50,
        "name": "Andre Branch",
        "position": "RE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 89,
        "name": "Gavin Escobar",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 25,
        "name": "Xavien Howard",
        "position": "CB"
      },
      {
        "team": "Jets",
        "jersey_number": 47,
        "name": "David Bass",
        "position": "LOLB"
      },
      {
        "team": "Jets",
        "jersey_number": 14,
        "name": "Sam Darnold",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 13,
        "name": "Phillip Dorsett",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 49,
        "name": "Tremaine Edmunds",
        "position": "MLB"
      },
      {
        "team": "Bills",
        "jersey_number": 18,
        "name": "Andre Holmes",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 11,
        "name": "Zay Jones",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 19,
        "name": "Malcolm Mitchell",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 1,
        "name": "Terrelle Pryor Sr",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 89,
        "name": "Mark Andrews",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 86,
        "name": "Nick Boyle",
        "position": "TE"
      },
      {
        "team": "Bengals",
        "jersey_number": 52,
        "name": "Preston Brown",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 94,
        "name": "Carl Davis",
        "position": "RE"
      },
      {
        "team": "Bengals",
        "jersey_number": 53,
        "name": "Billy Price",
        "position": "C"
      },
      {
        "team": "Colts",
        "jersey_number": 58,
        "name": "Tarell Basham",
        "position": "RE"
      },
      {
        "team": "Texans",
        "jersey_number": 51,
        "name": "Dylan Cole",
        "position": "MLB"
      },
      {
        "team": "Texans",
        "jersey_number": 95,
        "name": "Christian Covington",
        "position": "RE"
      },
      {
        "team": "Texans",
        "jersey_number": 27,
        "name": "D'Onta Foreman",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 2,
        "name": "Zane Gonzalez",
        "position": "K"
      },
      {
        "team": "Texans",
        "jersey_number": 84,
        "name": "Ryan Griffin",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 94,
        "name": "Tyquan Lewis",
        "position": "RE"
      },
      {
        "team": "Browns",
        "jersey_number": 39,
        "name": "Terrance Mitchell",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 38,
        "name": "Justin Reid",
        "position": "SS"
      },
      {
        "team": "Colts",
        "jersey_number": 72,
        "name": "Braden Smith",
        "position": "RG"
      },
      {
        "team": "Broncos",
        "jersey_number": 99,
        "name": "Adam Gotsis",
        "position": "RE"
      },
      {
        "team": "Titans",
        "jersey_number": 58,
        "name": "Harold Landry",
        "position": "ROLB"
      },
      {
        "team": "Titans",
        "jersey_number": 19,
        "name": "Tajae Sharpe",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 67,
        "name": "Quinton Spain",
        "position": "LG"
      },
      {
        "team": "Broncos",
        "jersey_number": 14,
        "name": "Courtland Sutton",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 8,
        "name": "Drew Kaser",
        "position": "P"
      },
      {
        "team": "Raiders",
        "jersey_number": 20,
        "name": "Obi Melifonwu",
        "position": "SS"
      },
      {
        "team": "Chargers",
        "jersey_number": 53,
        "name": "Mike Pouncey",
        "position": "C"
      },
      {
        "team": "Chiefs",
        "jersey_number": 11,
        "name": "Demarcus Robinson",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 93,
        "name": "Ahtyba Rubin",
        "position": "DT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 42,
        "name": "Anthony Sherman",
        "position": "FB"
      },
      {
        "team": "Raiders",
        "jersey_number": 5,
        "name": "Johnny Townsend",
        "position": "P"
      },
      {
        "team": "Cowboys",
        "jersey_number": 30,
        "name": "Anthony Brown",
        "position": "CB"
      },
      {
        "team": "Giants",
        "jersey_number": 15,
        "name": "Riley Dixon",
        "position": "P"
      },
      {
        "team": "Eagles",
        "jersey_number": 32,
        "name": "Rasul Douglas",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 34,
        "name": "Donnel Pumphrey Jr",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 2,
        "name": "Aldrick Rosas",
        "position": "K"
      },
      {
        "team": "Cowboys",
        "jersey_number": 54,
        "name": "Jaylon Smith",
        "position": "MLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 15,
        "name": "Deonte Thompson",
        "position": "WR"
      },
      {
        "team": "Packers",
        "jersey_number": 37,
        "name": "Josh Jackson",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 33,
        "name": "Aaron Jones",
        "position": "HB"
      },
      {
        "team": "Redskins",
        "jersey_number": 20,
        "name": "Robert Kelley",
        "position": "HB"
      },
      {
        "team": "Packers",
        "jersey_number": 94,
        "name": "Dean Lowry",
        "position": "LE"
      },
      {
        "team": "Packers",
        "jersey_number": 6,
        "name": "JK Scott",
        "position": "P"
      },
      {
        "team": "Packers",
        "jersey_number": 30,
        "name": "Jamaal Williams",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 92,
        "name": "Sylvester Williams",
        "position": "DT"
      },
      {
        "team": "Vikings",
        "jersey_number": 65,
        "name": "Pat Elflein",
        "position": "C"
      },
      {
        "team": "Vikings",
        "jersey_number": 21,
        "name": "Mike Hughes",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 22,
        "name": "Cre'Von LeBlanc",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 91,
        "name": "Beau Allen",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 51,
        "name": "Kendell Beckwith",
        "position": "LOLB"
      },
      {
        "team": "Saints",
        "jersey_number": 92,
        "name": "Marcus Davenport",
        "position": "LE"
      },
      {
        "team": "Falcons",
        "jersey_number": 65,
        "name": "Brandon Fusco",
        "position": "RG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 92,
        "name": "William Gholston",
        "position": "LE"
      },
      {
        "team": "Falcons",
        "jersey_number": 99,
        "name": "Terrell McClain",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 28,
        "name": "Terrance West",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 32,
        "name": "Chris Carson",
        "position": "HB"
      },
      {
        "team": "49ers",
        "jersey_number": 88,
        "name": "Garrett Celek",
        "position": "TE"
      },
      {
        "team": "Rams",
        "jersey_number": 91,
        "name": "Dominique Easley",
        "position": "RE"
      },
      {
        "team": "Rams",
        "jersey_number": 50,
        "name": "Samson Ebukam",
        "position": "LOLB"
      },
      {
        "team": "Rams",
        "jersey_number": 97,
        "name": "Morgan Fox",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 92,
        "name": "Nazair Jones",
        "position": "DT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 86,
        "name": "Ricky Seals-Jones",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 91,
        "name": "Benson Mayowa",
        "position": "RE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 43,
        "name": "Haason Reddick",
        "position": "LOLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 9,
        "name": "Jon Ryan",
        "position": "P"
      },
      {
        "team": "49ers",
        "jersey_number": 23,
        "name": "Ahkello Witherspoon",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 56,
        "name": "Davon Godchaux",
        "position": "DT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 97,
        "name": "Jordan Phillips",
        "position": "DT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 93,
        "name": "Akeem Spence",
        "position": "DT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 30,
        "name": "Cordrea Tankersley",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 17,
        "name": "Josh Allen",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 5,
        "name": "Corey Bojorquez",
        "position": "P"
      },
      {
        "team": "Bills",
        "jersey_number": 39,
        "name": "Travaris Cadet",
        "position": "HB"
      },
      {
        "team": "Bills",
        "jersey_number": 62,
        "name": "Vladimir Ducasse",
        "position": "RG"
      },
      {
        "team": "Patriots",
        "jersey_number": 59,
        "name": "Marquis Flowers",
        "position": "ROLB"
      },
      {
        "team": "Jets",
        "jersey_number": 55,
        "name": "Lorenzo Mauldin IV",
        "position": "ROLB"
      },
      {
        "team": "Bills",
        "jersey_number": 26,
        "name": "Taiwan Jones",
        "position": "HB"
      },
      {
        "team": "Patriots",
        "jersey_number": 91,
        "name": "Deatrich Wise Jr",
        "position": "RE"
      },
      {
        "team": "Jets",
        "jersey_number": 61,
        "name": "Spencer Long",
        "position": "C"
      },
      {
        "team": "Patriots",
        "jersey_number": 25,
        "name": "Eric Rowe",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 6,
        "name": "Colton Schmidt",
        "position": "P"
      },
      {
        "team": "Jets",
        "jersey_number": 18,
        "name": "ArDarius Stewart",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 37,
        "name": "Javorius Allen",
        "position": "HB"
      },
      {
        "team": "Bengals",
        "jersey_number": 30,
        "name": "Jessie Bates III",
        "position": "FS"
      },
      {
        "team": "Bengals",
        "jersey_number": 83,
        "name": "Tyler Boyd",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 30,
        "name": "Kenneth Dixon",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 34,
        "name": "Terrell Edmunds",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 48,
        "name": "Patrick Onwuasor",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 11,
        "name": "Breshad Perriman",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 90,
        "name": "Za'Darius Smith",
        "position": "ROLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 87,
        "name": "C.J. Uzomah",
        "position": "TE"
      },
      {
        "team": "Steelers",
        "jersey_number": 13,
        "name": "James Washington",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 87,
        "name": "Maxx Williams",
        "position": "TE"
      },
      {
        "team": "Browns",
        "jersey_number": 4,
        "name": "Britton Colquitt",
        "position": "P"
      },
      {
        "team": "Browns",
        "jersey_number": 63,
        "name": "Austin Corbett",
        "position": "RG"
      },
      {
        "team": "Colts",
        "jersey_number": 42,
        "name": "Nyheim Hines",
        "position": "HB"
      },
      {
        "team": "Colts",
        "jersey_number": 79,
        "name": "Austin Howard",
        "position": "RT"
      },
      {
        "team": "Texans",
        "jersey_number": 30,
        "name": "Kevin Johnson",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 94,
        "name": "Carl Nassib",
        "position": "LE"
      },
      {
        "team": "Colts",
        "jersey_number": 80,
        "name": "Chester Rogers",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 68,
        "name": "Matt Slauson",
        "position": "LG"
      },
      {
        "team": "Broncos",
        "jersey_number": 80,
        "name": "Jake Butt",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 9,
        "name": "Logan Cooke",
        "position": "P"
      },
      {
        "team": "Jaguars",
        "jersey_number": 25,
        "name": "D.J. Hayden",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 82,
        "name": "Jeff Heuerman",
        "position": "TE"
      },
      {
        "team": "Titans",
        "jersey_number": 94,
        "name": "Austin Johnson",
        "position": "LE"
      },
      {
        "team": "Titans",
        "jersey_number": 28,
        "name": "Kendrick Lewis",
        "position": "FS"
      },
      {
        "team": "Broncos",
        "jersey_number": 34,
        "name": "Will Parks",
        "position": "FS"
      },
      {
        "team": "Titans",
        "jersey_number": 36,
        "name": "LeShaun Sims",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 81,
        "name": "Jonnu Smith",
        "position": "TE"
      },
      {
        "team": "Broncos",
        "jersey_number": 66,
        "name": "Jared Veldheer",
        "position": "RT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 89,
        "name": "Jace Amaro",
        "position": "TE"
      },
      {
        "team": "Chargers",
        "jersey_number": 66,
        "name": "Dan Feeney",
        "position": "LG"
      },
      {
        "team": "Chiefs",
        "jersey_number": 55,
        "name": "Dee Ford",
        "position": "ROLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 23,
        "name": "Dexter McDonald",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 99,
        "name": "T.Y. McGill",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 31,
        "name": "Adrian Phillips",
        "position": "FS"
      },
      {
        "team": "Raiders",
        "jersey_number": 15,
        "name": "Ryan Switzer",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 2,
        "name": "Shane Tripucka",
        "position": "P"
      },
      {
        "team": "Raiders",
        "jersey_number": 33,
        "name": "DeAndre Washington",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 98,
        "name": "Xavier Williams",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 35,
        "name": "Shareece Wright",
        "position": "CB"
      },
      {
        "team": "Giants",
        "jersey_number": 24,
        "name": "Eli Apple",
        "position": "CB"
      },
      {
        "team": "Giants",
        "jersey_number": 22,
        "name": "Wayne Gallman Jr",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 52,
        "name": "Alec Ogletree",
        "position": "MLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 54,
        "name": "Mason Foster",
        "position": "MLB"
      },
      {
        "team": "Packers",
        "jersey_number": 31,
        "name": "Davon House",
        "position": "CB"
      },
      {
        "team": "Lions",
        "jersey_number": 57,
        "name": "Cam Johnson",
        "position": "LOLB"
      },
      {
        "team": "Lions",
        "jersey_number": 52,
        "name": "Christian Jones",
        "position": "LOLB"
      },
      {
        "team": "Packers",
        "jersey_number": 27,
        "name": "Josh Jones",
        "position": "SS"
      },
      {
        "team": "Lions",
        "jersey_number": 24,
        "name": "Nevin Lawson",
        "position": "CB"
      },
      {
        "team": "Lions",
        "jersey_number": 26,
        "name": "DeShawn Shead",
        "position": "CB"
      },
      {
        "team": "Lions",
        "jersey_number": 31,
        "name": "Teez Tabor",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 90,
        "name": "Jonathan Bullard",
        "position": "RE"
      },
      {
        "team": "Panthers",
        "jersey_number": 92,
        "name": "Vernon Butler Jr",
        "position": "DT"
      },
      {
        "team": "Bears",
        "jersey_number": 68,
        "name": "James Daniels",
        "position": "C"
      },
      {
        "team": "Vikings",
        "jersey_number": 41,
        "name": "Anthony Harris",
        "position": "FS"
      },
      {
        "team": "Panthers",
        "jersey_number": 26,
        "name": "Donte Jackson",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 17,
        "name": "Anthony Miller",
        "position": "WR"
      },
      {
        "team": "Panthers",
        "jersey_number": 41,
        "name": "Captain Munnerlyn",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 10,
        "name": "Curtis Samuel",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 10,
        "name": "Mitchell Trubisky",
        "position": "QB"
      },
      {
        "team": "Saints",
        "jersey_number": 47,
        "name": "Alex Anzalone",
        "position": "ROLB"
      },
      {
        "team": "Saints",
        "jersey_number": 48,
        "name": "Vonn Bell",
        "position": "SS"
      },
      {
        "team": "Falcons",
        "jersey_number": 28,
        "name": "Justin Bethel",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 29,
        "name": "Kurt Coleman",
        "position": "SS"
      },
      {
        "team": "Falcons",
        "jersey_number": 14,
        "name": "Justin Hardy",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 90,
        "name": "Derrick Shelby",
        "position": "LE"
      },
      {
        "team": "49ers",
        "jersey_number": 98,
        "name": "Ronald Blair III",
        "position": "RE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 90,
        "name": "Robert Nkemdiche",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 19,
        "name": "Aldrick Robinson",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 53,
        "name": "A.Q. Shipley",
        "position": "C"
      },
      {
        "team": "49ers",
        "jersey_number": 24,
        "name": "K'Waun Williams",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 47,
        "name": "Kiko Alonso",
        "position": "ROLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 19,
        "name": "Jakeem Grant",
        "position": "WR"
      },
      {
        "team": "Dolphins",
        "jersey_number": 67,
        "name": "Daniel Kilgore",
        "position": "C"
      },
      {
        "team": "Dolphins",
        "jersey_number": 52,
        "name": "Raekwon McMillan",
        "position": "MLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 7,
        "name": "Jason Sanders",
        "position": "K"
      },
      {
        "team": "Bills",
        "jersey_number": 66,
        "name": "Russell Bodine",
        "position": "C"
      },
      {
        "team": "Patriots",
        "jersey_number": 88,
        "name": "Kenny Britt",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 70,
        "name": "Adam Butler",
        "position": "DT"
      },
      {
        "team": "Jets",
        "jersey_number": 58,
        "name": "Darron Lee",
        "position": "MLB"
      },
      {
        "team": "Jets",
        "jersey_number": 95,
        "name": "Josh Martin",
        "position": "ROLB"
      },
      {
        "team": "Bills",
        "jersey_number": 76,
        "name": "John Miller",
        "position": "LG"
      },
      {
        "team": "Jets",
        "jersey_number": 53,
        "name": "Kevin Minter",
        "position": "MLB"
      },
      {
        "team": "Bills",
        "jersey_number": 84,
        "name": "Nick O'Leary",
        "position": "TE"
      },
      {
        "team": "Jets",
        "jersey_number": 30,
        "name": "Thomas Rawls",
        "position": "HB"
      },
      {
        "team": "Patriots",
        "jersey_number": 52,
        "name": "Elandon Roberts",
        "position": "MLB"
      },
      {
        "team": "Jets",
        "jersey_number": 91,
        "name": "Courtney Upshaw",
        "position": "LE"
      },
      {
        "team": "Jets",
        "jersey_number": 87,
        "name": "Clive Walford",
        "position": "TE"
      },
      {
        "team": "Steelers",
        "jersey_number": 51,
        "name": "Jon Bostic",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 26,
        "name": "Maurice Canady",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 30,
        "name": "James Conner",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 21,
        "name": "Sean Davis",
        "position": "FS"
      },
      {
        "team": "Steelers",
        "jersey_number": 85,
        "name": "Xavier Grimble",
        "position": "TE"
      },
      {
        "team": "Bengals",
        "jersey_number": 10,
        "name": "Kevin Huber",
        "position": "P"
      },
      {
        "team": "Ravens",
        "jersey_number": 74,
        "name": "James Hurst",
        "position": "LG"
      },
      {
        "team": "Ravens",
        "jersey_number": 50,
        "name": "Albert McClellan",
        "position": "LOLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 65,
        "name": "Nico Siragusa",
        "position": "LG"
      },
      {
        "team": "Ravens",
        "jersey_number": 56,
        "name": "Tim Williams",
        "position": "ROLB"
      },
      {
        "team": "Colts",
        "jersey_number": 35,
        "name": "Pierre Desir",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 7,
        "name": "Ka'imi Fairbairn",
        "position": "K"
      },
      {
        "team": "Browns",
        "jersey_number": 98,
        "name": "Jamie Meder",
        "position": "DT"
      },
      {
        "team": "Texans",
        "jersey_number": 13,
        "name": "Braxton Miller",
        "position": "WR"
      },
      {
        "team": "Browns",
        "jersey_number": 50,
        "name": "Chris Smith",
        "position": "RE"
      },
      {
        "team": "Browns",
        "jersey_number": 8,
        "name": "Justin Vogel",
        "position": "P"
      },
      {
        "team": "Titans",
        "jersey_number": 93,
        "name": "Kevin Dodd",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 37,
        "name": "Royce Freeman",
        "position": "HB"
      },
      {
        "team": "Broncos",
        "jersey_number": 11,
        "name": "Carlos Henderson",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 83,
        "name": "Ben Koyack",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 81,
        "name": "Niles Paul",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 74,
        "name": "Cam Robinson",
        "position": "LT"
      },
      {
        "team": "Titans",
        "jersey_number": 88,
        "name": "Luke Stocker",
        "position": "TE"
      },
      {
        "team": "Chargers",
        "jersey_number": 4,
        "name": "Roberto Aguayo",
        "position": "K"
      },
      {
        "team": "Raiders",
        "jersey_number": 92,
        "name": "P.J. Hall",
        "position": "DT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 84,
        "name": "Demetrius Harris",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 54,
        "name": "Tyrone Holmes",
        "position": "LE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 94,
        "name": "Jarvis Jenkins",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 29,
        "name": "Craig Mager",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 61,
        "name": "Mitch Morse",
        "position": "C"
      },
      {
        "team": "Chargers",
        "jersey_number": 58,
        "name": "Uchenna Nwosu",
        "position": "LOLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 49,
        "name": "Daniel Sorensen",
        "position": "SS"
      },
      {
        "team": "Chiefs",
        "jersey_number": 57,
        "name": "Breeland Speaks",
        "position": "ROLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 94,
        "name": "Eddie Vanderdoes",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 36,
        "name": "Daryl Worley",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 13,
        "name": "Michael Gallup",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 25,
        "name": "William Gay",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 87,
        "name": "Geoff Swaim",
        "position": "TE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 57,
        "name": "Damien Wilson",
        "position": "LOLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 81,
        "name": "Marquess Wilson",
        "position": "WR"
      },
      {
        "team": "Packers",
        "jersey_number": 51,
        "name": "Kyler Fackrell",
        "position": "ROLB"
      },
      {
        "team": "Lions",
        "jersey_number": 33,
        "name": "Kerryon Johnson",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 35,
        "name": "Miles Killebrew",
        "position": "SS"
      },
      {
        "team": "Redskins",
        "jersey_number": 92,
        "name": "Stacy McGee",
        "position": "LE"
      },
      {
        "team": "Redskins",
        "jersey_number": 31,
        "name": "Fabian Moreau",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 83,
        "name": "Brian Quick",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 80,
        "name": "Michael Roberts",
        "position": "TE"
      },
      {
        "team": "Packers",
        "jersey_number": 24,
        "name": "Quinten Rollins",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 65,
        "name": "Lane Taylor",
        "position": "LG"
      },
      {
        "team": "Lions",
        "jersey_number": 87,
        "name": "Levine Toilolo",
        "position": "TE"
      },
      {
        "team": "Bears",
        "jersey_number": 93,
        "name": "Sam Acho",
        "position": "ROLB"
      },
      {
        "team": "Vikings",
        "jersey_number": 20,
        "name": "Mackensie Alexander",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 15,
        "name": "Josh Bellamy",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 31,
        "name": "Marcus Cooper Sr",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 96,
        "name": "Wes Horton",
        "position": "RE"
      },
      {
        "team": "Vikings",
        "jersey_number": 89,
        "name": "David Morgan II",
        "position": "TE"
      },
      {
        "team": "Panthers",
        "jersey_number": 93,
        "name": "Kyle Love",
        "position": "DT"
      },
      {
        "team": "Vikings",
        "jersey_number": 96,
        "name": "Brian Robison",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 21,
        "name": "Da'Norris Searcy",
        "position": "SS"
      },
      {
        "team": "Vikings",
        "jersey_number": 11,
        "name": "Laquon Treadwell",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 11,
        "name": "Kevin White",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 99,
        "name": "Jay Bromley",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 23,
        "name": "Chris Conte",
        "position": "FS"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 14,
        "name": "Ryan Fitzpatrick",
        "position": "QB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 36,
        "name": "M.J. Stewart Jr",
        "position": "CB"
      },
      {
        "team": "Falcons",
        "jersey_number": 27,
        "name": "Damontae Kazee",
        "position": "FS"
      },
      {
        "team": "Saints",
        "jersey_number": 42,
        "name": "Zach Line",
        "position": "FB"
      },
      {
        "team": "Falcons",
        "jersey_number": 20,
        "name": "Isaiah Oliver",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 29,
        "name": "Ryan Smith",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 62,
        "name": "Evan Smith",
        "position": "LG"
      },
      {
        "team": "49ers",
        "jersey_number": 92,
        "name": "Jeremiah Attaochu",
        "position": "ROLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 57,
        "name": "Josh Bynes",
        "position": "MLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 27,
        "name": "Mike Davis",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 39,
        "name": "Dontae Johnson",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 13,
        "name": "Christian Kirk",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 2,
        "name": "Jeff Locke",
        "position": "P"
      },
      {
        "team": "49ers",
        "jersey_number": 90,
        "name": "Earl Mitchell",
        "position": "DT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 72,
        "name": "Olsen Pierre",
        "position": "DT"
      },
      {
        "team": "Rams",
        "jersey_number": 83,
        "name": "Josh Reynolds",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 71,
        "name": "Andre Smith",
        "position": "RT"
      },
      {
        "team": "Rams",
        "jersey_number": 95,
        "name": "Ethan Westbrooks",
        "position": "LE"
      },
      {
        "team": "Rams",
        "jersey_number": 52,
        "name": "Ramik Wilson",
        "position": "MLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 44,
        "name": "Stephone Anthony",
        "position": "LOLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 8,
        "name": "Brock Osweiler",
        "position": "QB"
      },
      {
        "team": "Bills",
        "jersey_number": 20,
        "name": "Rafael Bush",
        "position": "FS"
      },
      {
        "team": "Patriots",
        "jersey_number": 26,
        "name": "Duke Dawson Jr",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 28,
        "name": "Phillip Gaines",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 47,
        "name": "Jacob Hollister",
        "position": "TE"
      },
      {
        "team": "Jets",
        "jersey_number": 56,
        "name": "Kevin Pierre-Louis",
        "position": "LOLB"
      },
      {
        "team": "Jets",
        "jersey_number": 35,
        "name": "Elijah McGuire",
        "position": "HB"
      },
      {
        "team": "Bills",
        "jersey_number": 79,
        "name": "Jordan Mills",
        "position": "RT"
      },
      {
        "team": "Patriots",
        "jersey_number": 86,
        "name": "Troy Niklas",
        "position": "TE"
      },
      {
        "team": "Bills",
        "jersey_number": 91,
        "name": "Tenny Palepoi",
        "position": "DT"
      },
      {
        "team": "Patriots",
        "jersey_number": 95,
        "name": "Derek Rivers",
        "position": "ROLB"
      },
      {
        "team": "Jets",
        "jersey_number": 93,
        "name": "Deon Simon",
        "position": "DT"
      },
      {
        "team": "Bills",
        "jersey_number": 54,
        "name": "Eddie Yarbrough",
        "position": "LE"
      },
      {
        "team": "Ravens",
        "jersey_number": 54,
        "name": "Tyus Bowser",
        "position": "LOLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 48,
        "name": "Bud Dupree",
        "position": "LOLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 98,
        "name": "Ryan Glasgow",
        "position": "DT"
      },
      {
        "team": "Steelers",
        "jersey_number": 11,
        "name": "Justin Hunter",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 32,
        "name": "Mark Walton Jr",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 2,
        "name": "Mason Rudolph",
        "position": "QB"
      },
      {
        "team": "Steelers",
        "jersey_number": 24,
        "name": "Coty Sensabaugh",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 96,
        "name": "Brent Urban",
        "position": "RE"
      },
      {
        "team": "Texans",
        "jersey_number": 20,
        "name": "Johnson Bademosi",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 39,
        "name": "Ibraheim Campbell",
        "position": "FS"
      },
      {
        "team": "Browns",
        "jersey_number": 93,
        "name": "Trevon Coley",
        "position": "DT"
      },
      {
        "team": "Texans",
        "jersey_number": 16,
        "name": "Keke Coutee",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 27,
        "name": "Nate Hairston",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 93,
        "name": "Joel Heath",
        "position": "RE"
      },
      {
        "team": "Texans",
        "jersey_number": 64,
        "name": "Senio Kelemete",
        "position": "RG"
      },
      {
        "team": "Colts",
        "jersey_number": 53,
        "name": "Darius Leonard",
        "position": "MLB"
      },
      {
        "team": "Colts",
        "jersey_number": 76,
        "name": "Chris McCain",
        "position": "RE"
      },
      {
        "team": "Colts",
        "jersey_number": 91,
        "name": "Hassan Ridgeway",
        "position": "DT"
      },
      {
        "team": "Colts",
        "jersey_number": 57,
        "name": "Kemoko Turay",
        "position": "ROLB"
      },
      {
        "team": "Texans",
        "jersey_number": 91,
        "name": "Carlos Watkins",
        "position": "LE"
      },
      {
        "team": "Colts",
        "jersey_number": 31,
        "name": "Quincy Wilson",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 22,
        "name": "Tramaine Brock Sr",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 17,
        "name": "D.J. Chark",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 51,
        "name": "Will Compton",
        "position": "MLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 80,
        "name": "James O'Shaughnessy",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 94,
        "name": "Dawuane Smoot",
        "position": "LE"
      },
      {
        "team": "Broncos",
        "jersey_number": 57,
        "name": "DeMarcus Walker",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 72,
        "name": "Joe Barksdale",
        "position": "RT"
      },
      {
        "team": "Chargers",
        "jersey_number": 51,
        "name": "Kyle Emanuel",
        "position": "LOLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 91,
        "name": "Derrick Nnadi",
        "position": "DT"
      },
      {
        "team": "Chargers",
        "jersey_number": 93,
        "name": "Darius Philon",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 59,
        "name": "Lorenzo Carter",
        "position": "ROLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 71,
        "name": "La'el Collins",
        "position": "RT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 35,
        "name": "Kavon Frazier",
        "position": "SS"
      },
      {
        "team": "Giants",
        "jersey_number": 93,
        "name": "B.J. Goodson",
        "position": "MLB"
      },
      {
        "team": "Giants",
        "jersey_number": 69,
        "name": "Brett Jones",
        "position": "C"
      },
      {
        "team": "Giants",
        "jersey_number": 18,
        "name": "Roger Lewis Jr",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 12,
        "name": "Cody Latimer",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 53,
        "name": "Justin March-Lillard",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 96,
        "name": "Kareem Martin",
        "position": "LOLB"
      },
      {
        "team": "Giants",
        "jersey_number": 97,
        "name": "Josh Mauro",
        "position": "RE"
      },
      {
        "team": "Giants",
        "jersey_number": 8,
        "name": "Russell Shepard",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 41,
        "name": "Michael Thomas",
        "position": "SS"
      },
      {
        "team": "Eagles",
        "jersey_number": 50,
        "name": "Paul Worrilow",
        "position": "LOLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 52,
        "name": "Ryan Anderson",
        "position": "ROLB"
      },
      {
        "team": "Packers",
        "jersey_number": 9,
        "name": "DeShone Kizer",
        "position": "QB"
      },
      {
        "team": "Panthers",
        "jersey_number": 18,
        "name": "Damiere Byrd",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 13,
        "name": "Bennie Fowler III",
        "position": "WR"
      },
      {
        "team": "Panthers",
        "jersey_number": 23,
        "name": "LaDarius Gunter",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 94,
        "name": "Daeshon Hall",
        "position": "RE"
      },
      {
        "team": "Bears",
        "jersey_number": 92,
        "name": "John Jenkins",
        "position": "DT"
      },
      {
        "team": "Panthers",
        "jersey_number": 75,
        "name": "Matt Kalil",
        "position": "LT"
      },
      {
        "team": "Vikings",
        "jersey_number": 75,
        "name": "Brian O'Neill",
        "position": "LT"
      },
      {
        "team": "Vikings",
        "jersey_number": 72,
        "name": "David Parry",
        "position": "DT"
      },
      {
        "team": "Vikings",
        "jersey_number": 35,
        "name": "Marcus Sherels",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 84,
        "name": "Michael Hoomanawanui",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 70,
        "name": "Mitchell Loewen",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 75,
        "name": "Andrus Peat",
        "position": "LG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 32,
        "name": "Jacquizz Rodgers",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 85,
        "name": "Eric Saubert",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 38,
        "name": "Boston Scott",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 25,
        "name": "Ito Smith",
        "position": "HB"
      },
      {
        "team": "Saints",
        "jersey_number": 4,
        "name": "Tre'quan Smith",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 76,
        "name": "Donovan Smith",
        "position": "LT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 73,
        "name": "J.R. Sweezy",
        "position": "RG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 96,
        "name": "Stevie Tu'Ikolovatu",
        "position": "DT"
      },
      {
        "team": "Falcons",
        "jersey_number": 33,
        "name": "Blidi Wreh-Wilson",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 64,
        "name": "Jonathan Cooper",
        "position": "LG"
      },
      {
        "team": "49ers",
        "jersey_number": 96,
        "name": "Sheldon Day",
        "position": "DT"
      },
      {
        "team": "Rams",
        "jersey_number": 5,
        "name": "Sam Ficken",
        "position": "K"
      },
      {
        "team": "Seahawks",
        "jersey_number": 78,
        "name": "D.J. Fluker",
        "position": "RG"
      },
      {
        "team": "Cardinals",
        "jersey_number": 7,
        "name": "Mike Glennon",
        "position": "QB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 49,
        "name": "Shaquem Griffin",
        "position": "ROLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 91,
        "name": "Tom Johnson",
        "position": "DT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 22,
        "name": "T.J. Logan",
        "position": "HB"
      },
      {
        "team": "49ers",
        "jersey_number": 54,
        "name": "Cassius Marsh",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 94,
        "name": "Malik McDowell",
        "position": "DT"
      },
      {
        "team": "Rams",
        "jersey_number": 37,
        "name": "Sam Shields",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 98,
        "name": "Shamar Stephen",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 75,
        "name": "Laken Tomlinson",
        "position": "LG"
      },
      {
        "team": "Dolphins",
        "jersey_number": 33,
        "name": "Kalen Ballage",
        "position": "HB"
      },
      {
        "team": "Jets",
        "jersey_number": 77,
        "name": "James Carpenter",
        "position": "LG"
      },
      {
        "team": "Jets",
        "jersey_number": 75,
        "name": "Xavier Cooper",
        "position": "RE"
      },
      {
        "team": "Jets",
        "jersey_number": 51,
        "name": "Brandon Copeland",
        "position": "LE"
      },
      {
        "team": "Jets",
        "jersey_number": 88,
        "name": "Charles Johnson",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 41,
        "name": "Cyrus Jones",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 88,
        "name": "Khari Lee",
        "position": "TE"
      },
      {
        "team": "Jets",
        "jersey_number": 86,
        "name": "Jordan Leggett",
        "position": "TE"
      },
      {
        "team": "Bills",
        "jersey_number": 10,
        "name": "A.J. McCarron",
        "position": "QB"
      },
      {
        "team": "Jets",
        "jersey_number": 45,
        "name": "Rontez Miles",
        "position": "FS"
      },
      {
        "team": "Bills",
        "jersey_number": 99,
        "name": "Harrison Phillips",
        "position": "DT"
      },
      {
        "team": "Jets",
        "jersey_number": 30,
        "name": "Rashard Robinson",
        "position": "CB"
      },
      {
        "team": "Jets",
        "jersey_number": 83,
        "name": "Eric Tomlinson",
        "position": "TE"
      },
      {
        "team": "Jets",
        "jersey_number": 37,
        "name": "J.J. Wilcox",
        "position": "FS"
      },
      {
        "team": "Bengals",
        "jersey_number": 99,
        "name": "Andrew Billings",
        "position": "DT"
      },
      {
        "team": "Steelers",
        "jersey_number": 37,
        "name": "Jordan Dangerfield",
        "position": "FS"
      },
      {
        "team": "Ravens",
        "jersey_number": 3,
        "name": "Robert Griffin III",
        "position": "QB"
      },
      {
        "team": "Bengals",
        "jersey_number": 94,
        "name": "Sam Hubbard",
        "position": "LE"
      },
      {
        "team": "Ravens",
        "jersey_number": 88,
        "name": "Vince Mayle",
        "position": "TE"
      },
      {
        "team": "Steelers",
        "jersey_number": 93,
        "name": "Dan McCullers",
        "position": "DT"
      },
      {
        "team": "Ravens",
        "jersey_number": 10,
        "name": "Chris Moore",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 57,
        "name": "Vincent Rey",
        "position": "MLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 20,
        "name": "KeiVarae Russell",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 59,
        "name": "Nick Vigil",
        "position": "LOLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 96,
        "name": "L.T. Walton",
        "position": "LE"
      },
      {
        "team": "Steelers",
        "jersey_number": 6,
        "name": "Matt Wile",
        "position": "P"
      },
      {
        "team": "Texans",
        "jersey_number": 89,
        "name": "Stephen Anderson",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 92,
        "name": "Brandon Dunn",
        "position": "DT"
      },
      {
        "team": "Browns",
        "jersey_number": 74,
        "name": "Chris Hubbard",
        "position": "RT"
      },
      {
        "team": "Colts",
        "jersey_number": 50,
        "name": "Anthony Walker Jr",
        "position": "ROLB"
      },
      {
        "team": "Browns",
        "jersey_number": 15,
        "name": "Ricardo Louis",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 66,
        "name": "Nick Martin",
        "position": "C"
      },
      {
        "team": "Colts",
        "jersey_number": 38,
        "name": "Christine Michael",
        "position": "HB"
      },
      {
        "team": "Colts",
        "jersey_number": 55,
        "name": "Rakeem Nunez-Roches",
        "position": "DT"
      },
      {
        "team": "Texans",
        "jersey_number": 57,
        "name": "Brennan Scarlett",
        "position": "ROLB"
      },
      {
        "team": "Browns",
        "jersey_number": 92,
        "name": "Chad Thomas",
        "position": "RE"
      },
      {
        "team": "Colts",
        "jersey_number": 33,
        "name": "Robert Turbin",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 60,
        "name": "A.J. Cann",
        "position": "RG"
      },
      {
        "team": "Jaguars",
        "jersey_number": 13,
        "name": "Rashad Greene Sr",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 17,
        "name": "Daesean Hamilton",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 92,
        "name": "Zach Kerr",
        "position": "LE"
      },
      {
        "team": "Raiders",
        "jersey_number": 47,
        "name": "James Cowser",
        "position": "LOLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 29,
        "name": "Leon Hall",
        "position": "CB"
      },
      {
        "team": "Raiders",
        "jersey_number": 90,
        "name": "Treyvon Hester",
        "position": "DT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 31,
        "name": "Akeem Hunt",
        "position": "HB"
      },
      {
        "team": "Chargers",
        "jersey_number": 32,
        "name": "Justin Jackson",
        "position": "HB"
      },
      {
        "team": "Raiders",
        "jersey_number": 50,
        "name": "Nicholas Morrow",
        "position": "ROLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 30,
        "name": "Keith Reaser",
        "position": "CB"
      },
      {
        "team": "Chargers",
        "jersey_number": 98,
        "name": "Isaac Rochell",
        "position": "LE"
      },
      {
        "team": "Raiders",
        "jersey_number": 86,
        "name": "Lee Smith",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 13,
        "name": "De'Anthony Thomas",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 81,
        "name": "Timothy Wright",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 10,
        "name": "Mack Hollins",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 56,
        "name": "Datone Jones",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 17,
        "name": "Kyle Lauletta",
        "position": "QB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 49,
        "name": "Jamize Olawale",
        "position": "FB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 36,
        "name": "Bo Scarbrough",
        "position": "HB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 45,
        "name": "Rod Smith",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 27,
        "name": "Darian Thompson",
        "position": "FS"
      },
      {
        "team": "Eagles",
        "jersey_number": 72,
        "name": "Hal Vaitai",
        "position": "LT"
      },
      {
        "team": "Giants",
        "jersey_number": 72,
        "name": "Kerry Wynn",
        "position": "LE"
      },
      {
        "team": "Packers",
        "jersey_number": 90,
        "name": "Montravius Adams",
        "position": "RE"
      },
      {
        "team": "Packers",
        "jersey_number": 81,
        "name": "Geronimo Allison",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 43,
        "name": "Nick Bellore",
        "position": "MLB"
      },
      {
        "team": "Packers",
        "jersey_number": 45,
        "name": "Vince Biegel",
        "position": "LOLB"
      },
      {
        "team": "Lions",
        "jersey_number": 60,
        "name": "Graham Glasgow",
        "position": "C"
      },
      {
        "team": "Packers",
        "jersey_number": 28,
        "name": "Josh Hawkins",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 90,
        "name": "Ziggy Hood",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 98,
        "name": "Jeremiah Ledbetter",
        "position": "DT"
      },
      {
        "team": "Redskins",
        "jersey_number": 39,
        "name": "Keith Marshall",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 85,
        "name": "Sean McGrath",
        "position": "TE"
      },
      {
        "team": "Redskins",
        "jersey_number": 79,
        "name": "Ty Nsekhe",
        "position": "LT"
      },
      {
        "team": "Packers",
        "jersey_number": 41,
        "name": "Lenzy Pipkins",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 99,
        "name": "Phil Taylor Sr",
        "position": "DT"
      },
      {
        "team": "Redskins",
        "jersey_number": 56,
        "name": "Zach Vigil",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 85,
        "name": "Daniel Brown",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 62,
        "name": "Nick Easton",
        "position": "LG"
      },
      {
        "team": "Panthers",
        "jersey_number": 42,
        "name": "Colin Jones",
        "position": "FS"
      },
      {
        "team": "Vikings",
        "jersey_number": 12,
        "name": "Tavarres King",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 70,
        "name": "Bobby Massie",
        "position": "RT"
      },
      {
        "team": "Vikings",
        "jersey_number": 3,
        "name": "Trevor Siemian",
        "position": "QB"
      },
      {
        "team": "Bears",
        "jersey_number": 97,
        "name": "Nick Williams",
        "position": "RE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 25,
        "name": "Peyton Barber",
        "position": "HB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 94,
        "name": "Will Clarke VI",
        "position": "RE"
      },
      {
        "team": "Falcons",
        "jersey_number": 95,
        "name": "Jack Crawford",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 33,
        "name": "Carlton Davis",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 55,
        "name": "Jayrone Elliott",
        "position": "LOLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 21,
        "name": "Justin Evans",
        "position": "FS"
      },
      {
        "team": "Saints",
        "jersey_number": 15,
        "name": "Josh Huff",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 44,
        "name": "Hau'oli Kikaha",
        "position": "RE"
      },
      {
        "team": "Saints",
        "jersey_number": 53,
        "name": "A.J. Klein",
        "position": "LOLB"
      },
      {
        "team": "Falcons",
        "jersey_number": 35,
        "name": "Leon McFadden",
        "position": "CB"
      },
      {
        "team": "Falcons",
        "jersey_number": 42,
        "name": "Duke Riley",
        "position": "LOLB"
      },
      {
        "team": "Saints",
        "jersey_number": 12,
        "name": "Tom Savage",
        "position": "QB"
      },
      {
        "team": "Falcons",
        "jersey_number": 94,
        "name": "Deadrin Senat",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 37,
        "name": "Keith Tandy",
        "position": "SS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 70,
        "name": "Evan Boehm",
        "position": "RG"
      },
      {
        "team": "Rams",
        "jersey_number": 68,
        "name": "Jamon Brown",
        "position": "RG"
      },
      {
        "team": "Seahawks",
        "jersey_number": 82,
        "name": "Amara Darboh",
        "position": "WR"
      },
      {
        "team": "Seahawks",
        "jersey_number": 88,
        "name": "Will Dissly",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 29,
        "name": "Chase Edmonds",
        "position": "HB"
      },
      {
        "team": "49ers",
        "jersey_number": 21,
        "name": "C.J. Goodwin",
        "position": "CB"
      },
      {
        "team": "Rams",
        "jersey_number": 32,
        "name": "Troy Hill",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 44,
        "name": "Marcus Smith II",
        "position": "RE"
      },
      {
        "team": "Rams",
        "jersey_number": 96,
        "name": "Matt Longacre",
        "position": "ROLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 22,
        "name": "C.J. Prosise",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 81,
        "name": "Nick Vannett",
        "position": "TE"
      },
      {
        "team": "49ers",
        "jersey_number": 48,
        "name": "Fred Warner",
        "position": "MLB"
      },
      {
        "team": "49ers",
        "jersey_number": 97,
        "name": "Dekoda Watson",
        "position": "LOLB"
      },
      {
        "team": "49ers",
        "jersey_number": 32,
        "name": "Joe Williams",
        "position": "HB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 59,
        "name": "Chase Allen",
        "position": "MLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 55,
        "name": "Jerome Baker",
        "position": "LOLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 88,
        "name": "Leonte Carroo",
        "position": "WR"
      },
      {
        "team": "Dolphins",
        "jersey_number": 84,
        "name": "Isaiah Ford",
        "position": "WR"
      },
      {
        "team": "Dolphins",
        "jersey_number": 96,
        "name": "Vincent Taylor",
        "position": "DT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 76,
        "name": "Jonathan Woodard",
        "position": "LE"
      },
      {
        "team": "Patriots",
        "jersey_number": 85,
        "name": "Braxton Berrios",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 32,
        "name": "Juston Burris",
        "position": "CB"
      },
      {
        "team": "Jets",
        "jersey_number": 40,
        "name": "Trenton Cannon",
        "position": "HB"
      },
      {
        "team": "Bills",
        "jersey_number": 96,
        "name": "Terrence Fede",
        "position": "LE"
      },
      {
        "team": "Patriots",
        "jersey_number": 75,
        "name": "Ted Karras",
        "position": "RG"
      },
      {
        "team": "Bills",
        "jersey_number": 44,
        "name": "Deon Lacey",
        "position": "LOLB"
      },
      {
        "team": "Bills",
        "jersey_number": 37,
        "name": "Kelcie McCray",
        "position": "SS"
      },
      {
        "team": "Bills",
        "jersey_number": 45,
        "name": "Marcus Murphy",
        "position": "HB"
      },
      {
        "team": "Bills",
        "jersey_number": 59,
        "name": "Owa Odighizuwa",
        "position": "RE"
      },
      {
        "team": "Jets",
        "jersey_number": 97,
        "name": "Nathan Shepherd",
        "position": "RE"
      },
      {
        "team": "Bills",
        "jersey_number": 81,
        "name": "Rod Streater",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 64,
        "name": "Travis Swanson",
        "position": "C"
      },
      {
        "team": "Bills",
        "jersey_number": 82,
        "name": "Logan Thomas",
        "position": "TE"
      },
      {
        "team": "Patriots",
        "jersey_number": 99,
        "name": "Vincent Valentine",
        "position": "DT"
      },
      {
        "team": "Patriots",
        "jersey_number": 68,
        "name": "LaAdrian Waddle",
        "position": "LT"
      },
      {
        "team": "Bills",
        "jersey_number": 92,
        "name": "Adolphus Washington",
        "position": "DT"
      },
      {
        "team": "Ravens",
        "jersey_number": 28,
        "name": "Anthony Averett",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 67,
        "name": "B.J. Finney",
        "position": "LG"
      },
      {
        "team": "Bengals",
        "jersey_number": 74,
        "name": "Jake Fisher",
        "position": "RT"
      },
      {
        "team": "Bengals",
        "jersey_number": 66,
        "name": "Trey Hopkins",
        "position": "RG"
      },
      {
        "team": "Bengals",
        "jersey_number": 45,
        "name": "Malik Jefferson",
        "position": "ROLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 92,
        "name": "Bronson Kaufusi",
        "position": "RE"
      },
      {
        "team": "Ravens",
        "jersey_number": 72,
        "name": "Alex Lewis",
        "position": "RT"
      },
      {
        "team": "Bengals",
        "jersey_number": 80,
        "name": "Josh Malone",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 93,
        "name": "Chris Wormley",
        "position": "DT"
      },
      {
        "team": "Ravens",
        "jersey_number": 40,
        "name": "Kenny Young",
        "position": "MLB"
      },
      {
        "team": "Texans",
        "jersey_number": 88,
        "name": "Jordan Akins",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 79,
        "name": "Jeff Allen",
        "position": "RG"
      },
      {
        "team": "Texans",
        "jersey_number": 97,
        "name": "Angelo Blackson",
        "position": "LE"
      },
      {
        "team": "Browns",
        "jersey_number": 99,
        "name": "Caleb Brantley",
        "position": "DT"
      },
      {
        "team": "Browns",
        "jersey_number": 11,
        "name": "Antonio Callaway",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 31,
        "name": "Treston DeCoud",
        "position": "CB"
      },
      {
        "team": "Colts",
        "jersey_number": 52,
        "name": "Najee Goode",
        "position": "LOLB"
      },
      {
        "team": "Browns",
        "jersey_number": 81,
        "name": "Rashard Higgins",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 44,
        "name": "Antonio Morrison",
        "position": "MLB"
      },
      {
        "team": "Browns",
        "jersey_number": 44,
        "name": "Nate Orchard",
        "position": "LE"
      },
      {
        "team": "Texans",
        "jersey_number": 85,
        "name": "MyCole Pruitt",
        "position": "TE"
      },
      {
        "team": "Browns",
        "jersey_number": 9,
        "name": "Drew Stanton",
        "position": "QB"
      },
      {
        "team": "Colts",
        "jersey_number": 22,
        "name": "Jordan Wilkins",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 53,
        "name": "Blair Brown",
        "position": "MLB"
      },
      {
        "team": "Titans",
        "jersey_number": 29,
        "name": "Dane Cruikshank",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 84,
        "name": "Troy Fumagalli",
        "position": "TE"
      },
      {
        "team": "Titans",
        "jersey_number": 7,
        "name": "Blaine Gabbert",
        "position": "QB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 36,
        "name": "Ronnie Harrison",
        "position": "SS"
      },
      {
        "team": "Titans",
        "jersey_number": 95,
        "name": "David King",
        "position": "RE"
      },
      {
        "team": "Broncos",
        "jersey_number": 27,
        "name": "Brendan Langley",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 12,
        "name": "Paxton Lynch",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 59,
        "name": "Stansly Maponga Sr",
        "position": "ROLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 16,
        "name": "Isaiah McKenzie",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 31,
        "name": "Jalen Myrick",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 23,
        "name": "Tyler Patmon",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 59,
        "name": "Carroll Phillips",
        "position": "RE"
      },
      {
        "team": "Broncos",
        "jersey_number": 87,
        "name": "Jordan Taylor",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 86,
        "name": "Austin Traylor",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 26,
        "name": "Jarrod Wilson",
        "position": "SS"
      },
      {
        "team": "Broncos",
        "jersey_number": 41,
        "name": "Isaac Yiadom",
        "position": "CB"
      },
      {
        "team": "Raiders",
        "jersey_number": 91,
        "name": "Shilique Calhoun",
        "position": "LOLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 85,
        "name": "Derek Carrier",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 22,
        "name": "Robert Golden",
        "position": "FS"
      },
      {
        "team": "Raiders",
        "jersey_number": 16,
        "name": "Johnny Holton",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 99,
        "name": "Arden Key",
        "position": "LE"
      },
      {
        "team": "Raiders",
        "jersey_number": 79,
        "name": "Denver Kirkland",
        "position": "LG"
      },
      {
        "team": "Raiders",
        "jersey_number": 54,
        "name": "Emmanuel Lamur",
        "position": "ROLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 58,
        "name": "Kyle Wilber",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 33,
        "name": "Andrew Adams",
        "position": "FS"
      },
      {
        "team": "Cowboys",
        "jersey_number": 74,
        "name": "Dorance Armstrong Jr",
        "position": "RE"
      },
      {
        "team": "Giants",
        "jersey_number": 38,
        "name": "Donte Deayon",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 47,
        "name": "Nathan Gerry",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 73,
        "name": "John Greco",
        "position": "RG"
      },
      {
        "team": "Eagles",
        "jersey_number": 54,
        "name": "Kamu Grugier-Hill",
        "position": "LOLB"
      },
      {
        "team": "Giants",
        "jersey_number": 95,
        "name": "B.J. Hill",
        "position": "LE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 89,
        "name": "Blake Jarwin",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 51,
        "name": "Steven Means",
        "position": "LE"
      },
      {
        "team": "Eagles",
        "jersey_number": 52,
        "name": "Corey Nelson",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 70,
        "name": "Patrick Omameh",
        "position": "LG"
      },
      {
        "team": "Eagles",
        "jersey_number": 75,
        "name": "Josh Sweat",
        "position": "RE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 48,
        "name": "Joe Thomas",
        "position": "MLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 67,
        "name": "Chance Warmack",
        "position": "LG"
      },
      {
        "team": "Giants",
        "jersey_number": 37,
        "name": "B.W. Webb",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 80,
        "name": "Markus Wheaton",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 16,
        "name": "Cedrick Wilson",
        "position": "WR"
      },
      {
        "team": "Packers",
        "jersey_number": 39,
        "name": "Demetri Goodson",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 7,
        "name": "Brett Hundley",
        "position": "QB"
      },
      {
        "team": "Redskins",
        "jersey_number": 77,
        "name": "Shawn Lauvao",
        "position": "LG"
      },
      {
        "team": "Packers",
        "jersey_number": 83,
        "name": "Marquez Valdes-Scantling",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 50,
        "name": "Martrell Spaight",
        "position": "MLB"
      },
      {
        "team": "Lions",
        "jersey_number": 34,
        "name": "Zach Zenner",
        "position": "HB"
      },
      {
        "team": "Bears",
        "jersey_number": 81,
        "name": "Marlon Brown",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 30,
        "name": "Benny Cunningham",
        "position": "HB"
      },
      {
        "team": "Panthers",
        "jersey_number": 35,
        "name": "Corn Elder",
        "position": "CB"
      },
      {
        "team": "Vikings",
        "jersey_number": 92,
        "name": "Jalyn Holmes",
        "position": "DT"
      },
      {
        "team": "Panthers",
        "jersey_number": 64,
        "name": "Dorian Johnson",
        "position": "RG"
      },
      {
        "team": "Vikings",
        "jersey_number": 94,
        "name": "Jaleel Johnson",
        "position": "DT"
      },
      {
        "team": "Panthers",
        "jersey_number": 69,
        "name": "Tyler Larsen",
        "position": "C"
      },
      {
        "team": "Panthers",
        "jersey_number": 55,
        "name": "David Mayo",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 67,
        "name": "Jordan Morgan",
        "position": "LG"
      },
      {
        "team": "Panthers",
        "jersey_number": 80,
        "name": "Ian Thomas",
        "position": "TE"
      },
      {
        "team": "Bears",
        "jersey_number": 53,
        "name": "John Timu",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 71,
        "name": "Earl Watford",
        "position": "RG"
      },
      {
        "team": "Panthers",
        "jersey_number": 43,
        "name": "Fozzy Whittaker",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 63,
        "name": "Ben Garland",
        "position": "LG"
      },
      {
        "team": "Falcons",
        "jersey_number": 17,
        "name": "Marvin Hall",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 90,
        "name": "George Johnson Jr",
        "position": "RE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 26,
        "name": "Josh Robinson",
        "position": "SS"
      },
      {
        "team": "Saints",
        "jersey_number": 54,
        "name": "Nathan Stupar",
        "position": "LOLB"
      },
      {
        "team": "49ers",
        "jersey_number": 3,
        "name": "C.J. Beathard",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 23,
        "name": "Bene' Benwikere",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 84,
        "name": "Kendrick Bourne",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 33,
        "name": "Justin Davis",
        "position": "HB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 30,
        "name": "Rudy Ford",
        "position": "FS"
      },
      {
        "team": "49ers",
        "jersey_number": 65,
        "name": "Joshua Garnett",
        "position": "RG"
      },
      {
        "team": "Seahawks",
        "jersey_number": 94,
        "name": "Rasheem Green",
        "position": "RE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 95,
        "name": "Rodney Gunter",
        "position": "DT"
      },
      {
        "team": "Rams",
        "jersey_number": 54,
        "name": "Bryce Hager",
        "position": "MLB"
      },
      {
        "team": "49ers",
        "jersey_number": 93,
        "name": "D.J. Jones",
        "position": "DT"
      },
      {
        "team": "Rams",
        "jersey_number": 42,
        "name": "John Kelly",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 38,
        "name": "Tre Madden",
        "position": "FB"
      },
      {
        "team": "Rams",
        "jersey_number": 51,
        "name": "Ejuan Price",
        "position": "ROLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 33,
        "name": "Tedric Thompson",
        "position": "SS"
      },
      {
        "team": "Dolphins",
        "jersey_number": 35,
        "name": "Walt Aikens",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 83,
        "name": "Thomas Duarte",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 48,
        "name": "MarQueis Gray",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 45,
        "name": "Mike Hull",
        "position": "MLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 46,
        "name": "Durham Smythe",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 98,
        "name": "Gabe Wright",
        "position": "DT"
      },
      {
        "team": "Patriots",
        "jersey_number": 56,
        "name": "Ja'Whaun Bentley",
        "position": "MLB"
      },
      {
        "team": "Patriots",
        "jersey_number": 27,
        "name": "Keion Crossen",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 43,
        "name": "Nate Ebner",
        "position": "SS"
      },
      {
        "team": "Bills",
        "jersey_number": 72,
        "name": "Ryan Groy",
        "position": "C"
      },
      {
        "team": "Jets",
        "jersey_number": 16,
        "name": "Chad Hansen",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 89,
        "name": "Christopher Herndon IV",
        "position": "TE"
      },
      {
        "team": "Patriots",
        "jersey_number": 2,
        "name": "Brian Hoyer",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 65,
        "name": "Jason King",
        "position": "LG"
      },
      {
        "team": "Jets",
        "jersey_number": 43,
        "name": "Parry Nickerson",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 37,
        "name": "Jordan Richards",
        "position": "SS"
      },
      {
        "team": "Jets",
        "jersey_number": 72,
        "name": "Brandon Shell",
        "position": "RT"
      },
      {
        "team": "Jets",
        "jersey_number": 19,
        "name": "Devin Smith",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 51,
        "name": "Julian Stanford",
        "position": "ROLB"
      },
      {
        "team": "Bills",
        "jersey_number": 75,
        "name": "Wyatt Teller",
        "position": "RG"
      },
      {
        "team": "Jets",
        "jersey_number": 82,
        "name": "Lucky Whitehead",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 67,
        "name": "Brian Winters",
        "position": "RG"
      },
      {
        "team": "Steelers",
        "jersey_number": 29,
        "name": "Brian Allen",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 7,
        "name": "Matt Barkley",
        "position": "QB"
      },
      {
        "team": "Steelers",
        "jersey_number": 88,
        "name": "Darrius Heyward-Bey",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 93,
        "name": "Andrew Brown",
        "position": "DT"
      },
      {
        "team": "Bengals",
        "jersey_number": 16,
        "name": "Cody Core",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 51,
        "name": "Kamalei Correa",
        "position": "MLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 5,
        "name": "Joshua Dobbs",
        "position": "QB"
      },
      {
        "team": "Steelers",
        "jersey_number": 71,
        "name": "Matt Feiler",
        "position": "RG"
      },
      {
        "team": "Steelers",
        "jersey_number": 35,
        "name": "Dashaun Phillips",
        "position": "CB"
      },
      {
        "team": "Ravens",
        "jersey_number": 12,
        "name": "Jaleel Scott",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 26,
        "name": "Josh Shaw",
        "position": "FS"
      },
      {
        "team": "Steelers",
        "jersey_number": 20,
        "name": "Cameron Sutton",
        "position": "CB"
      },
      {
        "team": "Colts",
        "jersey_number": 45,
        "name": "Tyrell Adams",
        "position": "LOLB"
      },
      {
        "team": "Browns",
        "jersey_number": 49,
        "name": "Devon Cajuste",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 47,
        "name": "Darrell Daniels",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 71,
        "name": "Denzelle Good",
        "position": "RT"
      },
      {
        "team": "Browns",
        "jersey_number": 48,
        "name": "Jermaine Grace",
        "position": "ROLB"
      },
      {
        "team": "Colts",
        "jersey_number": 73,
        "name": "Joe Haeg",
        "position": "RG"
      },
      {
        "team": "Colts",
        "jersey_number": 23,
        "name": "Kenny Moore II",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 13,
        "name": "Jeff Janis",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 96,
        "name": "Darius Kilgo",
        "position": "DT"
      },
      {
        "team": "Colts",
        "jersey_number": 43,
        "name": "Ross Travis",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 37,
        "name": "D.J. White",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 24,
        "name": "Howard Wilson",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 54,
        "name": "Eli Ankou",
        "position": "DT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 96,
        "name": "Michael Bennett",
        "position": "DT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 22,
        "name": "Don Carey",
        "position": "FS"
      },
      {
        "team": "Broncos",
        "jersey_number": 76,
        "name": "Max Garcia",
        "position": "LG"
      },
      {
        "team": "Jaguars",
        "jersey_number": 58,
        "name": "Deon King",
        "position": "ROLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 98,
        "name": "Kapron Lewis-Moore",
        "position": "LE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 85,
        "name": "Jaydon Mickens",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 66,
        "name": "Kevin Pamphile",
        "position": "LG"
      },
      {
        "team": "Titans",
        "jersey_number": 24,
        "name": "Kalan Reed",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 23,
        "name": "Tye Smith",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 89,
        "name": "Phillip Supernaw",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 70,
        "name": "Brandon Thomas",
        "position": "RG"
      },
      {
        "team": "Raiders",
        "jersey_number": 81,
        "name": "Pharaoh Brown",
        "position": "TE"
      },
      {
        "team": "Chargers",
        "jersey_number": 84,
        "name": "Dylan Cantrell",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 17,
        "name": "Dwayne Harris",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 91,
        "name": "Justin Jones",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 55,
        "name": "Marquel Lee",
        "position": "MLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 3,
        "name": "E.J. Manuel",
        "position": "QB"
      },
      {
        "team": "Raiders",
        "jersey_number": 75,
        "name": "Brandon Parker",
        "position": "LT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 39,
        "name": "Tremon Smith",
        "position": "CB"
      },
      {
        "team": "Chargers",
        "jersey_number": 71,
        "name": "Damion Square",
        "position": "DT"
      },
      {
        "team": "Chargers",
        "jersey_number": 44,
        "name": "Kyzir White",
        "position": "ROLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 51,
        "name": "Frank Zombo",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 74,
        "name": "Ereck Flowers",
        "position": "RT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 80,
        "name": "Rico Gathers",
        "position": "TE"
      },
      {
        "team": "Giants",
        "jersey_number": 44,
        "name": "Mark Herzlich",
        "position": "MLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 29,
        "name": "Avonte Maddox",
        "position": "CB"
      },
      {
        "team": "Giants",
        "jersey_number": 19,
        "name": "Travis Rudolph",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 86,
        "name": "Dalton Schultz",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 16,
        "name": "Bryce Treggs",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 39,
        "name": "Jamal Agnew",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 30,
        "name": "Troy Apke",
        "position": "FS"
      },
      {
        "team": "Redskins",
        "jersey_number": 63,
        "name": "Tavaris Barnes",
        "position": "RE"
      },
      {
        "team": "Packers",
        "jersey_number": 11,
        "name": "Trevor Davis",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 55,
        "name": "Jonathan Freeny",
        "position": "ROLB"
      },
      {
        "team": "Lions",
        "jersey_number": 93,
        "name": "Da'Shawn Hand",
        "position": "RE"
      },
      {
        "team": "Redskins",
        "jersey_number": 8,
        "name": "Kevin Hogan",
        "position": "QB"
      },
      {
        "team": "Packers",
        "jersey_number": 82,
        "name": "J'Mon Moore",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 14,
        "name": "Trey Quinn",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 87,
        "name": "Jeremy Sprinkle",
        "position": "TE"
      },
      {
        "team": "Lions",
        "jersey_number": 47,
        "name": "Tracy Walker",
        "position": "FS"
      },
      {
        "team": "Panthers",
        "jersey_number": 34,
        "name": "Cameron Artis-Payne",
        "position": "HB"
      },
      {
        "team": "Vikings",
        "jersey_number": 76,
        "name": "Aviante Collins",
        "position": "RT"
      },
      {
        "team": "Vikings",
        "jersey_number": 79,
        "name": "Tom Compton",
        "position": "RG"
      },
      {
        "team": "Panthers",
        "jersey_number": 91,
        "name": "Bryan Cox",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 28,
        "name": "Rashaan Gaulden",
        "position": "FS"
      },
      {
        "team": "Vikings",
        "jersey_number": 30,
        "name": "C.J. Ham",
        "position": "FB"
      },
      {
        "team": "Bears",
        "jersey_number": 95,
        "name": "Roy Robertson-Harris",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 98,
        "name": "Marquis Haynes",
        "position": "LE"
      },
      {
        "team": "Bears",
        "jersey_number": 27,
        "name": "Sherrick McManis",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 33,
        "name": "Taquan Mizzell",
        "position": "HB"
      },
      {
        "team": "Vikings",
        "jersey_number": 95,
        "name": "Ifeadi Odenigbo",
        "position": "RE"
      },
      {
        "team": "Vikings",
        "jersey_number": 91,
        "name": "Stephen Weatherly",
        "position": "RE"
      },
      {
        "team": "Vikings",
        "jersey_number": 56,
        "name": "Antwione Williams",
        "position": "ROLB"
      },
      {
        "team": "Saints",
        "jersey_number": 74,
        "name": "Jermon Bushrod",
        "position": "RG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 48,
        "name": "Jack Cichy",
        "position": "ROLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 35,
        "name": "Javien Elliott",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 53,
        "name": "Adarius Glanton",
        "position": "MLB"
      },
      {
        "team": "Saints",
        "jersey_number": 96,
        "name": "Woodrow Hamilton",
        "position": "DT"
      },
      {
        "team": "Falcons",
        "jersey_number": 36,
        "name": "Kemal Ishmael",
        "position": "ROLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 17,
        "name": "Justin Watson",
        "position": "WR"
      },
      {
        "team": "Seahawks",
        "jersey_number": 57,
        "name": "D.J. Alexander",
        "position": "LOLB"
      },
      {
        "team": "Rams",
        "jersey_number": 34,
        "name": "Malcolm Brown",
        "position": "HB"
      },
      {
        "team": "Rams",
        "jersey_number": 24,
        "name": "Blake Countess",
        "position": "SS"
      },
      {
        "team": "49ers",
        "jersey_number": 57,
        "name": "Eli Harold",
        "position": "LOLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 42,
        "name": "Delano Hill",
        "position": "SS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 65,
        "name": "Germain Ifedi",
        "position": "RT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 93,
        "name": "Branden Jackson",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 99,
        "name": "Quinton Jefferson",
        "position": "LE"
      },
      {
        "team": "49ers",
        "jersey_number": 36,
        "name": "Don Jones",
        "position": "FS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 50,
        "name": "Gabe Martin",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 19,
        "name": "Tanner McEvoy",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 45,
        "name": "Tarvarius Moore",
        "position": "FS"
      },
      {
        "team": "49ers",
        "jersey_number": 68,
        "name": "Mike Person",
        "position": "C"
      },
      {
        "team": "Seahawks",
        "jersey_number": 77,
        "name": "Ethan Pocic",
        "position": "LG"
      },
      {
        "team": "49ers",
        "jersey_number": 77,
        "name": "Jullian Taylor",
        "position": "DT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 26,
        "name": "Brandon Williams",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 10,
        "name": "Chad Williams",
        "position": "WR"
      },
      {
        "team": "Dolphins",
        "jersey_number": 31,
        "name": "Cornell Armstrong",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 27,
        "name": "Trae Elston",
        "position": "SS"
      },
      {
        "team": "Dolphins",
        "jersey_number": 23,
        "name": "Jordan Lucas",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 14,
        "name": "Bryce Petty",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 38,
        "name": "Brandon Bolden",
        "position": "HB"
      },
      {
        "team": "Jets",
        "jersey_number": 62,
        "name": "Antonio Garcia",
        "position": "LT"
      },
      {
        "team": "Patriots",
        "jersey_number": 96,
        "name": "Geneo Grissom",
        "position": "RE"
      },
      {
        "team": "Jets",
        "jersey_number": 78,
        "name": "Jonotthan Harrison",
        "position": "RG"
      },
      {
        "team": "Bills",
        "jersey_number": 50,
        "name": "Ramon Humber",
        "position": "ROLB"
      },
      {
        "team": "Jets",
        "jersey_number": 71,
        "name": "Ben Ijalana",
        "position": "LT"
      },
      {
        "team": "Patriots",
        "jersey_number": 82,
        "name": "Ryan Izzo",
        "position": "TE"
      },
      {
        "team": "Bills",
        "jersey_number": 24,
        "name": "Taron Johnson",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 48,
        "name": "Harvey Langi",
        "position": "LOLB"
      },
      {
        "team": "Patriots",
        "jersey_number": 55,
        "name": "Eric Lee",
        "position": "LOLB"
      },
      {
        "team": "Bills",
        "jersey_number": 3,
        "name": "Ray-Ray McCloud",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 29,
        "name": "Siran Neal",
        "position": "SS"
      },
      {
        "team": "Bills",
        "jersey_number": 71,
        "name": "Marshall Newhouse",
        "position": "LT"
      },
      {
        "team": "Jets",
        "jersey_number": 98,
        "name": "Mike Pennel",
        "position": "RE"
      },
      {
        "team": "Bills",
        "jersey_number": 2,
        "name": "Nathan Peterman",
        "position": "QB"
      },
      {
        "team": "Patriots",
        "jersey_number": 18,
        "name": "Matthew Slater",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 86,
        "name": "Keith Towbridge",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 38,
        "name": "Stanley Jean-Baptiste",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 82,
        "name": "Cethan Carter",
        "position": "FB"
      },
      {
        "team": "Steelers",
        "jersey_number": 56,
        "name": "Anthony Chickillo",
        "position": "LOLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 6,
        "name": "Jeff Driskel",
        "position": "QB"
      },
      {
        "team": "Steelers",
        "jersey_number": 54,
        "name": "L.J. Fort",
        "position": "MLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 35,
        "name": "Davontae Harris",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 89,
        "name": "Ryan Hewitt",
        "position": "FB"
      },
      {
        "team": "Ravens",
        "jersey_number": 17,
        "name": "Jordan Lasley",
        "position": "WR"
      },
      {
        "team": "Steelers",
        "jersey_number": 45,
        "name": "Roosevelt Nix",
        "position": "FB"
      },
      {
        "team": "Bengals",
        "jersey_number": 70,
        "name": "Cedric Ogbuehi",
        "position": "LT"
      },
      {
        "team": "Steelers",
        "jersey_number": 22,
        "name": "Stevan Ridley",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 38,
        "name": "Jaylen Samuels",
        "position": "HB"
      },
      {
        "team": "Bengals",
        "jersey_number": 19,
        "name": "Auden Tate",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 28,
        "name": "Alfred Blue",
        "position": "HB"
      },
      {
        "team": "Colts",
        "jersey_number": 8,
        "name": "Deon Cain",
        "position": "WR"
      },
      {
        "team": "Browns",
        "jersey_number": 66,
        "name": "Spencer Drango",
        "position": "LG"
      },
      {
        "team": "Texans",
        "jersey_number": 53,
        "name": "Duke Ejiofor",
        "position": "LOLB"
      },
      {
        "team": "Colts",
        "jersey_number": 10,
        "name": "Reece Fountain",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 97,
        "name": "Zaire Franklin",
        "position": "ROLB"
      },
      {
        "team": "Texans",
        "jersey_number": 50,
        "name": "Ben Heeney",
        "position": "MLB"
      },
      {
        "team": "Texans",
        "jersey_number": 76,
        "name": "Seantrel Henderson",
        "position": "RT"
      },
      {
        "team": "Texans",
        "jersey_number": 5,
        "name": "Joe Webb III",
        "position": "QB"
      },
      {
        "team": "Texans",
        "jersey_number": 94,
        "name": "Ufomba Kamalu",
        "position": "LOLB"
      },
      {
        "team": "Texans",
        "jersey_number": 82,
        "name": "Matt Lengel",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 90,
        "name": "Grover Stewart",
        "position": "DT"
      },
      {
        "team": "Broncos",
        "jersey_number": 50,
        "name": "Zaire Anderson",
        "position": "MLB"
      },
      {
        "team": "Titans",
        "jersey_number": 55,
        "name": "Jayon Brown",
        "position": "MLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 6,
        "name": "Chad Kelly",
        "position": "QB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 55,
        "name": "Lerentee McCray",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 60,
        "name": "Connor McGovern",
        "position": "RG"
      },
      {
        "team": "Broncos",
        "jersey_number": 74,
        "name": "Jeremiah Poutasi",
        "position": "LG"
      },
      {
        "team": "Titans",
        "jersey_number": 38,
        "name": "Akrum Wadley",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 72,
        "name": "Josh Wells",
        "position": "LT"
      },
      {
        "team": "Raiders",
        "jersey_number": 88,
        "name": "Marcell Ateman",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 83,
        "name": "Braedon Bowman",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 90,
        "name": "Stefan Charles",
        "position": "RE"
      },
      {
        "team": "Chargers",
        "jersey_number": 80,
        "name": "Sean Culkin",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 45,
        "name": "Ukeme Eligwe",
        "position": "MLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 74,
        "name": "Justin Hamilton",
        "position": "DT"
      },
      {
        "team": "Chargers",
        "jersey_number": 25,
        "name": "Rayshawn Jenkins",
        "position": "SS"
      },
      {
        "team": "Chiefs",
        "jersey_number": 92,
        "name": "Tanoh Kpassagnon",
        "position": "LOLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 21,
        "name": "Eric Murray",
        "position": "SS"
      },
      {
        "team": "Raiders",
        "jersey_number": 38,
        "name": "Nick Nelson",
        "position": "CB"
      },
      {
        "team": "Chargers",
        "jersey_number": 49,
        "name": "James Onwualu",
        "position": "LOLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 26,
        "name": "Will Redmond",
        "position": "CB"
      },
      {
        "team": "Chargers",
        "jersey_number": 3,
        "name": "Geno Smith",
        "position": "QB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 25,
        "name": "Armani Watts",
        "position": "FS"
      },
      {
        "team": "Giants",
        "jersey_number": 55,
        "name": "Ray-Ray Armstrong",
        "position": "MLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 85,
        "name": "Noah Brown",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 75,
        "name": "Cameron Fleming",
        "position": "RT"
      },
      {
        "team": "Giants",
        "jersey_number": 39,
        "name": "Chris Lewis-Harris",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 42,
        "name": "Chris Maragos",
        "position": "FS"
      },
      {
        "team": "Giants",
        "jersey_number": 91,
        "name": "Avery Moss",
        "position": "LOLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 66,
        "name": "Lewis Neal",
        "position": "DT"
      },
      {
        "team": "Eagles",
        "jersey_number": 98,
        "name": "Elijah Qualls",
        "position": "DT"
      },
      {
        "team": "Eagles",
        "jersey_number": 28,
        "name": "Wendell Smallwood",
        "position": "HB"
      },
      {
        "team": "Eagles",
        "jersey_number": 97,
        "name": "Destiny Vaeao",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 5,
        "name": "Davis Webb",
        "position": "QB"
      },
      {
        "team": "Packers",
        "jersey_number": 29,
        "name": "Kentrell Brice",
        "position": "FS"
      },
      {
        "team": "Packers",
        "jersey_number": 42,
        "name": "Oren Burks",
        "position": "MLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 72,
        "name": "Geron Christian",
        "position": "LT"
      },
      {
        "team": "Lions",
        "jersey_number": 65,
        "name": "Tyrell Crosby",
        "position": "LT"
      },
      {
        "team": "Redskins",
        "jersey_number": 38,
        "name": "Joshua Holsey",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 72,
        "name": "Anthony Lanier II",
        "position": "LE"
      },
      {
        "team": "Redskins",
        "jersey_number": 60,
        "name": "Arie Kouandjio",
        "position": "LG"
      },
      {
        "team": "Packers",
        "jersey_number": 99,
        "name": "James Looney",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 44,
        "name": "Jalen Reeves-Maybin",
        "position": "ROLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 59,
        "name": "Alex McCalister",
        "position": "RE"
      },
      {
        "team": "Redskins",
        "jersey_number": 73,
        "name": "Chase Roullier",
        "position": "C"
      },
      {
        "team": "Redskins",
        "jersey_number": 25,
        "name": "Greg Stroman",
        "position": "CB"
      },
      {
        "team": "Vikings",
        "jersey_number": 90,
        "name": "Tashawn Bower",
        "position": "RE"
      },
      {
        "team": "Bears",
        "jersey_number": 36,
        "name": "DeAndre Houston-Carson",
        "position": "FS"
      },
      {
        "team": "Vikings",
        "jersey_number": 83,
        "name": "Tyler Conklin",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 63,
        "name": "Danny Isidora",
        "position": "RG"
      },
      {
        "team": "Bears",
        "jersey_number": 57,
        "name": "Joel Iyiegbuniwe",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 98,
        "name": "Bilal Nichols",
        "position": "DT"
      },
      {
        "team": "Panthers",
        "jersey_number": 65,
        "name": "Amini Silatolu",
        "position": "LT"
      },
      {
        "team": "Bears",
        "jersey_number": 83,
        "name": "Javon Wims",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 31,
        "name": "Chris Banjo",
        "position": "SS"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 65,
        "name": "Alex Cappa",
        "position": "LG"
      },
      {
        "team": "Saints",
        "jersey_number": 33,
        "name": "Trey Edmunds",
        "position": "HB"
      },
      {
        "team": "Saints",
        "jersey_number": 34,
        "name": "Justin Hardee",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 25,
        "name": "De'Vante Harris",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 36,
        "name": "Daniel Lasco",
        "position": "HB"
      },
      {
        "team": "Saints",
        "jersey_number": 39,
        "name": "Kamrin Moore",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 97,
        "name": "Al-Quadin Muhammad",
        "position": "RE"
      },
      {
        "team": "Falcons",
        "jersey_number": 68,
        "name": "Austin Pasztor",
        "position": "RT"
      },
      {
        "team": "Falcons",
        "jersey_number": 74,
        "name": "Ty Sambrailo",
        "position": "LT"
      },
      {
        "team": "Falcons",
        "jersey_number": 8,
        "name": "Matt Schaub",
        "position": "QB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 31,
        "name": "Jordan Whitehead",
        "position": "SS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 54,
        "name": "Bryson Albright",
        "position": "RE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 1,
        "name": "Alex Carter",
        "position": "CB"
      },
      {
        "team": "Rams",
        "jersey_number": 69,
        "name": "Sebastian Joseph-Day",
        "position": "DT"
      },
      {
        "team": "49ers",
        "jersey_number": 38,
        "name": "Antone Exum Jr",
        "position": "SS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 74,
        "name": "George Fant",
        "position": "RT"
      },
      {
        "team": "49ers",
        "jersey_number": 83,
        "name": "Cole Hikutini",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 56,
        "name": "Scooby Wright III",
        "position": "MLB"
      },
      {
        "team": "49ers",
        "jersey_number": 82,
        "name": "Richie James",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 59,
        "name": "Micah Kiser",
        "position": "MLB"
      },
      {
        "team": "49ers",
        "jersey_number": 47,
        "name": "Elijah Lee",
        "position": "ROLB"
      },
      {
        "team": "Rams",
        "jersey_number": 58,
        "name": "Cory Littleton",
        "position": "MLB"
      },
      {
        "team": "49ers",
        "jersey_number": 26,
        "name": "Greg Mabin",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 53,
        "name": "Mark Nzeocha",
        "position": "ROLB"
      },
      {
        "team": "Rams",
        "jersey_number": 45,
        "name": "Ogbonnia Okoronkwo",
        "position": "ROLB"
      },
      {
        "team": "49ers",
        "jersey_number": 40,
        "name": "D.J. Reed",
        "position": "CB"
      },
      {
        "team": "Rams",
        "jersey_number": 92,
        "name": "Tanzel Smart",
        "position": "RE"
      },
      {
        "team": "49ers",
        "jersey_number": 95,
        "name": "Kentavius Street",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 23,
        "name": "Neiko Thorpe",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 89,
        "name": "Cole Wick",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 68,
        "name": "Isaac Asiata",
        "position": "LG"
      },
      {
        "team": "Dolphins",
        "jersey_number": 9,
        "name": "David Fales",
        "position": "QB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 62,
        "name": "Ted Larsen",
        "position": "RG"
      },
      {
        "team": "Bills",
        "jersey_number": 41,
        "name": "Breon Borders",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 80,
        "name": "Jason Croom",
        "position": "TE"
      },
      {
        "team": "Bills",
        "jersey_number": 42,
        "name": "Patrick DiMarco",
        "position": "FB"
      },
      {
        "team": "Jets",
        "jersey_number": 49,
        "name": "Dylan Donahue",
        "position": "ROLB"
      },
      {
        "team": "Jets",
        "jersey_number": 57,
        "name": "Obum Gwacham",
        "position": "ROLB"
      },
      {
        "team": "Jets",
        "jersey_number": 46,
        "name": "Neville Hewitt",
        "position": "MLB"
      },
      {
        "team": "Bills",
        "jersey_number": 38,
        "name": "L.J. McCray II",
        "position": "SS"
      },
      {
        "team": "Bills",
        "jersey_number": 31,
        "name": "Dean Marlowe",
        "position": "FS"
      },
      {
        "team": "Bills",
        "jersey_number": 30,
        "name": "Lafayette Pitts",
        "position": "CB"
      },
      {
        "team": "Bills",
        "jersey_number": 87,
        "name": "Austin Proehl",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 64,
        "name": "Matt Tobin",
        "position": "RT"
      },
      {
        "team": "Steelers",
        "jersey_number": 99,
        "name": "Keion Adams",
        "position": "ROLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 27,
        "name": "Marcus Allen",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 21,
        "name": "Deshon Elliott",
        "position": "FS"
      },
      {
        "team": "Bengals",
        "jersey_number": 50,
        "name": "Jordan Evans",
        "position": "LOLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 42,
        "name": "Clayton Fejedelem",
        "position": "SS"
      },
      {
        "team": "Steelers",
        "jersey_number": 65,
        "name": "Jerald Hawkins",
        "position": "LT"
      },
      {
        "team": "Steelers",
        "jersey_number": 44,
        "name": "Tyler Matakevich",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 31,
        "name": "Kai Nacua",
        "position": "FS"
      },
      {
        "team": "Steelers",
        "jersey_number": 76,
        "name": "Chukwuma Okorafor",
        "position": "RT"
      },
      {
        "team": "Bengals",
        "jersey_number": 38,
        "name": "Darius Phillips",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 86,
        "name": "Mason Schreck",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 95,
        "name": "Zach Sieler",
        "position": "LE"
      },
      {
        "team": "Browns",
        "jersey_number": 55,
        "name": "Genard Avery",
        "position": "LOLB"
      },
      {
        "team": "Texans",
        "jersey_number": 18,
        "name": "Sammie Coates Jr",
        "position": "WR"
      },
      {
        "team": "Browns",
        "jersey_number": 72,
        "name": "Shon Coleman",
        "position": "LT"
      },
      {
        "team": "Browns",
        "jersey_number": 42,
        "name": "Justin Currie",
        "position": "FS"
      },
      {
        "team": "Colts",
        "jersey_number": 59,
        "name": "Jeremiah George",
        "position": "MLB"
      },
      {
        "team": "Browns",
        "jersey_number": 41,
        "name": "Michael Jordan",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 35,
        "name": "Jermaine Kelly Jr",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 58,
        "name": "Peter Kalambayi",
        "position": "ROLB"
      },
      {
        "team": "Texans",
        "jersey_number": 49,
        "name": "Josh Keyes",
        "position": "ROLB"
      },
      {
        "team": "Texans",
        "jersey_number": 75,
        "name": "Martinas Rankin",
        "position": "LT"
      },
      {
        "team": "Browns",
        "jersey_number": 18,
        "name": "Damion Ratley",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 54,
        "name": "Caraun Reid",
        "position": "DT"
      },
      {
        "team": "Browns",
        "jersey_number": 78,
        "name": "Greg Robinson",
        "position": "LT"
      },
      {
        "team": "Browns",
        "jersey_number": 36,
        "name": "Derron Smith",
        "position": "SS"
      },
      {
        "team": "Browns",
        "jersey_number": 71,
        "name": "Donald Stephenson",
        "position": "RT"
      },
      {
        "team": "Colts",
        "jersey_number": 86,
        "name": "Erik Swoope",
        "position": "TE"
      },
      {
        "team": "Browns",
        "jersey_number": 33,
        "name": "Simeon Thomas",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 53,
        "name": "Daren Bates",
        "position": "MLB"
      },
      {
        "team": "Titans",
        "jersey_number": 10,
        "name": "Michael Campanaro",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 48,
        "name": "Leon Jacobs",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 47,
        "name": "Josey Jewell",
        "position": "MLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 6,
        "name": "Cody Kessler",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 79,
        "name": "Cyrus Kouandjio",
        "position": "LT"
      },
      {
        "team": "Broncos",
        "jersey_number": 53,
        "name": "Deiontrez Mount",
        "position": "LOLB"
      },
      {
        "team": "Titans",
        "jersey_number": 50,
        "name": "Nate Palmer",
        "position": "MLB"
      },
      {
        "team": "Titans",
        "jersey_number": 57,
        "name": "Gimel President",
        "position": "ROLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 49,
        "name": "Marcus Rush",
        "position": "LOLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 29,
        "name": "Sammy Seamster",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 77,
        "name": "Billy Turner",
        "position": "RG"
      },
      {
        "team": "Titans",
        "jersey_number": 52,
        "name": "Aaron Wallace",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 93,
        "name": "DeShawn Williams",
        "position": "DT"
      },
      {
        "team": "Raiders",
        "jersey_number": 74,
        "name": "Vadal Alexander",
        "position": "RT"
      },
      {
        "team": "Raiders",
        "jersey_number": 95,
        "name": "Fadol Brown",
        "position": "RE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 80,
        "name": "Jehu Chesson",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 43,
        "name": "Michael Davis",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 79,
        "name": "Parker Ehinger",
        "position": "LG"
      },
      {
        "team": "Raiders",
        "jersey_number": 76,
        "name": "Jon Feliciano",
        "position": "RG"
      },
      {
        "team": "Chiefs",
        "jersey_number": 4,
        "name": "Chad Henne",
        "position": "QB"
      },
      {
        "team": "Chargers",
        "jersey_number": 50,
        "name": "Hayes Pullard III",
        "position": "MLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 44,
        "name": "Dorian O'Daniel",
        "position": "MLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 48,
        "name": "Terrance Smith",
        "position": "MLB"
      },
      {
        "team": "Raiders",
        "jersey_number": 57,
        "name": "Azeem Victor",
        "position": "MLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 33,
        "name": "Josh Adams",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 89,
        "name": "Jerell Adams",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 18,
        "name": "Shelton Gibson",
        "position": "WR"
      },
      {
        "team": "Cowboys",
        "jersey_number": 20,
        "name": "Marqueston Huff",
        "position": "FS"
      },
      {
        "team": "Giants",
        "jersey_number": 80,
        "name": "RJ McIntosh",
        "position": "DT"
      },
      {
        "team": "Eagles",
        "jersey_number": 83,
        "name": "Joshua Perkins",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 69,
        "name": "Matt Pryor",
        "position": "RG"
      },
      {
        "team": "Eagles",
        "jersey_number": 48,
        "name": "LaRoy Reynolds",
        "position": "MLB"
      },
      {
        "team": "Giants",
        "jersey_number": 99,
        "name": "Robert Thomas",
        "position": "DT"
      },
      {
        "team": "Eagles",
        "jersey_number": 59,
        "name": "Joe Walker",
        "position": "MLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 51,
        "name": "Jihad Ward",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 63,
        "name": "Chad Wheeler",
        "position": "LT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 39,
        "name": "Marquez White",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 34,
        "name": "Trey Williams",
        "position": "HB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 64,
        "name": "Antwaun Woods",
        "position": "DT"
      },
      {
        "team": "Packers",
        "jersey_number": 79,
        "name": "Kofi Amichia",
        "position": "RG"
      },
      {
        "team": "Lions",
        "jersey_number": 58,
        "name": "Alex Barrett",
        "position": "LE"
      },
      {
        "team": "Lions",
        "jersey_number": 46,
        "name": "Nick Bawden",
        "position": "FB"
      },
      {
        "team": "Lions",
        "jersey_number": 51,
        "name": "Adam Bisnowaty",
        "position": "RT"
      },
      {
        "team": "Packers",
        "jersey_number": 19,
        "name": "Equanimeous St. Brown",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 69,
        "name": "T.J. Clemmings",
        "position": "RT"
      },
      {
        "team": "Packers",
        "jersey_number": 25,
        "name": "Marwin Evans",
        "position": "SS"
      },
      {
        "team": "Lions",
        "jersey_number": 95,
        "name": "Toby Johnson",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 73,
        "name": "Wesley Johnson",
        "position": "LG"
      },
      {
        "team": "Lions",
        "jersey_number": 54,
        "name": "Steve Longa",
        "position": "LOLB"
      },
      {
        "team": "Packers",
        "jersey_number": 64,
        "name": "Justin McCray",
        "position": "RG"
      },
      {
        "team": "Lions",
        "jersey_number": 99,
        "name": "Christian Ringo",
        "position": "DT"
      },
      {
        "team": "Packers",
        "jersey_number": 78,
        "name": "Jason Spriggs",
        "position": "LT"
      },
      {
        "team": "Lions",
        "jersey_number": 36,
        "name": "Dwayne Washington",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 79,
        "name": "Kenny Wiggins",
        "position": "LG"
      },
      {
        "team": "Vikings",
        "jersey_number": 61,
        "name": "Ade Aruna",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 85,
        "name": "Evan Baylis",
        "position": "TE"
      },
      {
        "team": "Bears",
        "jersey_number": 84,
        "name": "Ben Braunecker",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 40,
        "name": "Kentrell Brothers",
        "position": "MLB"
      },
      {
        "team": "Vikings",
        "jersey_number": 13,
        "name": "Stacy Coley",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 4,
        "name": "Chase Daniel",
        "position": "QB"
      },
      {
        "team": "Panthers",
        "jersey_number": 31,
        "name": "Lorenzo Doss",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 49,
        "name": "Kylie Fitts",
        "position": "LOLB"
      },
      {
        "team": "Bears",
        "jersey_number": 35,
        "name": "Doran Grant",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 47,
        "name": "Isaiah Irving",
        "position": "ROLB"
      },
      {
        "team": "Panthers",
        "jersey_number": 53,
        "name": "Ben Jacobs",
        "position": "LOLB"
      },
      {
        "team": "Vikings",
        "jersey_number": 27,
        "name": "Jayron Kearse",
        "position": "SS"
      },
      {
        "team": "Bears",
        "jersey_number": 78,
        "name": "Matthew McCants",
        "position": "LT"
      },
      {
        "team": "Panthers",
        "jersey_number": 77,
        "name": "Zach Moore",
        "position": "RE"
      },
      {
        "team": "Panthers",
        "jersey_number": 72,
        "name": "Taylor Moton",
        "position": "RT"
      },
      {
        "team": "Panthers",
        "jersey_number": 52,
        "name": "Jared Norris",
        "position": "LOLB"
      },
      {
        "team": "Panthers",
        "jersey_number": 74,
        "name": "Kendrick Norton",
        "position": "DT"
      },
      {
        "team": "Panthers",
        "jersey_number": 37,
        "name": "Dezmen Southward",
        "position": "SS"
      },
      {
        "team": "Bears",
        "jersey_number": 79,
        "name": "Bradley Sowell",
        "position": "LT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 59,
        "name": "Devante Bond",
        "position": "LOLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 49,
        "name": "Riley Bullough",
        "position": "LOLB"
      },
      {
        "team": "Saints",
        "jersey_number": 45,
        "name": "Garrett Griffin",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 27,
        "name": "Natrell Jamerson",
        "position": "FS"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 67,
        "name": "Mike Liedtke",
        "position": "RT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 79,
        "name": "Pat O'Connor",
        "position": "LE"
      },
      {
        "team": "Falcons",
        "jersey_number": 82,
        "name": "Logan Paulsen",
        "position": "TE"
      },
      {
        "team": "Falcons",
        "jersey_number": 93,
        "name": "Garrison Smith",
        "position": "DT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 33,
        "name": "Christian Campbell",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 64,
        "name": "Mason Cole",
        "position": "C"
      },
      {
        "team": "Rams",
        "jersey_number": 57,
        "name": "John Franklin-Myers",
        "position": "RE"
      },
      {
        "team": "49ers",
        "jersey_number": 76,
        "name": "Garry Gilliam",
        "position": "RT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 69,
        "name": "Will Holden",
        "position": "LT"
      },
      {
        "team": "Rams",
        "jersey_number": 73,
        "name": "Cornelius Lucas",
        "position": "LT"
      },
      {
        "team": "49ers",
        "jersey_number": 31,
        "name": "Raheem Mostert",
        "position": "HB"
      },
      {
        "team": "Rams",
        "jersey_number": 31,
        "name": "Taurean Nixon",
        "position": "CB"
      },
      {
        "team": "Rams",
        "jersey_number": 70,
        "name": "Joseph Noteboom",
        "position": "LT"
      },
      {
        "team": "Rams",
        "jersey_number": 25,
        "name": "Kevin Peterson",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 55,
        "name": "Pita Taumoepenu",
        "position": "LOLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 77,
        "name": "Jesse Davis",
        "position": "RG"
      },
      {
        "team": "Dolphins",
        "jersey_number": 57,
        "name": "Terence Garvin",
        "position": "ROLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 75,
        "name": "Cameron Malveaux",
        "position": "LE"
      },
      {
        "team": "Patriots",
        "jersey_number": 72,
        "name": "Luke Bowanko",
        "position": "C"
      },
      {
        "team": "Jets",
        "jersey_number": 34,
        "name": "Jeremy Clark",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 74,
        "name": "Cole Croston",
        "position": "LG"
      },
      {
        "team": "Jets",
        "jersey_number": 70,
        "name": "Dakota Dozier",
        "position": "LG"
      },
      {
        "team": "Jets",
        "jersey_number": 94,
        "name": "Folorunso Fatukasi",
        "position": "DT"
      },
      {
        "team": "Bills",
        "jersey_number": 94,
        "name": "Rickey Hatley",
        "position": "DT"
      },
      {
        "team": "Bills",
        "jersey_number": 40,
        "name": "Tanner Vallejo",
        "position": "MLB"
      },
      {
        "team": "Bills",
        "jersey_number": 74,
        "name": "De'Ondre Wesley",
        "position": "LT"
      },
      {
        "team": "Bengals",
        "jersey_number": 12,
        "name": "Alex Erickson",
        "position": "WR"
      },
      {
        "team": "Steelers",
        "jersey_number": 69,
        "name": "Bryce Harris",
        "position": "LT"
      },
      {
        "team": "Ravens",
        "jersey_number": 43,
        "name": "Jaylen Hill",
        "position": "CB"
      },
      {
        "team": "Steelers",
        "jersey_number": 82,
        "name": "Ryan Malleck",
        "position": "TE"
      },
      {
        "team": "Bengals",
        "jersey_number": 29,
        "name": "Tony McRae",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 62,
        "name": "Alex Redmond",
        "position": "RG"
      },
      {
        "team": "Bengals",
        "jersey_number": 91,
        "name": "Josh Tupou",
        "position": "DT"
      },
      {
        "team": "Bengals",
        "jersey_number": 63,
        "name": "Christian Westerman",
        "position": "LG"
      },
      {
        "team": "Bengals",
        "jersey_number": 39,
        "name": "Jarveon Williams",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 52,
        "name": "James Burgess Jr",
        "position": "MLB"
      },
      {
        "team": "Texans",
        "jersey_number": 70,
        "name": "Julie'n Davenport",
        "position": "LT"
      },
      {
        "team": "Texans",
        "jersey_number": 23,
        "name": "Kurtis Drummond",
        "position": "SS"
      },
      {
        "team": "Texans",
        "jersey_number": 67,
        "name": "Marcus Hardison",
        "position": "DT"
      },
      {
        "team": "Colts",
        "jersey_number": 96,
        "name": "Anthony Johnson",
        "position": "LE"
      },
      {
        "team": "Texans",
        "jersey_number": 74,
        "name": "Kendall Lamm",
        "position": "LT"
      },
      {
        "team": "Colts",
        "jersey_number": 28,
        "name": "Chris Milton",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 45,
        "name": "Jay Prosch",
        "position": "FB"
      },
      {
        "team": "Texans",
        "jersey_number": 77,
        "name": "David Quessenberry",
        "position": "LG"
      },
      {
        "team": "Texans",
        "jersey_number": 83,
        "name": "Jordan Thomas",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 14,
        "name": "Chris Thompson",
        "position": "WR"
      },
      {
        "team": "Texans",
        "jersey_number": 34,
        "name": "Dee Virgin",
        "position": "CB"
      },
      {
        "team": "Browns",
        "jersey_number": 40,
        "name": "Danny Vitale",
        "position": "FB"
      },
      {
        "team": "Colts",
        "jersey_number": 67,
        "name": "Jeremy Vujnovich",
        "position": "LG"
      },
      {
        "team": "Texans",
        "jersey_number": 11,
        "name": "DeAndrew White",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 82,
        "name": "Kasen Williams",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 40,
        "name": "Tommy Bohanon",
        "position": "FB"
      },
      {
        "team": "Titans",
        "jersey_number": 44,
        "name": "Josh Carraway",
        "position": "ROLB"
      },
      {
        "team": "Titans",
        "jersey_number": 76,
        "name": "Xavier Su'a-Filo",
        "position": "RG"
      },
      {
        "team": "Titans",
        "jersey_number": 20,
        "name": "Demontre Hurst",
        "position": "SS"
      },
      {
        "team": "Broncos",
        "jersey_number": 32,
        "name": "Andy Janovich",
        "position": "FB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 76,
        "name": "Will Richardson Jr",
        "position": "RT"
      },
      {
        "team": "Titans",
        "jersey_number": 71,
        "name": "Dennis Kelly",
        "position": "RT"
      },
      {
        "team": "Titans",
        "jersey_number": 61,
        "name": "Corey Levin",
        "position": "RG"
      },
      {
        "team": "Jaguars",
        "jersey_number": 87,
        "name": "Scott Orndoff",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 52,
        "name": "Donald Payne",
        "position": "ROLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 75,
        "name": "William Poehls",
        "position": "RT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 64,
        "name": "Chris Reed",
        "position": "LG"
      },
      {
        "team": "Jaguars",
        "jersey_number": 69,
        "name": "Tyler Shatley",
        "position": "C"
      },
      {
        "team": "Broncos",
        "jersey_number": 35,
        "name": "Dymonte Thomas",
        "position": "FS"
      },
      {
        "team": "Titans",
        "jersey_number": 41,
        "name": "Brynden Trawick",
        "position": "FS"
      },
      {
        "team": "Titans",
        "jersey_number": 72,
        "name": "Julius Warmsley",
        "position": "RE"
      },
      {
        "team": "Broncos",
        "jersey_number": 75,
        "name": "Menelik Watson",
        "position": "RT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 30,
        "name": "Algernon Brown",
        "position": "FB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 75,
        "name": "Cameron Erving",
        "position": "LT"
      },
      {
        "team": "Chiefs",
        "jersey_number": 34,
        "name": "Leon McQuay III",
        "position": "SS"
      },
      {
        "team": "Chargers",
        "jersey_number": 7,
        "name": "Cardale Jones",
        "position": "QB"
      },
      {
        "team": "Raiders",
        "jersey_number": 26,
        "name": "Shalom Luani",
        "position": "FS"
      },
      {
        "team": "Chargers",
        "jersey_number": 73,
        "name": "Spencer Pulley",
        "position": "C"
      },
      {
        "team": "Chargers",
        "jersey_number": 23,
        "name": "Jeff Richards",
        "position": "CB"
      },
      {
        "team": "Raiders",
        "jersey_number": 71,
        "name": "David Sharpe",
        "position": "LT"
      },
      {
        "team": "Chargers",
        "jersey_number": 5,
        "name": "Nelson Spruce",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 69,
        "name": "Jylan Ware",
        "position": "RT"
      },
      {
        "team": "Chargers",
        "jersey_number": 34,
        "name": "Derek Watt",
        "position": "FB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 70,
        "name": "Bryan Witzmann",
        "position": "RT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 59,
        "name": "Chris Covington",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 65,
        "name": "A.J. Francis",
        "position": "LE"
      },
      {
        "team": "Giants",
        "jersey_number": 34,
        "name": "Grant Haley",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 38,
        "name": "Matt Jones",
        "position": "HB"
      },
      {
        "team": "Giants",
        "jersey_number": 48,
        "name": "Ryan O'Malley",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 76,
        "name": "Joe Ostman",
        "position": "RE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 92,
        "name": "Brian Price",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 83,
        "name": "Kalif Raymond",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 60,
        "name": "Kristjan Sokoli",
        "position": "RG"
      },
      {
        "team": "Cowboys",
        "jersey_number": 84,
        "name": "David Wells",
        "position": "TE"
      },
      {
        "team": "Giants",
        "jersey_number": 29,
        "name": "Teddy Williams",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 66,
        "name": "Tony Bergstrom",
        "position": "LG"
      },
      {
        "team": "Redskins",
        "jersey_number": 39,
        "name": "Kapri Bibbs",
        "position": "HB"
      },
      {
        "team": "Packers",
        "jersey_number": 44,
        "name": "Donatello Brown",
        "position": "CB"
      },
      {
        "team": "Redskins",
        "jersey_number": 22,
        "name": "Deshazor Everett",
        "position": "SS"
      },
      {
        "team": "Redskins",
        "jersey_number": 51,
        "name": "Shaun Dion Hamilton",
        "position": "MLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 20,
        "name": "Danny Johnson",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 61,
        "name": "Cole Madison",
        "position": "RG"
      },
      {
        "team": "Lions",
        "jersey_number": 72,
        "name": "Brian Mihalik",
        "position": "LT"
      },
      {
        "team": "Packers",
        "jersey_number": 62,
        "name": "Lucas Patrick",
        "position": "LG"
      },
      {
        "team": "Redskins",
        "jersey_number": 97,
        "name": "Tim Settle",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 84,
        "name": "Hakeem Valles",
        "position": "TE"
      },
      {
        "team": "Lions",
        "jersey_number": 45,
        "name": "Charles Washington",
        "position": "FS"
      },
      {
        "team": "Packers",
        "jersey_number": 10,
        "name": "DeAngelo Yancey",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 64,
        "name": "Josh Andrews",
        "position": "LG"
      },
      {
        "team": "Panthers",
        "jersey_number": 56,
        "name": "Jermaine Carter Jr",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 69,
        "name": "Rashaad Coward",
        "position": "RE"
      },
      {
        "team": "Panthers",
        "jersey_number": 36,
        "name": "Demetrious Cox",
        "position": "SS"
      },
      {
        "team": "Vikings",
        "jersey_number": 73,
        "name": "Colby Gossett",
        "position": "LG"
      },
      {
        "team": "Vikings",
        "jersey_number": 69,
        "name": "Rashod Hill",
        "position": "LT"
      },
      {
        "team": "Panthers",
        "jersey_number": 82,
        "name": "Chris Manhertz",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 39,
        "name": "Jack Tocho",
        "position": "SS"
      },
      {
        "team": "Vikings",
        "jersey_number": 50,
        "name": "Eric Wilson",
        "position": "LOLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 77,
        "name": "Caleb Benenoch",
        "position": "RT"
      },
      {
        "team": "Falcons",
        "jersey_number": 75,
        "name": "Jamil Douglas",
        "position": "RG"
      },
      {
        "team": "Saints",
        "jersey_number": 61,
        "name": "Josh LeRibeus",
        "position": "C"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 43,
        "name": "Cameron Lynch",
        "position": "ROLB"
      },
      {
        "team": "Saints",
        "jersey_number": 37,
        "name": "Arthur Maulet",
        "position": "CB"
      },
      {
        "team": "Saints",
        "jersey_number": 65,
        "name": "Michael Ola",
        "position": "LT"
      },
      {
        "team": "Falcons",
        "jersey_number": 54,
        "name": "Foyesade Oluokun",
        "position": "MLB"
      },
      {
        "team": "Falcons",
        "jersey_number": 71,
        "name": "Wes Schweitzer",
        "position": "RG"
      },
      {
        "team": "Rams",
        "jersey_number": 55,
        "name": "Brian Allen",
        "position": "C"
      },
      {
        "team": "Seahawks",
        "jersey_number": 66,
        "name": "Willie Beavers",
        "position": "RT"
      },
      {
        "team": "Rams",
        "jersey_number": 67,
        "name": "Chunky Clements",
        "position": "DT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 21,
        "name": "DeAndre Elliott",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 37,
        "name": "Tre Flowers",
        "position": "SS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 73,
        "name": "Jamarco Jones",
        "position": "LT"
      },
      {
        "team": "Rams",
        "jersey_number": 53,
        "name": "Justin Lawler",
        "position": "LE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 70,
        "name": "Rees Odhiambo",
        "position": "RG"
      },
      {
        "team": "Seahawks",
        "jersey_number": 64,
        "name": "Jordan Roos",
        "position": "LG"
      },
      {
        "team": "Rams",
        "jersey_number": 56,
        "name": "Garrett Sickels",
        "position": "LOLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 24,
        "name": "Mike Tyson",
        "position": "SS"
      },
      {
        "team": "Rams",
        "jersey_number": 49,
        "name": "Trevon Young",
        "position": "ROLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 24,
        "name": "Torry McTyer",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 51,
        "name": "Quentin Poling",
        "position": "ROLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 26,
        "name": "Maurice Smith",
        "position": "SS"
      },
      {
        "team": "Dolphins",
        "jersey_number": 79,
        "name": "Sam Young",
        "position": "LT"
      },
      {
        "team": "Bills",
        "jersey_number": 16,
        "name": "Malachi Dupre",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 67,
        "name": "Ulrick John",
        "position": "LT"
      },
      {
        "team": "Jets",
        "jersey_number": 31,
        "name": "Derrick Jones",
        "position": "CB"
      },
      {
        "team": "Patriots",
        "jersey_number": 36,
        "name": "Brandon King",
        "position": "FS"
      },
      {
        "team": "Bills",
        "jersey_number": 53,
        "name": "Xavier Woodson-Luster",
        "position": "MLB"
      },
      {
        "team": "Jets",
        "jersey_number": 17,
        "name": "Charone Peake",
        "position": "WR"
      },
      {
        "team": "Bills",
        "jersey_number": 60,
        "name": "Adam Redmond",
        "position": "LG"
      },
      {
        "team": "Patriots",
        "jersey_number": 57,
        "name": "Christian Sam",
        "position": "MLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 31,
        "name": "Nat Berhe",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 53,
        "name": "Bam Bradley",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 36,
        "name": "Chuck Clark",
        "position": "FS"
      },
      {
        "team": "Ravens",
        "jersey_number": 71,
        "name": "Jermaine Eluemunor",
        "position": "RG"
      },
      {
        "team": "Bengals",
        "jersey_number": 23,
        "name": "Brian Hill",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 3,
        "name": "Landry Jones",
        "position": "QB"
      },
      {
        "team": "Bengals",
        "jersey_number": 56,
        "name": "Hardy Nickerson",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 68,
        "name": "Matt Skura",
        "position": "C"
      },
      {
        "team": "Colts",
        "jersey_number": 69,
        "name": "Deyshawn Bond",
        "position": "C"
      },
      {
        "team": "Texans",
        "jersey_number": 21,
        "name": "Tyler Ervin",
        "position": "HB"
      },
      {
        "team": "Colts",
        "jersey_number": 39,
        "name": "Josh Ferguson",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 67,
        "name": "Avery Gennesy",
        "position": "RG"
      },
      {
        "team": "Texans",
        "jersey_number": 54,
        "name": "LaTroy Lewis",
        "position": "ROLB"
      },
      {
        "team": "Texans",
        "jersey_number": 65,
        "name": "Greg Mancz",
        "position": "C"
      },
      {
        "team": "Colts",
        "jersey_number": 48,
        "name": "Skai Moore",
        "position": "ROLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 20,
        "name": "Jamal Carter",
        "position": "SS"
      },
      {
        "team": "Broncos",
        "jersey_number": 64,
        "name": "J.J. Dielman",
        "position": "C"
      },
      {
        "team": "Titans",
        "jersey_number": 11,
        "name": "Luke Falk",
        "position": "QB"
      },
      {
        "team": "Titans",
        "jersey_number": 40,
        "name": "Rico Gafford",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 52,
        "name": "Jerrol Garcia-Williams",
        "position": "MLB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 43,
        "name": "Quenton Meeks",
        "position": "CB"
      },
      {
        "team": "Broncos",
        "jersey_number": 89,
        "name": "Brian Parker",
        "position": "TE"
      },
      {
        "team": "Broncos",
        "jersey_number": 90,
        "name": "Kyle Peko",
        "position": "DT"
      },
      {
        "team": "Titans",
        "jersey_number": 68,
        "name": "Cody Wichmann",
        "position": "LG"
      },
      {
        "team": "Raiders",
        "jersey_number": 18,
        "name": "Connor Cook",
        "position": "QB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 65,
        "name": "Jordan Devey",
        "position": "C"
      },
      {
        "team": "Chiefs",
        "jersey_number": 43,
        "name": "Makinton Dorleant",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 82,
        "name": "Alex Ellis",
        "position": "TE"
      },
      {
        "team": "Chargers",
        "jersey_number": 36,
        "name": "Brandon Facyson",
        "position": "CB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 64,
        "name": "Dillon Gordon",
        "position": "LT"
      },
      {
        "team": "Chargers",
        "jersey_number": 61,
        "name": "Scott Quessenberry",
        "position": "C"
      },
      {
        "team": "Raiders",
        "jersey_number": 67,
        "name": "Ian Silberman",
        "position": "LG"
      },
      {
        "team": "Chiefs",
        "jersey_number": 31,
        "name": "Darrel Williams",
        "position": "HB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 93,
        "name": "Richard Ash",
        "position": "DT"
      },
      {
        "team": "Eagles",
        "jersey_number": 37,
        "name": "De'Vante Bausby",
        "position": "CB"
      },
      {
        "team": "Eagles",
        "jersey_number": 76,
        "name": "Taylor Hart",
        "position": "RT"
      },
      {
        "team": "Eagles",
        "jersey_number": 66,
        "name": "Bruce Hector",
        "position": "DT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 67,
        "name": "Damien Mama",
        "position": "RG"
      },
      {
        "team": "Cowboys",
        "jersey_number": 63,
        "name": "Marcus Martin",
        "position": "LG"
      },
      {
        "team": "Giants",
        "jersey_number": 35,
        "name": "Curtis Riley",
        "position": "FS"
      },
      {
        "team": "Eagles",
        "jersey_number": 73,
        "name": "Isaac Seumalo",
        "position": "C"
      },
      {
        "team": "Giants",
        "jersey_number": 43,
        "name": "Shane Smith",
        "position": "FB"
      },
      {
        "team": "Packers",
        "jersey_number": 74,
        "name": "Byron Bell",
        "position": "RT"
      },
      {
        "team": "Lions",
        "jersey_number": 8,
        "name": "Matt Cassel",
        "position": "QB"
      },
      {
        "team": "Lions",
        "jersey_number": 66,
        "name": "Joe Dahl",
        "position": "LG"
      },
      {
        "team": "Redskins",
        "jersey_number": 13,
        "name": "Maurice Harris",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 34,
        "name": "Byron Marshall",
        "position": "HB"
      },
      {
        "team": "Redskins",
        "jersey_number": 12,
        "name": "Colt McCoy",
        "position": "QB"
      },
      {
        "team": "Packers",
        "jersey_number": 68,
        "name": "Kyle Murphy",
        "position": "RT"
      },
      {
        "team": "Lions",
        "jersey_number": 70,
        "name": "Corey Robinson",
        "position": "RT"
      },
      {
        "team": "Lions",
        "jersey_number": 78,
        "name": "Jeremiah Valoaga",
        "position": "RE"
      },
      {
        "team": "Bears",
        "jersey_number": 52,
        "name": "Jonathan Anderson",
        "position": "MLB"
      },
      {
        "team": "Panthers",
        "jersey_number": 40,
        "name": "Alex Armah",
        "position": "FB"
      },
      {
        "team": "Bears",
        "jersey_number": 26,
        "name": "Deon Bush",
        "position": "SS"
      },
      {
        "team": "Panthers",
        "jersey_number": 76,
        "name": "Blaine Clausell",
        "position": "LT"
      },
      {
        "team": "Vikings",
        "jersey_number": 57,
        "name": "Devante Downs",
        "position": "MLB"
      },
      {
        "team": "Bears",
        "jersey_number": 29,
        "name": "Rashard Fant",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 32,
        "name": "Deiondre' Hall",
        "position": "SS"
      },
      {
        "team": "Vikings",
        "jersey_number": 37,
        "name": "Holton Hill",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 21,
        "name": "Michael Joseph",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 32,
        "name": "Cole Luke",
        "position": "CB"
      },
      {
        "team": "Panthers",
        "jersey_number": 71,
        "name": "Jeremiah Sirles",
        "position": "LG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 82,
        "name": "Antony Auclair",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 5,
        "name": "J.T. Barrett",
        "position": "QB"
      },
      {
        "team": "Saints",
        "jersey_number": 80,
        "name": "Austin Carr",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 72,
        "name": "Adam Gettis",
        "position": "RG"
      },
      {
        "team": "Falcons",
        "jersey_number": 64,
        "name": "Sean Harlow",
        "position": "C"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 39,
        "name": "Isaiah Johnson",
        "position": "FS"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 75,
        "name": "DaVonte Lambert",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 73,
        "name": "Rick Leonard",
        "position": "RT"
      },
      {
        "team": "Saints",
        "jersey_number": 11,
        "name": "Tommylee Lewis",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 30,
        "name": "Ricky Ortiz",
        "position": "FB"
      },
      {
        "team": "Falcons",
        "jersey_number": 56,
        "name": "Anthony Winbush",
        "position": "RE"
      },
      {
        "team": "Rams",
        "jersey_number": 66,
        "name": "Austin Blythe",
        "position": "LG"
      },
      {
        "team": "49ers",
        "jersey_number": 13,
        "name": "Aaron Burbridge",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 52,
        "name": "Jeremy Cash",
        "position": "ROLB"
      },
      {
        "team": "Rams",
        "jersey_number": 41,
        "name": "Marqui Christian",
        "position": "FS"
      },
      {
        "team": "Rams",
        "jersey_number": 10,
        "name": "Pharoh Cooper",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 50,
        "name": "Brock Coyle",
        "position": "MLB"
      },
      {
        "team": "Rams",
        "jersey_number": 64,
        "name": "Jamil Demby",
        "position": "LG"
      },
      {
        "team": "Rams",
        "jersey_number": 60,
        "name": "Jake Eldrenkamp",
        "position": "RG"
      },
      {
        "team": "49ers",
        "jersey_number": 49,
        "name": "Marcell Harris",
        "position": "SS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 53,
        "name": "Joey Hunt",
        "position": "C"
      },
      {
        "team": "Rams",
        "jersey_number": 41,
        "name": "Larry Rose III",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 14,
        "name": "Marcus Johnson",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 27,
        "name": "Isaiah Johnson",
        "position": "FS"
      },
      {
        "team": "Seahawks",
        "jersey_number": 59,
        "name": "Jacob Martin",
        "position": "LOLB"
      },
      {
        "team": "49ers",
        "jersey_number": 33,
        "name": "Tarvarus McFadden",
        "position": "CB"
      },
      {
        "team": "49ers",
        "jersey_number": 33,
        "name": "Jeremy McNichols",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 83,
        "name": "David Moore",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 82,
        "name": "Johnny Mundt",
        "position": "TE"
      },
      {
        "team": "49ers",
        "jersey_number": 71,
        "name": "Pace Murphy",
        "position": "RT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 58,
        "name": "Edmond Robinson",
        "position": "ROLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 15,
        "name": "Rashad Ross",
        "position": "WR"
      },
      {
        "team": "Cardinals",
        "jersey_number": 73,
        "name": "John Wetzel",
        "position": "LT"
      },
      {
        "team": "49ers",
        "jersey_number": 78,
        "name": "Darrell Williams",
        "position": "LT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 40,
        "name": "Taveze Calhoun",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 34,
        "name": "Senorise Perry",
        "position": "HB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 72,
        "name": "Eric Smith",
        "position": "RT"
      },
      {
        "team": "Bills",
        "jersey_number": 19,
        "name": "Quan Bray",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 50,
        "name": "Nicholas Grigsby",
        "position": "MLB"
      },
      {
        "team": "Bills",
        "jersey_number": 68,
        "name": "Conor McDermott",
        "position": "RT"
      },
      {
        "team": "Jets",
        "jersey_number": 79,
        "name": "Brent Qvale",
        "position": "RT"
      },
      {
        "team": "Bengals",
        "jersey_number": 51,
        "name": "Brandon Bell",
        "position": "MLB"
      },
      {
        "team": "Bengals",
        "jersey_number": 49,
        "name": "Moritz Boehringer",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 77,
        "name": "Bradley Bozeman",
        "position": "C"
      },
      {
        "team": "Bengals",
        "jersey_number": 68,
        "name": "Bobby Hart",
        "position": "RT"
      },
      {
        "team": "Steelers",
        "jersey_number": 95,
        "name": "Lavon Hooks",
        "position": "LE"
      },
      {
        "team": "Bengals",
        "jersey_number": 60,
        "name": "T.J. Johnson",
        "position": "C"
      },
      {
        "team": "Steelers",
        "jersey_number": 55,
        "name": "Keith Kelsey Jr",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 27,
        "name": "Darious Williams",
        "position": "CB"
      },
      {
        "team": "Bengals",
        "jersey_number": 40,
        "name": "Brandon Wilson",
        "position": "SS"
      },
      {
        "team": "Colts",
        "jersey_number": 49,
        "name": "Matthew Adams",
        "position": "MLB"
      },
      {
        "team": "Colts",
        "jersey_number": 65,
        "name": "Tyreek Burwell",
        "position": "LT"
      },
      {
        "team": "Browns",
        "jersey_number": 27,
        "name": "Matthew Dayes",
        "position": "HB"
      },
      {
        "team": "Browns",
        "jersey_number": 79,
        "name": "Geoff Gray",
        "position": "RG"
      },
      {
        "team": "Browns",
        "jersey_number": 69,
        "name": "Desmond Harrison",
        "position": "LT"
      },
      {
        "team": "Colts",
        "jersey_number": 40,
        "name": "Ronald Martin Jr",
        "position": "FS"
      },
      {
        "team": "Browns",
        "jersey_number": 37,
        "name": "Denzel Rice",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 80,
        "name": "Deontay Burnett",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 37,
        "name": "Dee Delaney",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 57,
        "name": "Brooks Ellis",
        "position": "MLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 33,
        "name": "De'Angelo Henderson",
        "position": "HB"
      },
      {
        "team": "Broncos",
        "jersey_number": 70,
        "name": "Sam Jones",
        "position": "RG"
      },
      {
        "team": "Titans",
        "jersey_number": 47,
        "name": "Joshua Kalu",
        "position": "CB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 19,
        "name": "Allen Lazard",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 19,
        "name": "Jordan Leslie",
        "position": "WR"
      },
      {
        "team": "Broncos",
        "jersey_number": 68,
        "name": "Elijah Wilkinson",
        "position": "RT"
      },
      {
        "team": "Titans",
        "jersey_number": 14,
        "name": "Nick Williams",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 83,
        "name": "Daniel Braverman",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 11,
        "name": "Geremy Davis",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 68,
        "name": "Breno Giacomini",
        "position": "RT"
      },
      {
        "team": "Raiders",
        "jersey_number": 25,
        "name": "Erik Harris",
        "position": "SS"
      },
      {
        "team": "Chargers",
        "jersey_number": 96,
        "name": "Albert Havili",
        "position": "LE"
      },
      {
        "team": "Chargers",
        "jersey_number": 45,
        "name": "A.J. Hendy",
        "position": "SS"
      },
      {
        "team": "Raiders",
        "jersey_number": 34,
        "name": "Chris Warren III",
        "position": "HB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 81,
        "name": "K.D. Cannon",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 62,
        "name": "Ethan Cooper",
        "position": "LG"
      },
      {
        "team": "Cowboys",
        "jersey_number": 73,
        "name": "Joe Looney",
        "position": "C"
      },
      {
        "team": "Giants",
        "jersey_number": 78,
        "name": "Romeo Okwara",
        "position": "ROLB"
      },
      {
        "team": "Giants",
        "jersey_number": 15,
        "name": "Hunter Sharp",
        "position": "WR"
      },
      {
        "team": "Eagles",
        "jersey_number": 90,
        "name": "Aziz Shittu",
        "position": "DT"
      },
      {
        "team": "Giants",
        "jersey_number": 45,
        "name": "Orion Stewart",
        "position": "SS"
      },
      {
        "team": "Eagles",
        "jersey_number": 7,
        "name": "Nate Sudfeld",
        "position": "QB"
      },
      {
        "team": "Eagles",
        "jersey_number": 39,
        "name": "Chandon Sullivan",
        "position": "CB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 3,
        "name": "Mike White",
        "position": "QB"
      },
      {
        "team": "Redskins",
        "jersey_number": 40,
        "name": "Josh Harvey-Clemons",
        "position": "MLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 15,
        "name": "Simmie Cobbs Jr",
        "position": "WR"
      },
      {
        "team": "Packers",
        "jersey_number": 91,
        "name": "Kendall Donnerson",
        "position": "LOLB"
      },
      {
        "team": "Lions",
        "jersey_number": 17,
        "name": "Andy Jones",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 67,
        "name": "Kyle Kalis",
        "position": "LG"
      },
      {
        "team": "Lions",
        "jersey_number": 12,
        "name": "Bradley Marquez",
        "position": "WR"
      },
      {
        "team": "Packers",
        "jersey_number": 22,
        "name": "Aaron Ripkowski",
        "position": "FB"
      },
      {
        "team": "Packers",
        "jersey_number": 26,
        "name": "Herb Waters",
        "position": "CB"
      },
      {
        "team": "Vikings",
        "jersey_number": 31,
        "name": "Mack Brown",
        "position": "HB"
      },
      {
        "team": "Vikings",
        "jersey_number": 43,
        "name": "Reshard Cliett",
        "position": "LOLB"
      },
      {
        "team": "Bears",
        "jersey_number": 55,
        "name": "Hroniss Grasu",
        "position": "C"
      },
      {
        "team": "Vikings",
        "jersey_number": 51,
        "name": "Hercules Mata'afa",
        "position": "LE"
      },
      {
        "team": "Panthers",
        "jersey_number": 73,
        "name": "Greg Van Roten",
        "position": "LG"
      },
      {
        "team": "Vikings",
        "jersey_number": 1,
        "name": "Kyle Sloter",
        "position": "QB"
      },
      {
        "team": "Panthers",
        "jersey_number": 57,
        "name": "Andre Smith",
        "position": "MLB"
      },
      {
        "team": "Vikings",
        "jersey_number": 32,
        "name": "Roc Thomas",
        "position": "HB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 85,
        "name": "Bobo Wilson Jr",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 16,
        "name": "Freddie Martino",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 27,
        "name": "David Rivers",
        "position": "CB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 60,
        "name": "Brad Seaton",
        "position": "RT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 95,
        "name": "Channing Ward",
        "position": "LE"
      },
      {
        "team": "49ers",
        "jersey_number": 17,
        "name": "Victor Bolden Jr",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 87,
        "name": "Henry Krieger-Coble",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 79,
        "name": "Korey Cunningham",
        "position": "RT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 6,
        "name": "Austin Davis",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 37,
        "name": "D.J. Foster",
        "position": "HB"
      },
      {
        "team": "Rams",
        "jersey_number": 84,
        "name": "Temarrick Hemingway",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 85,
        "name": "Gabe Holmes",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 39,
        "name": "Deatrick Nichols",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 78,
        "name": "Vinston Painter",
        "position": "LT"
      },
      {
        "team": "49ers",
        "jersey_number": 30,
        "name": "Tyvis Powell",
        "position": "SS"
      },
      {
        "team": "Rams",
        "jersey_number": 46,
        "name": "Tegray Scales",
        "position": "MLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 80,
        "name": "Bryce Williams",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 32,
        "name": "Lou Young",
        "position": "CB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 74,
        "name": "Zach Sterup",
        "position": "RT"
      },
      {
        "team": "Jets",
        "jersey_number": 36,
        "name": "Doug Middleton",
        "position": "SS"
      },
      {
        "team": "Ravens",
        "jersey_number": 16,
        "name": "Quincy Adeboyejo",
        "position": "WR"
      },
      {
        "team": "Steelers",
        "jersey_number": 69,
        "name": "Joshua Frazier",
        "position": "DT"
      },
      {
        "team": "Steelers",
        "jersey_number": 10,
        "name": "Quadree Henderson",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 76,
        "name": "Kent Perkins",
        "position": "LT"
      },
      {
        "team": "Ravens",
        "jersey_number": 64,
        "name": "Greg Senat",
        "position": "RT"
      },
      {
        "team": "Ravens",
        "jersey_number": 76,
        "name": "Maurquice Shakir",
        "position": "RT"
      },
      {
        "team": "Bengals",
        "jersey_number": 64,
        "name": "Rod Taylor",
        "position": "RG"
      },
      {
        "team": "Browns",
        "jersey_number": 56,
        "name": "B.J. Bello",
        "position": "MLB"
      },
      {
        "team": "Colts",
        "jersey_number": 62,
        "name": "Le'Raven Clark",
        "position": "LT"
      },
      {
        "team": "Colts",
        "jersey_number": 64,
        "name": "Mark Glowinski",
        "position": "LG"
      },
      {
        "team": "Browns",
        "jersey_number": 30,
        "name": "Montrel Meander",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 6,
        "name": "Stephen Morris",
        "position": "QB"
      },
      {
        "team": "Texans",
        "jersey_number": 62,
        "name": "Chad Slade",
        "position": "RG"
      },
      {
        "team": "Broncos",
        "jersey_number": 13,
        "name": "Kenny Bell",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 56,
        "name": "Sharif Finch",
        "position": "LOLB"
      },
      {
        "team": "Broncos",
        "jersey_number": 28,
        "name": "C.J. Smith III",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 69,
        "name": "Tyler Marz",
        "position": "LT"
      },
      {
        "team": "Broncos",
        "jersey_number": 36,
        "name": "David Williams",
        "position": "HB"
      },
      {
        "team": "Chargers",
        "jersey_number": 48,
        "name": "Nick Dzubnar",
        "position": "MLB"
      },
      {
        "team": "Chargers",
        "jersey_number": 46,
        "name": "Chris Landrum",
        "position": "RE"
      },
      {
        "team": "Chargers",
        "jersey_number": 78,
        "name": "Michael Schofield",
        "position": "LG"
      },
      {
        "team": "Chargers",
        "jersey_number": 69,
        "name": "Sam Tevi",
        "position": "LT"
      },
      {
        "team": "Chargers",
        "jersey_number": 64,
        "name": "Cole Toner",
        "position": "LG"
      },
      {
        "team": "Eagles",
        "jersey_number": 6,
        "name": "Joe Callahan",
        "position": "QB"
      },
      {
        "team": "Giants",
        "jersey_number": 81,
        "name": "Kyle Carter",
        "position": "TE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 78,
        "name": "Kadeem Edwards",
        "position": "LG"
      },
      {
        "team": "Eagles",
        "jersey_number": 63,
        "name": "Aaron Evans",
        "position": "LG"
      },
      {
        "team": "Cowboys",
        "jersey_number": 79,
        "name": "Chaz Green",
        "position": "LT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 58,
        "name": "Tre'von Johnson",
        "position": "LOLB"
      },
      {
        "team": "Giants",
        "jersey_number": 46,
        "name": "Calvin Munson",
        "position": "MLB"
      },
      {
        "team": "Cowboys",
        "jersey_number": 42,
        "name": "Eric Pinkins",
        "position": "LOLB"
      },
      {
        "team": "Eagles",
        "jersey_number": 38,
        "name": "Stephen Roberts",
        "position": "FS"
      },
      {
        "team": "Cowboys",
        "jersey_number": 68,
        "name": "Daniel Ross",
        "position": "DT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 7,
        "name": "Cooper Rush",
        "position": "QB"
      },
      {
        "team": "Giants",
        "jersey_number": 79,
        "name": "Jordan Williams",
        "position": "RE"
      },
      {
        "team": "Redskins",
        "jersey_number": 60,
        "name": "Alex Balducci",
        "position": "RG"
      },
      {
        "team": "Redskins",
        "jersey_number": 19,
        "name": "Robert Davis",
        "position": "WR"
      },
      {
        "team": "Packers",
        "jersey_number": 93,
        "name": "Reggie Gilbert",
        "position": "LOLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 39,
        "name": "Kenny Ladler",
        "position": "SS"
      },
      {
        "team": "Packers",
        "jersey_number": 95,
        "name": "Tyler Lancaster",
        "position": "DT"
      },
      {
        "team": "Lions",
        "jersey_number": 30,
        "name": "Stefan McClure",
        "position": "SS"
      },
      {
        "team": "Packers",
        "jersey_number": 98,
        "name": "Chris Odom",
        "position": "ROLB"
      },
      {
        "team": "Packers",
        "jersey_number": 77,
        "name": "Adam Pankey",
        "position": "LT"
      },
      {
        "team": "Bears",
        "jersey_number": 46,
        "name": "Michael Burton",
        "position": "FB"
      },
      {
        "team": "Panthers",
        "jersey_number": 14,
        "name": "Mose Frazier",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 64,
        "name": "Eric Kush",
        "position": "C"
      },
      {
        "team": "Vikings",
        "jersey_number": 38,
        "name": "Tray Matthews",
        "position": "SS"
      },
      {
        "team": "Vikings",
        "jersey_number": 72,
        "name": "Storm Norton",
        "position": "RT"
      },
      {
        "team": "Vikings",
        "jersey_number": 15,
        "name": "Brandon Zylstra",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 39,
        "name": "Deante Burton",
        "position": "CB"
      },
      {
        "team": "Falcons",
        "jersey_number": 96,
        "name": "Mackendy Cheridor",
        "position": "LE"
      },
      {
        "team": "Saints",
        "jersey_number": 77,
        "name": "John Fullington",
        "position": "LG"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 52,
        "name": "Nigel Harris",
        "position": "MLB"
      },
      {
        "team": "Saints",
        "jersey_number": 68,
        "name": "Devaroe Lawrence",
        "position": "DT"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 18,
        "name": "Bernard Reedy",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 61,
        "name": "Leonard Wester",
        "position": "LT"
      },
      {
        "team": "Seahawks",
        "jersey_number": 79,
        "name": "Isaiah Battle",
        "position": "LT"
      },
      {
        "team": "Cardinals",
        "jersey_number": 48,
        "name": "Derrick Coleman",
        "position": "FB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 43,
        "name": "Jalston Fowler",
        "position": "FB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 94,
        "name": "Alec James",
        "position": "LE"
      },
      {
        "team": "Rams",
        "jersey_number": 86,
        "name": "Steven Mitchell Jr",
        "position": "WR"
      },
      {
        "team": "49ers",
        "jersey_number": 62,
        "name": "Erik Magnuson",
        "position": "RG"
      },
      {
        "team": "49ers",
        "jersey_number": 41,
        "name": "Emmanuel Moseley",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 49,
        "name": "Matthew Oplinger",
        "position": "LOLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 35,
        "name": "Elijhaa Penny",
        "position": "HB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 52,
        "name": "Jacob Pugh",
        "position": "ROLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 68,
        "name": "Greg Pyke",
        "position": "LG"
      },
      {
        "team": "Cardinals",
        "jersey_number": 81,
        "name": "Beau Sandland",
        "position": "TE"
      },
      {
        "team": "Rams",
        "jersey_number": 88,
        "name": "Mike Thomas",
        "position": "WR"
      },
      {
        "team": "Rams",
        "jersey_number": 63,
        "name": "Darrell Williams",
        "position": "RT"
      },
      {
        "team": "Dolphins",
        "jersey_number": 64,
        "name": "Jake Brendel",
        "position": "C"
      },
      {
        "team": "Bills",
        "jersey_number": 15,
        "name": "Kaelin Clay",
        "position": "WR"
      },
      {
        "team": "Patriots",
        "jersey_number": 16,
        "name": "Danny Etling",
        "position": "QB"
      },
      {
        "team": "Bills",
        "jersey_number": 61,
        "name": "Josh James",
        "position": "LT"
      },
      {
        "team": "Bills",
        "jersey_number": 89,
        "name": "Brandon Reilly",
        "position": "WR"
      },
      {
        "team": "Ravens",
        "jersey_number": 70,
        "name": "Andrew Donnal",
        "position": "LG"
      },
      {
        "team": "Steelers",
        "jersey_number": 40,
        "name": "Jarvion Franklin",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 80,
        "name": "Jake McGee",
        "position": "TE"
      },
      {
        "team": "Bengals",
        "jersey_number": 72,
        "name": "Justin Murray",
        "position": "RT"
      },
      {
        "team": "Steelers",
        "jersey_number": 16,
        "name": "Marcus Tucker",
        "position": "WR"
      },
      {
        "team": "Bengals",
        "jersey_number": 5,
        "name": "Logan Woodside",
        "position": "QB"
      },
      {
        "team": "Colts",
        "jersey_number": 83,
        "name": "Dres Anderson",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 15,
        "name": "K.J. Brent",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 9,
        "name": "Brad Kaaya",
        "position": "QB"
      },
      {
        "team": "Browns",
        "jersey_number": 62,
        "name": "Austin Reiter",
        "position": "C"
      },
      {
        "team": "Texans",
        "jersey_number": 3,
        "name": "Brandon Weeden",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 40,
        "name": "Keishawn Bierria",
        "position": "MLB"
      },
      {
        "team": "Titans",
        "jersey_number": 92,
        "name": "Matt Dickerson",
        "position": "LE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 66,
        "name": "Darius Jackson",
        "position": "RE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 62,
        "name": "Kc McDermott",
        "position": "LT"
      },
      {
        "team": "Broncos",
        "jersey_number": 38,
        "name": "Marcus Rios",
        "position": "CB"
      },
      {
        "team": "Titans",
        "jersey_number": 79,
        "name": "John Theus",
        "position": "RT"
      },
      {
        "team": "Jaguars",
        "jersey_number": 73,
        "name": "Josh Walker",
        "position": "LG"
      },
      {
        "team": "Titans",
        "jersey_number": 45,
        "name": "Ethan Wolf",
        "position": "TE"
      },
      {
        "team": "Chargers",
        "jersey_number": 60,
        "name": "Zachary Crabtree",
        "position": "RT"
      },
      {
        "team": "Chargers",
        "jersey_number": 35,
        "name": "Russell Hansbrough",
        "position": "HB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 19,
        "name": "Marcus Kemp",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 10,
        "name": "Artavis Scott",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 9,
        "name": "Nic Shimonek",
        "position": "QB"
      },
      {
        "team": "Giants",
        "jersey_number": 36,
        "name": "Sean Chandler",
        "position": "FS"
      },
      {
        "team": "Giants",
        "jersey_number": 75,
        "name": "Jon Halapio",
        "position": "C"
      },
      {
        "team": "Eagles",
        "jersey_number": 68,
        "name": "Jordan Mailata",
        "position": "LT"
      },
      {
        "team": "Eagles",
        "jersey_number": 74,
        "name": "Toby Weathersby",
        "position": "LT"
      },
      {
        "team": "Packers",
        "jersey_number": 32,
        "name": "Devante Mays",
        "position": "HB"
      },
      {
        "team": "Lions",
        "jersey_number": 41,
        "name": "Rolan Milligan",
        "position": "SS"
      },
      {
        "team": "Packers",
        "jersey_number": 67,
        "name": "Conor Sheehy",
        "position": "LE"
      },
      {
        "team": "Lions",
        "jersey_number": 74,
        "name": "Dan Skipper",
        "position": "RT"
      },
      {
        "team": "Redskins",
        "jersey_number": 37,
        "name": "Fish Smithson",
        "position": "FS"
      },
      {
        "team": "Redskins",
        "jersey_number": 60,
        "name": "Isaiah Williams",
        "position": "LG"
      },
      {
        "team": "Bears",
        "jersey_number": 62,
        "name": "Dejon Allen",
        "position": "LT"
      },
      {
        "team": "Vikings",
        "jersey_number": 84,
        "name": "Chad Beebe",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 81,
        "name": "Blake Bell",
        "position": "TE"
      },
      {
        "team": "Panthers",
        "jersey_number": 61,
        "name": "Kyle Friend",
        "position": "C"
      },
      {
        "team": "Vikings",
        "jersey_number": 46,
        "name": "Trevon Mathis",
        "position": "CB"
      },
      {
        "team": "Bears",
        "jersey_number": 35,
        "name": "Ryan Nall",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 6,
        "name": "Kurt Benkert",
        "position": "QB"
      },
      {
        "team": "Falcons",
        "jersey_number": 38,
        "name": "Marcelis Branch",
        "position": "FS"
      },
      {
        "team": "Falcons",
        "jersey_number": 76,
        "name": "Daniel Brunskill",
        "position": "RT"
      },
      {
        "team": "Saints",
        "jersey_number": 64,
        "name": "Will Clapp",
        "position": "C"
      },
      {
        "team": "Falcons",
        "jersey_number": 16,
        "name": "Reggie Davis",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 34,
        "name": "Godwin Igwebuike",
        "position": "SS"
      },
      {
        "team": "Saints",
        "jersey_number": 28,
        "name": "Sharrod Neasman",
        "position": "FS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 92,
        "name": "Dennis Gardeck",
        "position": "ROLB"
      },
      {
        "team": "Rams",
        "jersey_number": 48,
        "name": "Travin Howard",
        "position": "MLB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 36,
        "name": "Akeem King",
        "position": "FS"
      },
      {
        "team": "Rams",
        "jersey_number": 14,
        "name": "Sean Mannion",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 34,
        "name": "Tavierre Thomas",
        "position": "CB"
      },
      {
        "team": "Seahawks",
        "jersey_number": 56,
        "name": "Avery Young",
        "position": "RG"
      },
      {
        "team": "Dolphins",
        "jersey_number": 53,
        "name": "Cayson Collins",
        "position": "ROLB"
      },
      {
        "team": "Dolphins",
        "jersey_number": 61,
        "name": "Connor Hilland",
        "position": "LG"
      },
      {
        "team": "Dolphins",
        "jersey_number": 87,
        "name": "Rashawn Scott",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 69,
        "name": "Ben Braden",
        "position": "LG"
      },
      {
        "team": "Ravens",
        "jersey_number": 35,
        "name": "Gus Edwards",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 68,
        "name": "Jake Rodgers",
        "position": "LT"
      },
      {
        "team": "Steelers",
        "jersey_number": 30,
        "name": "Jamar Summers",
        "position": "CB"
      },
      {
        "team": "Texans",
        "jersey_number": 48,
        "name": "Davin Bellamy",
        "position": "LOLB"
      },
      {
        "team": "Browns",
        "jersey_number": 54,
        "name": "Anthony Fabiano",
        "position": "C"
      },
      {
        "team": "Texans",
        "jersey_number": 61,
        "name": "Kyle Fuller",
        "position": "LG"
      },
      {
        "team": "Browns",
        "jersey_number": 47,
        "name": "Charley Hughlett",
        "position": "TE"
      },
      {
        "team": "Browns",
        "jersey_number": 42,
        "name": "Marquez Williams",
        "position": "FB"
      },
      {
        "team": "Titans",
        "jersey_number": 15,
        "name": "Darius Jennings",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 3,
        "name": "Tanner Lee",
        "position": "QB"
      },
      {
        "team": "Broncos",
        "jersey_number": 81,
        "name": "Tim Patrick",
        "position": "WR"
      },
      {
        "team": "Jaguars",
        "jersey_number": 14,
        "name": "Shane Wynn",
        "position": "WR"
      },
      {
        "team": "Chargers",
        "jersey_number": 67,
        "name": "Brett Boyko",
        "position": "RT"
      },
      {
        "team": "Chargers",
        "jersey_number": 63,
        "name": "Donavon Clark",
        "position": "RG"
      },
      {
        "team": "Chargers",
        "jersey_number": 82,
        "name": "Cole Hunt",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 5,
        "name": "Matt McGloin",
        "position": "QB"
      },
      {
        "team": "Chargers",
        "jersey_number": 68,
        "name": "Trenton Scott",
        "position": "LT"
      },
      {
        "team": "Giants",
        "jersey_number": 61,
        "name": "Nick Becton",
        "position": "RT"
      },
      {
        "team": "Giants",
        "jersey_number": 6,
        "name": "Amba Etta-Tawo",
        "position": "WR"
      },
      {
        "team": "Eagles",
        "jersey_number": 78,
        "name": "Darrell Greene",
        "position": "RG"
      },
      {
        "team": "Cowboys",
        "jersey_number": 43,
        "name": "Joel Lanning",
        "position": "ROLB"
      },
      {
        "team": "Lions",
        "jersey_number": 53,
        "name": "Trevor Bates",
        "position": "MLB"
      },
      {
        "team": "Lions",
        "jersey_number": 16,
        "name": "Jace Billingsley",
        "position": "WR"
      },
      {
        "team": "Redskins",
        "jersey_number": 41,
        "name": "Quin Blanding",
        "position": "SS"
      },
      {
        "team": "Redskins",
        "jersey_number": 68,
        "name": "Tyler Catalina",
        "position": "RG"
      },
      {
        "team": "Packers",
        "jersey_number": 54,
        "name": "Dillon Day",
        "position": "C"
      },
      {
        "team": "Packers",
        "jersey_number": 58,
        "name": "Greer Martini",
        "position": "MLB"
      },
      {
        "team": "Redskins",
        "jersey_number": 45,
        "name": "Pete Robertson",
        "position": "LOLB"
      },
      {
        "team": "Packers",
        "jersey_number": 35,
        "name": "Jermaine Whitehead",
        "position": "SS"
      },
      {
        "team": "Bears",
        "jersey_number": 19,
        "name": "Tanner Gentry",
        "position": "WR"
      },
      {
        "team": "Bears",
        "jersey_number": 74,
        "name": "Bunmi Rotimi",
        "position": "RE"
      },
      {
        "team": "Falcons",
        "jersey_number": 19,
        "name": "Dontez Byrd",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 77,
        "name": "Jon Cunningham",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 14,
        "name": "Travin Dural",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 52,
        "name": "Emmanuel Ellerbee",
        "position": "ROLB"
      },
      {
        "team": "Falcons",
        "jersey_number": 77,
        "name": "Matt Gono",
        "position": "RT"
      },
      {
        "team": "Falcons",
        "jersey_number": 32,
        "name": "Tyson Graham",
        "position": "SS"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 4,
        "name": "Ryan Griffin",
        "position": "QB"
      },
      {
        "team": "Falcons",
        "jersey_number": 55,
        "name": "J'Terius Jones",
        "position": "LOLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 19,
        "name": "Jake Lampman",
        "position": "WR"
      },
      {
        "team": "Falcons",
        "jersey_number": 79,
        "name": "Jacob Tuioti-Mariner",
        "position": "DT"
      },
      {
        "team": "Saints",
        "jersey_number": 63,
        "name": "Cameron Tom",
        "position": "C"
      },
      {
        "team": "Falcons",
        "jersey_number": 62,
        "name": "Salesi Uhatafe",
        "position": "LG"
      },
      {
        "team": "Rams",
        "jersey_number": 8,
        "name": "Brandon Allen",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 61,
        "name": "Moubarak Djeri",
        "position": "LE"
      },
      {
        "team": "Rams",
        "jersey_number": 36,
        "name": "Dominique Hatfield",
        "position": "CB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 60,
        "name": "Will House",
        "position": "RG"
      },
      {
        "team": "49ers",
        "jersey_number": 12,
        "name": "Max McCaffrey",
        "position": "WR"
      },
      {
        "team": "Seahawks",
        "jersey_number": 5,
        "name": "Alex McGough",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 47,
        "name": "Ezekiel Turner",
        "position": "SS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 89,
        "name": "Andrew Vollert",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 60,
        "name": "Claudy Mathieu",
        "position": "LE"
      },
      {
        "team": "Steelers",
        "jersey_number": 46,
        "name": "Matthew Thomas",
        "position": "MLB"
      },
      {
        "team": "Steelers",
        "jersey_number": 33,
        "name": "Fitzgerald Toussaint",
        "position": "HB"
      },
      {
        "team": "Steelers",
        "jersey_number": 64,
        "name": "Kendal Vickers",
        "position": "LE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 16,
        "name": "Montay Crockett",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 75,
        "name": "Matt Diaz",
        "position": "LT"
      },
      {
        "team": "Titans",
        "jersey_number": 32,
        "name": "David Fluellen",
        "position": "HB"
      },
      {
        "team": "Jaguars",
        "jersey_number": 38,
        "name": "Brandon Wilds",
        "position": "HB"
      },
      {
        "team": "Raiders",
        "jersey_number": 14,
        "name": "Keon Hatcher",
        "position": "WR"
      },
      {
        "team": "Chiefs",
        "jersey_number": 96,
        "name": "Dee Liner",
        "position": "RE"
      },
      {
        "team": "Raiders",
        "jersey_number": 41,
        "name": "Keith Smith",
        "position": "FB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 38,
        "name": "D'Montre Wade",
        "position": "CB"
      },
      {
        "team": "Giants",
        "jersey_number": 86,
        "name": "Marquis Bundy",
        "position": "WR"
      },
      {
        "team": "Giants",
        "jersey_number": 62,
        "name": "Tyrell Chavis",
        "position": "RE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 61,
        "name": "Bryce Johnson",
        "position": "RG"
      },
      {
        "team": "Eagles",
        "jersey_number": 41,
        "name": "Jeremy Reaves",
        "position": "FS"
      },
      {
        "team": "Cowboys",
        "jersey_number": 28,
        "name": "Jameill Showers",
        "position": "FS"
      },
      {
        "team": "Lions",
        "jersey_number": 36,
        "name": "Antwuan Davis",
        "position": "CB"
      },
      {
        "team": "Packers",
        "jersey_number": 36,
        "name": "Raven Greene",
        "position": "FS"
      },
      {
        "team": "Redskins",
        "jersey_number": 74,
        "name": "Demetrius Rhaney",
        "position": "C"
      },
      {
        "team": "Lions",
        "jersey_number": 14,
        "name": "Jake Rudock",
        "position": "QB"
      },
      {
        "team": "Bears",
        "jersey_number": 9,
        "name": "Tyler Bray",
        "position": "QB"
      },
      {
        "team": "Vikings",
        "jersey_number": 67,
        "name": "Cornelius Edison",
        "position": "C"
      },
      {
        "team": "Panthers",
        "jersey_number": 62,
        "name": "Taylor Hearn",
        "position": "RG"
      },
      {
        "team": "Panthers",
        "jersey_number": 30,
        "name": "Elijah Hood",
        "position": "HB"
      },
      {
        "team": "Panthers",
        "jersey_number": 15,
        "name": "Jamaal Jones",
        "position": "WR"
      },
      {
        "team": "Vikings",
        "jersey_number": 78,
        "name": "Dieugot Joseph",
        "position": "LT"
      },
      {
        "team": "Falcons",
        "jersey_number": 32,
        "name": "Justin Crawford",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 83,
        "name": "Russell Gage",
        "position": "WR"
      },
      {
        "team": "Saints",
        "jersey_number": 7,
        "name": "Taysom Hill",
        "position": "QB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 78,
        "name": "Givens Price",
        "position": "LG"
      },
      {
        "team": "Falcons",
        "jersey_number": 53,
        "name": "Emmanuel Smith",
        "position": "LOLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 66,
        "name": "Josh Allen",
        "position": "C"
      },
      {
        "team": "Cardinals",
        "jersey_number": 59,
        "name": "Vontarrius Dora",
        "position": "LOLB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 38,
        "name": "A.J. Howard",
        "position": "SS"
      },
      {
        "team": "Cardinals",
        "jersey_number": 62,
        "name": "Daniel Munyer",
        "position": "C"
      },
      {
        "team": "Cardinals",
        "jersey_number": 97,
        "name": "Owen Obasuyi",
        "position": "DT"
      },
      {
        "team": "Ravens",
        "jersey_number": 58,
        "name": "Alvin Jones",
        "position": "MLB"
      },
      {
        "team": "Ravens",
        "jersey_number": 7,
        "name": "Josh Woodrum",
        "position": "QB"
      },
      {
        "team": "Titans",
        "jersey_number": 35,
        "name": "Damon Webb II",
        "position": "SS"
      },
      {
        "team": "Chargers",
        "jersey_number": 59,
        "name": "D'Juan Hines",
        "position": "MLB"
      },
      {
        "team": "Chiefs",
        "jersey_number": 73,
        "name": "Tejan Koroma",
        "position": "C"
      },
      {
        "team": "Chiefs",
        "jersey_number": 66,
        "name": "Kahlil McKenzie",
        "position": "LG"
      },
      {
        "team": "Giants",
        "jersey_number": 57,
        "name": "Thurston Armbrister",
        "position": "MLB"
      },
      {
        "team": "Giants",
        "jersey_number": 65,
        "name": "Nick Gates",
        "position": "LT"
      },
      {
        "team": "Cowboys",
        "jersey_number": 44,
        "name": "Darius Jackson",
        "position": "HB"
      },
      {
        "team": "Eagles",
        "jersey_number": 64,
        "name": "Jon Toth",
        "position": "C"
      },
      {
        "team": "Packers",
        "jersey_number": 40,
        "name": "Joe Kerridge",
        "position": "FB"
      },
      {
        "team": "Packers",
        "jersey_number": 72,
        "name": "Kyle Meadows",
        "position": "RT"
      },
      {
        "team": "Lions",
        "jersey_number": 67,
        "name": "Beau Nunn",
        "position": "LG"
      },
      {
        "team": "Bears",
        "jersey_number": 14,
        "name": "DeMarcus Ayers",
        "position": "WR"
      },
      {
        "team": "Panthers",
        "jersey_number": 8,
        "name": "Austin Duke",
        "position": "WR"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 45,
        "name": "Alan Cross",
        "position": "TE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 44,
        "name": "Dalton Crossan",
        "position": "HB"
      },
      {
        "team": "Falcons",
        "jersey_number": 49,
        "name": "Richard Jarvis",
        "position": "MLB"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 46,
        "name": "Austin Johnson",
        "position": "FB"
      },
      {
        "team": "Rams",
        "jersey_number": 72,
        "name": "Aaron Neary",
        "position": "C"
      },
      {
        "team": "Dolphins",
        "jersey_number": 69,
        "name": "David Steinmetz",
        "position": "LT"
      },
      {
        "team": "Steelers",
        "jersey_number": 62,
        "name": "Joseph Cheek",
        "position": "RG"
      },
      {
        "team": "Steelers",
        "jersey_number": 61,
        "name": "Parker Cothren",
        "position": "DT"
      },
      {
        "team": "Bengals",
        "jersey_number": 73,
        "name": "Austin Fleer",
        "position": "RT"
      },
      {
        "team": "Browns",
        "jersey_number": 89,
        "name": "Evan Berry",
        "position": "WR"
      },
      {
        "team": "Colts",
        "jersey_number": 81,
        "name": "Krishawn Hogan",
        "position": "WR"
      },
      {
        "team": "Titans",
        "jersey_number": 46,
        "name": "Nick DeLuca",
        "position": "MLB"
      },
      {
        "team": "Titans",
        "jersey_number": 73,
        "name": "Nico Falah",
        "position": "C"
      },
      {
        "team": "Chiefs",
        "jersey_number": 56,
        "name": "Ben Niemann",
        "position": "MLB"
      },
      {
        "team": "Packers",
        "jersey_number": 89,
        "name": "Michael Clark",
        "position": "WR"
      },
      {
        "team": "Panthers",
        "jersey_number": 4,
        "name": "Garrett Gilbert",
        "position": "QB"
      },
      {
        "team": "Cardinals",
        "jersey_number": 19,
        "name": "Carlton Agudosi",
        "position": "WR"
      },
      {
        "team": "Jets",
        "jersey_number": 44,
        "name": "Lawrence Thomas",
        "position": "FB"
      },
      {
        "team": "Ravens",
        "jersey_number": 61,
        "name": "Alex Thompson",
        "position": "C"
      },
      {
        "team": "Browns",
        "jersey_number": 60,
        "name": "Fred Lauina",
        "position": "LG"
      },
      {
        "team": "Raiders",
        "jersey_number": 48,
        "name": "Andrew DePaola",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 59,
        "name": "Chris Gonzalez",
        "position": "RG"
      },
      {
        "team": "Falcons",
        "jersey_number": 9,
        "name": "Garrett Grayson",
        "position": "QB"
      },
      {
        "team": "Falcons",
        "jersey_number": 61,
        "name": "J.C. Hassenauer",
        "position": "C"
      },
      {
        "team": "Seahawks",
        "jersey_number": 85,
        "name": "Keenan Reynolds",
        "position": "WR"
      },
      {
        "team": "Lions",
        "jersey_number": 48,
        "name": "Don Muhlbach",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 14,
        "name": "Tim White",
        "position": "WR"
      },
      {
        "team": "Raiders",
        "jersey_number": 19,
        "name": "Isaac Whitney",
        "position": "WR"
      },
      {
        "team": "Panthers",
        "jersey_number": 6,
        "name": "Taylor Heinicke",
        "position": "QB"
      },
      {
        "team": "Bengals",
        "jersey_number": 33,
        "name": "Tra Carson",
        "position": "HB"
      },
      {
        "team": "Bengals",
        "jersey_number": 46,
        "name": "Clark Harris",
        "position": "TE"
      },
      {
        "team": "Redskins",
        "jersey_number": 57,
        "name": "Nick Sundberg",
        "position": "C"
      },
      {
        "team": "Giants",
        "jersey_number": 51,
        "name": "Zak DeOssie",
        "position": "TE"
      },
      {
        "team": "Falcons",
        "jersey_number": 47,
        "name": "Josh Harris",
        "position": "TE"
      },
      {
        "team": "Vikings",
        "jersey_number": 47,
        "name": "Kevin McDermott",
        "position": "TE"
      },
      {
        "team": "Dolphins",
        "jersey_number": 92,
        "name": "John Denney",
        "position": "TE"
      },
      {
        "team": "Titans",
        "jersey_number": 48,
        "name": "Beau Brinkley",
        "position": "TE"
      },
      {
        "team": "Jaguars",
        "jersey_number": 46,
        "name": "Carson Tinker",
        "position": "TE"
      },
      {
        "team": "Chargers",
        "jersey_number": 47,
        "name": "Mike Windt",
        "position": "TE"
      },
      {
        "team": "Panthers",
        "jersey_number": 44,
        "name": "J.J. Jansen",
        "position": "TE"
      },
      {
        "team": "Seahawks",
        "jersey_number": 69,
        "name": "Tyler Ott",
        "position": "TE"
      },
      {
        "team": "Bills",
        "jersey_number": 69,
        "name": "Reid Ferguson",
        "position": "TE"
      },
      {
        "team": "Cowboys",
        "jersey_number": 91,
        "name": "L.P. LaDouceur",
        "position": "TE"
      },
      {
        "team": "Rams",
        "jersey_number": 44,
        "name": "Jake McQuaide",
        "position": "TE"
      },
      {
        "team": "Cardinals",
        "jersey_number": 46,
        "name": "Aaron Brewer",
        "position": "TE"
      },
      {
        "team": "Jets",
        "jersey_number": 42,
        "name": "Thomas Hennessy",
        "position": "TE"
      },
      {
        "team": "Chiefs",
        "jersey_number": 41,
        "name": "James Winchester",
        "position": "TE"
      },
      {
        "team": "Eagles",
        "jersey_number": 45,
        "name": "Rick Lovato",
        "position": "TE"
      },
      {
        "team": "49ers",
        "jersey_number": 86,
        "name": "Kyle Nelson",
        "position": "TE"
      },
      {
        "team": "Broncos",
        "jersey_number": 42,
        "name": "Casey Kreiter",
        "position": "TE"
      },
      {
        "team": "Ravens",
        "jersey_number": 46,
        "name": "Morgan Cox",
        "position": "TE"
      },
      {
        "team": "Texans",
        "jersey_number": 46,
        "name": "Jon Weeks",
        "position": "TE"
      },
      {
        "team": "Bears",
        "jersey_number": 48,
        "name": "Patrick Scales",
        "position": "TE"
      },
      {
        "team": "Steelers",
        "jersey_number": 57,
        "name": "Kameron Canaday",
        "position": "TE"
      },
      {
        "team": "Packers",
        "jersey_number": 43,
        "name": "Hunter Bradley",
        "position": "TE"
      },
      {
        "team": "Patriots",
        "jersey_number": 49,
        "name": "Joe Cardona",
        "position": "TE"
      },
      {
        "team": "Buccaneers",
        "jersey_number": 41,
        "name": "Drew Ferris",
        "position": "TE"
      },
      {
        "team": "Colts",
        "jersey_number": 46,
        "name": "Luke Rhodes",
        "position": "TE"
      },
      {
        "team": "Saints",
        "jersey_number": 49,
        "name": "Zach Wood",
        "position": "TE"
      }
     ]

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
