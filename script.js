var wins = 0;
var losses = 0;
var ties = 0;
var options = ["R", "P", "S"];
//-------------------------------------------------------------------------

// function reload() {
var userPrompt = prompt(
  " Want to play Rock, Paper, Scissors?   Enter R, P or S ..."
);
console.log(userPrompt);
//---------------------------------------------------------------------------

var computerSelection = options[Math.floor(options.length * Math.random())];
console.log(computerSelection);
//---------------------------------------------------------------------------

var compAlert = alert("The computer chose " + computerSelection);
whoWins();
//---------------------------------------------------------------------------

function whoWins() {
  if (computerSelection === userPrompt) {
    ties++;
    alert("It's a tie!");
  } else if (
    (userPrompt === "P" && computerSelection === "R",
    userPrompt === "S" && computerSelection === "P",
    userPrompt === "R" && computerSelection === "S")
  ) {
    alert("You win!");
    wins++;
  } else alert("You lose :(");
  losses++;
}
//---------------------------------------------------------------------------

var stats = confirm(
  "Here are your stats: \n Wins: " +
    wins +
    "\n Losses: " +
    losses +
    "\n Ties: " +
    ties +
    "\n Want to play again?"
);
// }
// reload();
//---------------------------------------------------------------------------

// if (userPrompt == null) {
//   alert("You Pressed Cancel. You dont want to play :(");
//   //need to return to the first prompt

//---------------------------------------------------------------------------
