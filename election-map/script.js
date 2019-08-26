
var makePolitician = function(name, partyColor)
{
  var politician = {};
  
    politician.name = name;
    politician.electionResults = null;
    politician.partyColor = partyColor;
    politician.totalVotes = 0;
    
    politician.voteTally = function() {
      this.totlVotes = 0;
      
      for(var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }   
};
  
  return politician;
}

var mcFly = makePolitician("Marty McFly", [132, 17, 11]);
var biff = makePolitician("Biff Tannen", [245, 141, 136]);

  
mcFly.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]

biff.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]

mcFly.electionResults[9] = 1;
mcFly.electionResults[4] = 17;
mcFly.electionResults[43] = 11;

biff.electionResults[9] = 28;
biff.electionResults[4] = 38;
biff.electionResults[43] = 27;


var setStateResults = function(state) {
  theStates[state].winner = null;
  
  if (mcFly.electionResults[state] > biff.electionResults[state]) {
    theStates[state].winner = mcFly;
  } else if (mcFly.electionResults[state] < biff.electionResults[state]) {
    theStates[state].winner = biff;
  }
  
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  candidateOne.innerText = mcFly.name;
  candidateTwo.innerText = biff.name;
  candidateOneResult.innerText = mcFly.electionResults[state];
  candidateTwoResult.innerText = biff.electionResults[state];
  
  if (theStates[state].winner === null) {
    stateWinnerName.innerText = "DRAW";
  } else {
    stateWinnerName.innerText = theStates[state].winner.name;
  }
};

mcFly.voteTally();
biff.voteTally();


var winner = "";
  if (mcFly.totalVotes > biff.totalVotes){
    winner = mcFly.name;
  }
  else if (mcFly.totalVotes < biff.totalVotes){
    winner = biff.name;
  }
  else {
    winner = "DRAW";
  }

console.log("McFly's party color is " + mcFly.partyColor);
console.log("Biff's party color is " + biff.partyColor);

//Country Table
var countryResults = document.getElementById("countryResults");
countryResults.children[0].children[0].children[0].innerText = mcFly.name;
countryResults.children[0].children[0].children[1].innerText = mcFly.totalVotes;
countryResults.children[0].children[0].children[2].innerText = biff.name;
countryResults.children[0].children[0].children[3].innerText = biff.totalVotes;
countryResults.children[0].children[0].children[5].innerText = winner;

//State Results Table
var stateResults = document.getElementById("stateResults");
var header = stateResults.children[0];
var body = stateResults.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidateOne = body.children[0].children[0];
var candidateTwo = body.children[1].children[0];
var candidateOneResult = body.children[0].children[1];
var candidateTwoResult = body.children[1].children[1];
var stateWinnerName = body.children[2].children[1];


