import * as React from 'react';
import styles from './TradingBlock.module.css';
import LoadingSpinner from './LoadingSpinner';
// import { fetchLeagueUsers, fetchLeagueRosters } from './API/api';
import { TeamOwner } from './utils/types';
import Team from './Team';

const TradingBlock = () => {
  const [teamOwners] = React.useState<TeamOwner[]>(localData);
  const [isLoading] = React.useState<boolean>(false);


  // const [teamOwners, setTeamOwners] = React.useState<TeamOwner[]>(localData);
  // const [isLoading, toggleLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    // const leagueUserPromise = fetchLeagueUsers();
    // const leagueRosterPromise = fetchLeagueRosters();

    // Promise.all([leagueUserPromise, leagueRosterPromise]).then(
    //   ([teamOwners, rosters]) => {
    //     teamOwners.forEach(owner => {
    //       const roster = rosters.find(roster => {
    //         return roster.ownerID === owner.userID;
    //       });
    //       if (roster) {
    //         owner.players = roster.players;
    //       }
    //     });
    //     // this causes a double render.. I think I'd have to move to React.useReducer to update two things at once.
    //     console.log(teamOwners);
    //     toggleLoading(false);
    //     setTeamOwners(teamOwners);
    //   },
    // );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>The Trading Block</h1>
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (<div className={styles.teams}>
        {teamOwners.map(teamOwner =>{
          return( <div className={styles.teamContainer} key={teamOwner.userID}>
              <Team owner={teamOwner} />
          </div> )
        })}
      </div>)}
    </div>
  );
};

export default TradingBlock;


const localData = [
  {
    "userName": "MaxWersland",
    "userID": "423262875465826304",
    "avatarID": "2804aae9b005af55f7989b142bba02cb",
    "teamName": "Forever Unclean",
    "players": [
      {
        "id": "1103",
        "name": "Whitney Mercilus",
        "nickname": "Mercy",
        "isOnTradeBlock": false
      },
      {
        "id": "1479",
        "name": "Keenan Allen",
        "nickname": "Slayer ",
        "isOnTradeBlock": false
      },
      {
        "id": "1689",
        "name": "Adam Thielen",
        "nickname": "D3",
        "isOnTradeBlock": false
      },
      {
        "id": "1837",
        "name": "Jimmy Garoppolo",
        "nickname": "Optimus Dime",
        "isOnTradeBlock": false
      },
      {
        "id": "1947",
        "name": "Jadeveon Clowney",
        "nickname": "Clown Possey",
        "isOnTradeBlock": false
      },
      {
        "id": "1999",
        "name": "Shaquil Barrett",
        "nickname": "Sack Barrett",
        "isOnTradeBlock": false
      },
      {
        "id": "2133",
        "name": "Davante Adams",
        "nickname": "Tae",
        "isOnTradeBlock": false
      },
      {
        "id": "2427",
        "name": "Za'Darius Smith",
        "nickname": "Z",
        "isOnTradeBlock": false
      },
      {
        "id": "2505",
        "name": "Darren Waller",
        "nickname": "Waller the Baller",
        "isOnTradeBlock": false
      },
      {
        "id": "3214",
        "name": "Hunter Henry",
        "nickname": "Milfhunter",
        "isOnTradeBlock": false
      },
      {
        "id": "3230",
        "name": "Vonn Bell",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4018",
        "name": "Joe Mixon",
        "nickname": "Bam Bam",
        "isOnTradeBlock": false
      },
      {
        "id": "4039",
        "name": "Cooper Kupp",
        "nickname": "Coopa ",
        "isOnTradeBlock": false
      },
      {
        "id": "4152",
        "name": "Marlon Mack",
        "nickname": "Mack Attack",
        "isOnTradeBlock": false
      },
      {
        "id": "4157",
        "name": "Tarik Cohen",
        "nickname": "Underutilized",
        "isOnTradeBlock": false
      },
      {
        "id": "4881",
        "name": "Lamar Jackson",
        "nickname": "Heisman ",
        "isOnTradeBlock": false
      },
      {
        "id": "4985",
        "name": "Rashaad Penny",
        "nickname": "Cent",
        "isOnTradeBlock": false
      },
      {
        "id": "5046",
        "name": "Royce Freeman",
        "nickname": "Backup",
        "isOnTradeBlock": false
      },
      {
        "id": "5052",
        "name": "Ronald Jones II",
        "nickname": "Texas Tesla",
        "isOnTradeBlock": false
      },
      {
        "id": "5162",
        "name": "Reggie Bonnafon",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5843",
        "name": "Devin Bush",
        "nickname": "Big bush",
        "isOnTradeBlock": false
      },
      {
        "id": "5844",
        "name": "T.J. Hockenson",
        "nickname": "Hock",
        "isOnTradeBlock": false
      },
      {
        "id": "5848",
        "name": "Marquise Brown",
        "nickname": "Hollywood",
        "isOnTradeBlock": false
      },
      {
        "id": "5878",
        "name": "N'Keal Harry",
        "nickname": "Another Lebron James",
        "isOnTradeBlock": false
      },
      {
        "id": "5880",
        "name": "Parris Campbell",
        "nickname": "Quicky",
        "isOnTradeBlock": false
      },
      {
        "id": "5915",
        "name": "Andy Isabella",
        "nickname": "Bella",
        "isOnTradeBlock": false
      },
      {
        "id": "5917",
        "name": "Mecole Hardman",
        "nickname": "Me Hard",
        "isOnTradeBlock": false
      },
      {
        "id": "5995",
        "name": "Justice Hill",
        "nickname": "Justice Served AKA The Lawmaker",
        "isOnTradeBlock": false
      },
      {
        "id": "6130",
        "name": "Devin Singletary",
        "nickname": "Single Terry",
        "isOnTradeBlock": false
      },
      {
        "id": "6210",
        "name": "Darnell Savage",
        "nickname": "Savage",
        "isOnTradeBlock": false
      },
      {
        "id": "96",
        "name": "Aaron Rodgers",
        "nickname": "Discount Double Check",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "alohagopher",
    "userID": "423337862985953280",
    "avatarID": "55d84a9842931cd39b70ed61cda09c06",
    "teamName": "Cruisin' Chubbys",
    "players": [
      {
        "id": "2306",
        "name": "Jameis Winston",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2368",
        "name": "Frank Clark",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2449",
        "name": "Stefon Diggs",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2583",
        "name": "Tyrell Williams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3225",
        "name": "Tyler Boyd",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3423",
        "name": "Robby Anderson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4046",
        "name": "Patrick Mahomes",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4059",
        "name": "Marshon Lattimore",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4081",
        "name": "Budda Baker",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4131",
        "name": "Kenny Golladay",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "421",
        "name": "Matthew Stafford",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4950",
        "name": "Christian Kirk",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4960",
        "name": "Roquan Smith",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4962",
        "name": "Sony Michel",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4971",
        "name": "Derwin James",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4988",
        "name": "Nick Chubb",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5000",
        "name": "Chase Edmonds",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5012",
        "name": "Mark Andrews",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5101",
        "name": "Deon Cain",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5816",
        "name": "Nick Bosa",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5840",
        "name": "Josh Allen",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5860",
        "name": "Johnathan Abram",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5862",
        "name": "Brian Burns",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5885",
        "name": "Ryan Finley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5892",
        "name": "David Montgomery",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5947",
        "name": "Jakobi Meyers",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6007",
        "name": "Ryquell Armstead",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6126",
        "name": "Irv Smith Jr.",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6148",
        "name": "Preston Williams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "871",
        "name": "Von Miller",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "956",
        "name": "Mark Ingram",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "NickKrantz",
    "userID": "423887187910594560",
    "avatarID": "a32428f98f2eebdbd66ccb17f58d70ef",
    "teamName": "Eskimo Brothers",
    "players": [
      {
        "id": "1181",
        "name": "Luke Kuechly",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1364",
        "name": "Jamie Collins",
        "nickname": "OTB",
        "isOnTradeBlock": true
      },
      {
        "id": "1367",
        "name": "Logan Ryan",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1555",
        "name": "Kenny Stills",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1911",
        "name": "Willie Snead",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2028",
        "name": "Derek Carr",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2036",
        "name": "Khalil Mack",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2168",
        "name": "Devonta Freeman",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2307",
        "name": "Marcus Mariota",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "232",
        "name": "Frank Gore",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2325",
        "name": "Nelson Agholor",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2334",
        "name": "Phillip Dorsett",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2381",
        "name": "Chris Conley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2389",
        "name": "Jordan Hicks",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2391",
        "name": "David Johnson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "24",
        "name": "Matt Ryan",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3164",
        "name": "Ezekiel Elliott",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "344",
        "name": "Julian Edelman",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4033",
        "name": "David Njoku",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4036",
        "name": "Corey Davis",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4082",
        "name": "Curtis Samuel",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4089",
        "name": "Gerald Everett",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4274",
        "name": "David Moore",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5004",
        "name": "Ito Smith",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5248",
        "name": "Gus Edwards",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "538",
        "name": "Emmanuel Sanders",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "58",
        "name": "Greg Olsen",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5845",
        "name": "Dwayne Haskins",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5962",
        "name": "Keesean Johnson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "830",
        "name": "AJ Green",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "922",
        "name": "Mario Addison",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "MrMcgibblets1",
    "userID": "424017034741809152",
    "avatarID": "e229e12fee051208a2f5d74f1dbf6a50",
    "teamName":"",
    "players": [
      {
        "id": "1052",
        "name": "Demario Davis",
        "nickname": "Super D Mario",
        "isOnTradeBlock": false
      },
      {
        "id": "1110",
        "name": "T.Y. Hilton",
        "nickname": "Bed & Breakfast ",
        "isOnTradeBlock": false
      },
      {
        "id": "1149",
        "name": "Alshon Jeffery",
        "nickname": "Only One With Shoulder Pads On",
        "isOnTradeBlock": false
      },
      {
        "id": "1352",
        "name": "Robert Woods",
        "nickname": "Leaf",
        "isOnTradeBlock": false
      },
      {
        "id": "1587",
        "name": "Vance McDonald",
        "nickname": "Had a Farm",
        "isOnTradeBlock": false
      },
      {
        "id": "167",
        "name": "Tom Brady",
        "nickname": "B.O.A.T",
        "isOnTradeBlock": false
      },
      {
        "id": "1686",
        "name": "Tony Jefferson",
        "nickname": "Cobra",
        "isOnTradeBlock": false
      },
      {
        "id": "1940",
        "name": "Avery Williamson",
        "nickname": "Willy",
        "isOnTradeBlock": false
      },
      {
        "id": "2216",
        "name": "Mike Evans",
        "nickname": "The Library",
        "isOnTradeBlock": false
      },
      {
        "id": "2346",
        "name": "Devin Funchess",
        "nickname": "FunFun",
        "isOnTradeBlock": false
      },
      {
        "id": "2378",
        "name": "Tevin Coleman",
        "nickname": "Doesnt like camping",
        "isOnTradeBlock": false
      },
      {
        "id": "2382",
        "name": "Duke Johnson",
        "nickname": "Dog Name, Human Name ",
        "isOnTradeBlock": false
      },
      {
        "id": "3186",
        "name": "Kenny Clark",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3238",
        "name": "Yannick Ngakoue",
        "nickname": "Kcinnay Euokagn",
        "isOnTradeBlock": false
      },
      {
        "id": "3242",
        "name": "Kenyan Drake",
        "nickname": "Miami Miracle",
        "isOnTradeBlock": false
      },
      {
        "id": "3294",
        "name": "Dak Prescott",
        "nickname": "The Fortress",
        "isOnTradeBlock": false
      },
      {
        "id": "3969",
        "name": "Leonard Fournette",
        "nickname": "Button",
        "isOnTradeBlock": false
      },
      {
        "id": "4017",
        "name": "Deshaun Watson",
        "nickname": "EZ-D",
        "isOnTradeBlock": false
      },
      {
        "id": "4034",
        "name": "Christian McCaffrey",
        "nickname": "Vegan",
        "isOnTradeBlock": false
      },
      {
        "id": "4146",
        "name": "Dede Westbrook",
        "nickname": "Decrick De'Shawn",
        "isOnTradeBlock": false
      },
      {
        "id": "4150",
        "name": "Wayne Gallman",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4220",
        "name": "Jayon Brown",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4951",
        "name": "D.J. Chark",
        "nickname": "The Flash",
        "isOnTradeBlock": false
      },
      {
        "id": "4972",
        "name": "Mason Rudolph",
        "nickname": "Red Nose",
        "isOnTradeBlock": false
      },
      {
        "id": "5086",
        "name": "Marquez Valdes-Scantling",
        "nickname": "The 3rd",
        "isOnTradeBlock": false
      },
      {
        "id": "5870",
        "name": "Daniel Jones",
        "nickname": "Danny Dimes ",
        "isOnTradeBlock": false
      },
      {
        "id": "5965",
        "name": "Miles Boykin",
        "nickname": "Need a better offer Max",
        "isOnTradeBlock": false
      },
      {
        "id": "5967",
        "name": "Tony Pollard",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "616",
        "name": "Jimmy Graham",
        "nickname": "Cracker",
        "isOnTradeBlock": false
      },
      {
        "id": "6178",
        "name": "Darwin Thompson",
        "nickname": "D-Train",
        "isOnTradeBlock": false
      },
      {
        "id": "88",
        "name": "Antoine Bethea",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "kdwolf2",
    "userID": "424392871303454720",
    "avatarID": "4d46b7d568cc71d4819293c612731196",
    "teamName":"",
    "players": [
      {
        "id": "1127",
        "name": "Danny Trevathan",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1234",
        "name": "Russell Wilson",
        "nickname": "Badger",
        "isOnTradeBlock": false
      },
      {
        "id": "1346",
        "name": "Marquise Goodwin",
        "nickname": "goodwin means better than tie",
        "isOnTradeBlock": false
      },
      {
        "id": "1386",
        "name": "Giovani Bernard",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1513",
        "name": "Ezekiel Ansah",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1737",
        "name": "Case Keenum",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1825",
        "name": "Jarvis Landry",
        "nickname": "Laundry",
        "isOnTradeBlock": false
      },
      {
        "id": "1875",
        "name": "CJ Mosley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2152",
        "name": "Teddy Bridgewater",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2330",
        "name": "Shaq Thompson",
        "nickname": "Doesnt like Kobe",
        "isOnTradeBlock": false
      },
      {
        "id": "3156",
        "name": "Joey Bosa",
        "nickname": "Boo OSU",
        "isOnTradeBlock": false
      },
      {
        "id": "3167",
        "name": "Jaylon Smith",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3233",
        "name": "Kevin Byard",
        "nickname": "has awesome first name",
        "isOnTradeBlock": false
      },
      {
        "id": "3291",
        "name": "Blake Martinez",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "331",
        "name": "Philip Rivers",
        "nickname": "Doesn't pull out",
        "isOnTradeBlock": false
      },
      {
        "id": "3321",
        "name": "Tyreek Hill",
        "nickname": "Usain",
        "isOnTradeBlock": false
      },
      {
        "id": "4035",
        "name": "Alvin Kamara",
        "nickname": "Chipmunk",
        "isOnTradeBlock": false
      },
      {
        "id": "4037",
        "name": "Chris Godwin",
        "nickname": "Last name means crusades",
        "isOnTradeBlock": false
      },
      {
        "id": "4055",
        "name": "OJ Howard",
        "nickname": "Non problematic OJ",
        "isOnTradeBlock": false
      },
      {
        "id": "4077",
        "name": "Jamal Adams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4137",
        "name": "James Conner",
        "nickname": "2 first names better than 1",
        "isOnTradeBlock": false
      },
      {
        "id": "4149",
        "name": "Jamaal Williams",
        "nickname": "Handcuff",
        "isOnTradeBlock": false
      },
      {
        "id": "4199",
        "name": "Aaron Jones",
        "nickname": "The other Aaron",
        "isOnTradeBlock": false
      },
      {
        "id": "4949",
        "name": "Derrius Guice",
        "nickname": "Dice",
        "isOnTradeBlock": false
      },
      {
        "id": "5010",
        "name": "Will Dissly",
        "nickname": "Diss track",
        "isOnTradeBlock": false
      },
      {
        "id": "5015",
        "name": "Sam Hubbard",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5854",
        "name": "Drew Lock",
        "nickname": "Prospect",
        "isOnTradeBlock": false
      },
      {
        "id": "5859",
        "name": "A.J. Brown",
        "nickname": "Different color last name AJ",
        "isOnTradeBlock": false
      },
      {
        "id": "5889",
        "name": "Bryce Love",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5927",
        "name": "Terry McLaurin",
        "nickname": "Mcflurry",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "bluto4prez",
    "userID": "425712421936578560",
    "avatarID": "9cf0ba07b858634478ff0edec78d0412",
    "teamName": "Scandals and Animals",
    "players": [
      {
        "id": "1067",
        "name": "Marvin Jones",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1111",
        "name": "Andrew Luck",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1166",
        "name": "Kirk Cousins",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1213",
        "name": "Harrison Smith",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1244",
        "name": "Josh Gordon",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1339",
        "name": "Zach Ertz",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1388",
        "name": "Tyler Eifert",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1817",
        "name": "Sammy Watkins",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "19",
        "name": "Joe Flacco",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1905",
        "name": "Christian Kirksey",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2393",
        "name": "Danielle Hunter",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3166",
        "name": "Myles Jack",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3198",
        "name": "Derrick Henry",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3306",
        "name": "Jordan Howard",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3747",
        "name": "Cory Littleton",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3973",
        "name": "Myles Garrett",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4029",
        "name": "Dalvin Cook",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4040",
        "name": "JuJu Smith-Schuster",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4455",
        "name": "Matt Breida",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "490",
        "name": "Chase Daniel",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5170",
        "name": "Phillip Lindsay",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "529",
        "name": "Carlos Dunlap",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5846",
        "name": "D.K. Metcalf",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "829",
        "name": "Andy Dalton",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "943",
        "name": "Kyle Rudolph",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "947",
        "name": "Julio Jones",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "MOldenkamp",
    "userID": "454137167803838464",
    "avatarID": "50ba16db60e2e064b58bc354ce163ddd",
    "teamName":"",
    "players": [
      {
        "id": "1144",
        "name": "Cole Beasley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "125",
        "name": "Calais Campbell",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1387",
        "name": "Rex Burkhead",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1833",
        "name": "Damien Williams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1848",
        "name": "James White",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1992",
        "name": "Allen Robinson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2064",
        "name": "Demarcus Lawrence",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2118",
        "name": "Eric Ebron",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2197",
        "name": "Brandin Cooks",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2257",
        "name": "Carlos Hyde",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2279",
        "name": "Paul Richardson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2315",
        "name": "Todd Gurley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2338",
        "name": "Landon Collins",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2677",
        "name": "Neville Hewitt",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3161",
        "name": "Carson Wentz",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3199",
        "name": "Michael Thomas",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3200",
        "name": "Sterling Shepard",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3222",
        "name": "Deion Jones",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3976",
        "name": "Mitch Trubisky",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4133",
        "name": "John Johnson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4967",
        "name": "Bradley Chubb",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4984",
        "name": "Josh Allen",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5026",
        "name": "Tre'Quan Smith",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5032",
        "name": "Jordan Akins",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5890",
        "name": "Damien Harris",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5937",
        "name": "Diontae Johnson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5985",
        "name": "Foster Moreau",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6011",
        "name": "Gardner Minshew",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6153",
        "name": "Dexter Williams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6446",
        "name": "Jonathan Hilliman",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "nicklasure",
    "userID": "464903254648549376",
    "avatarID": "405213591fe488220f2f4f79d9cc28eb",
    "teamName":"",
    "players": [
      {
        "id": "1038",
        "name": "Chandler Jones",
        "nickname": "His brother definitely doesnt take steroids",
        "isOnTradeBlock": false
      },
      {
        "id": "1071",
        "name": "Mohamed Sanu",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1426",
        "name": "DeAndre Hopkins",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "147",
        "name": "DeSean Jackson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1502",
        "name": "Chris Thompson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "223",
        "name": "Larry Fitzgerald",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2320",
        "name": "Melvin Gordon",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2749",
        "name": "Raheem Mostert",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3157",
        "name": "Will Fuller",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3163",
        "name": "Jared Goff",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3181",
        "name": "Keanu Neal",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3202",
        "name": "Austin Hooper",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3286",
        "name": "Demarcus Robinson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4038",
        "name": "John Ross",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4056",
        "name": "Jabrill Peppers",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4098",
        "name": "Kareem Hunt",
        "nickname": "My kicker ",
        "isOnTradeBlock": false
      },
      {
        "id": "4381",
        "name": "Taysom Hill",
        "nickname": "Future Drew Brees ",
        "isOnTradeBlock": false
      },
      {
        "id": "4980",
        "name": "Leighton Vander Esch",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4990",
        "name": "Darius Leonard",
        "nickname": "Tackle machine ",
        "isOnTradeBlock": false
      },
      {
        "id": "5068",
        "name": "Kerryon Johnson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5130",
        "name": "Auden Tate",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5139",
        "name": "Trey Quinn",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "533",
        "name": "Colt McCoy",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5549",
        "name": "Darrel Williams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5849",
        "name": "Kyler Murray",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5857",
        "name": "Noah Fant",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5872",
        "name": "Deebo Samuel",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5903",
        "name": "Will Grier",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5955",
        "name": "Hunter Renfrow",
        "nickname": "Another white receiver what am I doing ",
        "isOnTradeBlock": false
      },
      {
        "id": "6136",
        "name": "Jarrett Stidham",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "856",
        "name": "JJ Watt",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "00Schwebin",
    "userID": "464910814474661888",
    "avatarID": "742a9945bbbe992e56db3884006cd326",
    "teamName":"",
    "players": [
      {
        "id": "1048",
        "name": "Lamar Miller",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1211",
        "name": "Rhett Ellison",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1408",
        "name": "Le'Veon Bell",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1576",
        "name": "Tyrann Mathieu",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1793",
        "name": "Trey Burton",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2227",
        "name": "Aaron Donald",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2238",
        "name": "John Brown",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2251",
        "name": "Logan Thomas",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2343",
        "name": "Preston Smith",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "289",
        "name": "Drew Brees",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "290",
        "name": "Eric Weddle",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3257",
        "name": "Jacoby Brissett",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3594",
        "name": "Peyton Barber",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4066",
        "name": "Evan Engram",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4068",
        "name": "Mike Williams",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4070",
        "name": "TJ Watt",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4663",
        "name": "Austin Ekeler",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4866",
        "name": "Saquon Barkley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4965",
        "name": "Marcus Davenport",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4968",
        "name": "Tremaine Edmunds",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4981",
        "name": "Calvin Ridley",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4983",
        "name": "D.J. Moore",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5038",
        "name": "Michael Gallup",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5045",
        "name": "Courtland Sutton",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5108",
        "name": "Luke Falk",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5131",
        "name": "Justin Jackson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5310",
        "name": "Antonio Callaway",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "536",
        "name": "Antonio Brown",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "605",
        "name": "Everson Griffen",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6595",
        "name": "Devlin Hodges",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "676",
        "name": "LeSean McCoy",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  },
  {
    "userName": "hanshuiras",
    "userID": "467133843745271808",
    "avatarID": "0b0c6764f4ca773e86260b43c1731dfe",
    "teamName":"",
    "players": [
      {
        "id": "1192",
        "name": "Lavonte David",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1233",
        "name": "Bobby Wagner",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1343",
        "name": "Jordan Poyer",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "138",
        "name": "Ben Roethlisberger",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1466",
        "name": "Travis Kelce",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "1476",
        "name": "Latavius Murray",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "184",
        "name": "Adrian Peterson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2078",
        "name": "Odell Beckham Jr",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2161",
        "name": "Jerick McKinnon",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2309",
        "name": "Amari Cooper",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2374",
        "name": "Tyler Lockett",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "2588",
        "name": "Malcolm Brown",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "284",
        "name": "Delanie Walker",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3172",
        "name": "Deforest Buckner",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "3206",
        "name": "Joe Schobert",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4217",
        "name": "George Kittle",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4273",
        "name": "Chris Carson",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4863",
        "name": "Josh Rosen",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4892",
        "name": "Baker Mayfield",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4943",
        "name": "Sam Darnold",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "4994",
        "name": "Kalen Ballage",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5064",
        "name": "Tracy Walker",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5107",
        "name": "Jaylen Samuels",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5127",
        "name": "Kyle Allen",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5850",
        "name": "Josh Jacobs",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5863",
        "name": "JJ Arcega-Whiteside",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "5987",
        "name": "Alexander Mattison",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "6151",
        "name": "Miles Sanders",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "642",
        "name": "Golden Tate",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "954",
        "name": "Cam Newton",
        "nickname": "",
        "isOnTradeBlock": false
      },
      {
        "id": "957",
        "name": "Cameron Jordan",
        "nickname": "",
        "isOnTradeBlock": false
      }
    ]
  }
];