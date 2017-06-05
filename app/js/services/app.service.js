(function() {
  'use strict';
  
  angular
    .module('app')
    .service('appService', appService);

  function appService() {
    return {
      api : function(){
        var starPlayer = {
  "creditsLeft": 250,
  "provider": {
    "source": "Various",
    "url": "https://cricapi.com/",
    "pubDate": "2017-06-04T06:35:49.209Z"
  },
  "ttl": 7,
  "v": "1",
  "cache": true,
  "imageURL": "https://cricapi.com/playerpic/35320.jpg",
  "country": "India",
  "profile": "\n\nSachin Tendulkar has been the most complete batsman of his time, the most prolific runmaker of all time, and arguably the biggest cricket icon the game has ever known. His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to geniuses - anticipation. If he didn't have a signature stroke - the upright, back-foot punch comes close - it's because he was equally proficient at each of the full range of orthodox shots (and plenty of improvised ones as well) and can pull them out at will.  \n\n",
  "bowlingStyle": "Right-arm offbreak, Legbreak googly",
  "battingStyle": "Right-hand bat",
  "playingRole": "Top-order batsman",
  "majorTeams": "India,Asia XI,Mumbai,Mumbai Indians,Yorkshire",
  "currentAge": "44 years 41 days",
  "born": "April 24, 1973, Bombay (now Mumbai), Maharashtra",
  "fullName": "Sachin Ramesh Tendulkar",
  "name": "Sachin Tendulkar",
  "data": {
    "batting": {
      "twenty20": {
        "50": "16",
        "100": "1",
        "St": "0",
        "Ct": "28",
        "6s": "38",
        "4s": "359",
        "SR": "121.08",
        "BF": "2310",
        "Ave": "32.90",
        "HS": "100*",
        "Runs": "2797",
        "NO": "11",
        "Inns": "96",
        "Mat": "96"
      },
      "listA": {
        "50": "114",
        "100": "60",
        "St": "0",
        "Ct": "175",
        "6s": "",
        "4s": "",
        "SR": "",
        "BF": "",
        "Ave": "45.54",
        "HS": "200*",
        "Runs": "21999",
        "NO": "55",
        "Inns": "538",
        "Mat": "551"
      },
      "firstClass": {
        "50": "116",
        "100": "81",
        "St": "0",
        "Ct": "186",
        "6s": "",
        "4s": "",
        "SR": "",
        "BF": "",
        "Ave": "57.84",
        "HS": "248*",
        "Runs": "25396",
        "NO": "51",
        "Inns": "490",
        "Mat": "310"
      },
      "T20Is": {
        "50": "0",
        "100": "0",
        "St": "0",
        "Ct": "1",
        "6s": "0",
        "4s": "2",
        "SR": "83.33",
        "BF": "12",
        "Ave": "10.00",
        "HS": "10",
        "Runs": "10",
        "NO": "0",
        "Inns": "1",
        "Mat": "1"
      },
      "ODIs": {
        "50": "96",
        "100": "49",
        "St": "0",
        "Ct": "140",
        "6s": "195",
        "4s": "2016",
        "SR": "86.23",
        "BF": "21367",
        "Ave": "44.83",
        "HS": "200*",
        "Runs": "18426",
        "NO": "41",
        "Inns": "452",
        "Mat": "463"
      },
      "tests": {
        "50": "68",
        "100": "51",
        "St": "0",
        "Ct": "115",
        "6s": "69",
        "4s": "",
        "SR": "",
        "BF": "",
        "Ave": "53.78",
        "HS": "248*",
        "Runs": "15921",
        "NO": "33",
        "Inns": "329",
        "Mat": "200"
      }
    },
    "bowling": {
      "twenty20": {
        "10": "0",
        "5w": "0",
        "4w": "0",
        "SR": "46.5",
        "Econ": "7.93",
        "Ave": "61.50",
        "BBM": "1/12",
        "BBI": "1/12",
        "Wkts": "2",
        "Runs": "123",
        "Balls": "93",
        "Inns": "8",
        "Mat": "96"
      },
      "listA": {
        "10": "0",
        "5w": "2",
        "4w": "4",
        "SR": "50.8",
        "Econ": "4.97",
        "Ave": "42.17",
        "BBM": "5/32",
        "BBI": "5/32",
        "Wkts": "201",
        "Runs": "8478",
        "Balls": "10230",
        "Inns": "",
        "Mat": "551"
      },
      "firstClass": {
        "10": "0",
        "5w": "0",
        "4w": "",
        "SR": "107.1",
        "Econ": "3.45",
        "Ave": "61.74",
        "BBM": "",
        "BBI": "3/10",
        "Wkts": "71",
        "Runs": "4384",
        "Balls": "7605",
        "Inns": "",
        "Mat": "310"
      },
      "T20Is": {
        "10": "0",
        "5w": "0",
        "4w": "0",
        "SR": "15.0",
        "Econ": "4.80",
        "Ave": "12.00",
        "BBM": "1/12",
        "BBI": "1/12",
        "Wkts": "1",
        "Runs": "12",
        "Balls": "15",
        "Inns": "1",
        "Mat": "1"
      },
      "ODIs": {
        "10": "0",
        "5w": "2",
        "4w": "4",
        "SR": "52.2",
        "Econ": "5.10",
        "Ave": "44.48",
        "BBM": "5/32",
        "BBI": "5/32",
        "Wkts": "154",
        "Runs": "6850",
        "Balls": "8054",
        "Inns": "270",
        "Mat": "463"
      },
      "tests": {
        "10": "0",
        "5w": "0",
        "4w": "0",
        "SR": "92.1",
        "Econ": "3.52",
        "Ave": "54.17",
        "BBM": "3/14",
        "BBI": "3/10",
        "Wkts": "46",
        "Runs": "2492",
        "Balls": "4240",
        "Inns": "145",
        "Mat": "200"
      }
    }
  }
},
oldMatches = {
  "creditsLeft": 243,
  "provider": {
    "source": "Various",
    "url": "https://cricapi.com/",
    "pubDate": "2017-06-05T03:25:47.815Z"
  },
  "ttl": 63,
  "v": "1",
  "cache": true,
  "data": [
    {
      "unique_id": "1068607",
      "description": "Durham 376/10 &  166/10  v Northamptonshire 44/1 &  338/10 *",
      "title": "Durham 376/10 &  166/10  v Northamptonshire 44/1 &  338/10 *"
    },
    {
      "unique_id": "1068546",
      "description": "Hampshire 515/10  v Warwickshire 254/10 &  75/2 *",
      "title": "Hampshire 515/10  v Warwickshire 254/10 &  75/2 *"
    },
    {
      "unique_id": "1068545",
      "description": "Middlesex 311/7 * v Somerset 443/9 ",
      "title": "Middlesex 311/7 * v Somerset 443/9 "
    },
    {
      "unique_id": "1068606",
      "description": "Nottinghamshire 229/10 &  313/6 * v Derbyshire 363/10 ",
      "title": "Nottinghamshire 229/10 &  313/6 * v Derbyshire 363/10 "
    },
    {
      "unique_id": "1068608",
      "description": "Sussex 579/8  v Worcestershire 312/10 &  124/4 *",
      "title": "Sussex 579/8  v Worcestershire 312/10 &  124/4 *"
    },
    {
      "unique_id": "1100298",
      "description": "Abahani Limited v Sheikh Jamal Dhanmondi Club",
      "title": "Abahani Limited v Sheikh Jamal Dhanmondi Club"
    },
    {
      "unique_id": "1100297",
      "description": "Gazi Group Cricketers v Prime Doleshwar Sporting Club",
      "title": "Gazi Group Cricketers v Prime Doleshwar Sporting Club"
    },
    {
      "unique_id": "1100299",
      "description": "Prime Bank Cricket Club v Mohammedan Sporting Club",
      "title": "Prime Bank Cricket Club v Mohammedan Sporting Club"
    },
    {
      "unique_id": "1098965",
      "description": "Armed Police Force Club v Nepal Police Club",
      "title": "Armed Police Force Club v Nepal Police Club"
    },
    {
      "unique_id": "1089600",
      "description": "Northern Knights v Leinster Lightning",
      "title": "Northern Knights v Leinster Lightning"
    },
    {
      "unique_id": "1022355",
      "description": "Australia v Bangladesh",
      "title": "Australia v Bangladesh"
    },
    {
      "unique_id": "1097114",
      "description": "England Lions v South Africa A",
      "title": "England Lions v South Africa A"
    }
  ],
  "cache2": true
},match = {
  "matches": [
    {
      "unique_id": 1068546,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Warwickshire",
      "team1": "Hampshire",
      "matchStarted": true
    },
    {
      "unique_id": 1068545,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Somerset",
      "team1": "Middlesex",
      "matchStarted": true
    },
    {
      "unique_id": 1068607,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Northamptonshire",
      "team1": "Durham",
      "matchStarted": true
    },
    {
      "unique_id": 1068606,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Derbyshire",
      "team1": "Nottinghamshire",
      "matchStarted": true
    },
    {
      "unique_id": 1068608,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Worcestershire",
      "team1": "Sussex",
      "matchStarted": true
    },
    {
      "unique_id": 1022355,
      "date": "2017-06-05T00:00:00.000Z",
      "team2": "Bangladesh",
      "team1": "Australia",
      "matchStarted": false,
      "squad": true
    },
    {
      "unique_id": 1089778,
      "date": "2017-06-05T00:00:00.000Z",
      "team2": "Afghanistan",
      "team1": "West Indies",
      "matchStarted": false,
      "squad": true
    },
    {
      "unique_id": 1089600,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Leinster Lightning",
      "team1": "Northern Knights",
      "matchStarted": false
    },
    {
      "unique_id": 1097114,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": true,
      "team2": "South Africa A",
      "team1": "England Lions",
      "matchStarted": false
    },
    {
      "unique_id": 1098965,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Nepal Police Club",
      "team1": "Armed Police Force Club",
      "matchStarted": true
    },
    {
      "unique_id": 1100298,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Sheikh Jamal Dhanmondi Club",
      "team1": "Abahani Limited",
      "matchStarted": false
    },
    {
      "unique_id": 1100297,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Prime Doleshwar Sporting Club",
      "team1": "Gazi Group Cricketers",
      "matchStarted": false
    },
    {
      "unique_id": 1100299,
      "date": "2017-06-05T00:00:00.000Z",
      "squad": false,
      "team2": "Mohammedan Sporting Club",
      "team1": "Prime Bank Cricket Club",
      "matchStarted": true
    },
    {
      "unique_id": 1022357,
      "date": "2017-06-06T00:00:00.000Z",
      "squad": true,
      "team2": "New Zealand",
      "team1": "England",
      "matchStarted": false
    },
    {
      "unique_id": 1068738,
      "date": "2017-06-06T00:00:00.000Z",
      "squad": true,
      "team2": "Namibia",
      "team1": "Scotland",
      "matchStarted": false
    },
    {
      "unique_id": 1099092,
      "date": "2017-06-06T00:00:00.000Z",
      "squad": false,
      "team2": "Matabeleland Tuskers",
      "team1": "Mashonaland Eagles",
      "matchStarted": false
    },
    {
      "unique_id": 1099093,
      "date": "2017-06-06T00:00:00.000Z",
      "squad": false,
      "team2": "Mountaineers",
      "team1": "Mid West Rhinos",
      "matchStarted": false
    },
    {
      "unique_id": 1098966,
      "date": "2017-06-06T00:00:00.000Z",
      "squad": false,
      "team2": "Tribhuwan Army Club",
      "team1": "Western Development Region",
      "matchStarted": false
    },
    {
      "unique_id": 1022359,
      "date": "2017-06-07T00:00:00.000Z",
      "team2": "South Africa",
      "team1": "Pakistan",
      "matchStarted": false,
      "squad": true
    },
    {
      "unique_id": 1099085,
      "date": "2017-06-08T00:00:00.000Z",
      "squad": false,
      "team2": "Victoria Sporting Club",
      "team1": "Khelaghar Samaj Kallyan Samity",
      "matchStarted": false
    },
    {
      "unique_id": 1022361,
      "date": "2017-06-08T00:00:00.000Z",
      "squad": true,
      "team2": "Sri Lanka",
      "team1": "India",
      "matchStarted": false
    },
    {
      "unique_id": 1099387,
      "date": "2017-06-08T00:00:00.000Z",
      "squad": false,
      "team2": "South Africa A",
      "team1": "Hampshire",
      "matchStarted": false
    },
    {
      "unique_id": 1068609,
      "date": "2017-06-08T00:00:00.000Z",
      "squad": false,
      "team2": "Durham",
      "team1": "Kent",
      "matchStarted": false
    },
    {
      "unique_id": 1022363,
      "date": "2017-06-09T00:00:00.000Z",
      "team2": "Bangladesh",
      "team1": "New Zealand",
      "matchStarted": false,
      "squad": true
    },
    {
      "unique_id": 1089779,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Afghanistan",
      "team1": "West Indies",
      "matchStarted": false
    },
    {
      "unique_id": 1068549,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Middlesex",
      "team1": "Lancashire",
      "matchStarted": false
    },
    {
      "unique_id": 1068548,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Yorkshire",
      "team1": "Somerset",
      "matchStarted": false
    },
    {
      "unique_id": 1068550,
      "date": "2017-06-09T00:00:00.000Z",
      "team2": "Essex",
      "team1": "Surrey",
      "matchStarted": false,
      "squad": false
    },
    {
      "unique_id": 1068612,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Nottinghamshire",
      "team1": "Gloucestershire",
      "matchStarted": false
    },
    {
      "unique_id": 1068613,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Sussex",
      "team1": "Leicestershire",
      "matchStarted": false
    },
    {
      "unique_id": 1068610,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Derbyshire",
      "team1": "Northamptonshire",
      "matchStarted": false
    },
    {
      "unique_id": 1068611,
      "date": "2017-06-09T00:00:00.000Z",
      "squad": false,
      "team2": "Glamorgan",
      "team1": "Worcestershire",
      "matchStarted": false
    },
    {
      "unique_id": 1022365,
      "date": "2017-06-10T00:00:00.000Z",
      "squad": true,
      "team2": "Australia",
      "team1": "England",
      "matchStarted": false
    }
  ],
  "v": "1",
  "ttl": 4,
  "provider": {
    "source": "Various",
    "url": "https://cricapi.com/",
    "pubDate": "2017-06-05T03:23:59.747Z"
  },
  "creditsLeft": 243
},
leagues = [{
name:'Indian Premier League',
completion:{width: "55%"}
},{
name:'KFC Bash',
completion:{width: "75%"}
},{
name:'Ranji Trophy',
completion:{width: "100%"}
},{
name:'Natwest',
completion:{width: "25%"}
}];
        return {
          starPlayer: starPlayer,
          matches: match,
          oldMatches: oldMatches,
          leagues:leagues
        };
      }
    }
  }
})();