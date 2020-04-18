// var score1 = 0;
// var score1 = 0;
var scores, roundScore, activePlayer, gamePlaying;
var input, winningScore;
init();
var lastDiceRoll;

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    //1. generate ramdom number

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. display the result

  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';
  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

  if (dice1 !== 1 && dice2 !== 1) {
    //add score
    //roundScore = roundScore + dice;
    roundScore += dice1 + dice2;

    document.querySelector('#current-' + activePlayer).textContent = roundScore;

  } else {
    //next player
    nextPlayer();
  }
    // update the round score IF the rolled number was not a 1
    //if (dice < 1)
    /* if (dice1 === 6 && lastDiceRoll === 6) {
      //player looses scores
      scores[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent = '0';
      dice1 = 0; // If not set and '6' rolls again, next players loses score.
      nextPlayer();
    } else if (dice1 !== 1) {
      //add score
      //roundScore = roundScore + dice;
      roundScore += dice1 + dice2;

      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
      //next player
      nextPlayer();
    }
    lastDiceRoll = dice1;
    */
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

  if (gamePlaying) {

    // update CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore

    // update the UL (user interface)
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check IF player won the game

    input = document.getElementById("finalPoints").value;
    // if(input){
    //   input;
    // } else {
    //   input = 100;
    // }
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';

      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      //next player
      nextPlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() { //DRY(don't repeat yourself) function
  //ternary operator
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
}

function init() { //initialize // start our game / code
  // reset active score,player
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';


  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  //remove winner cls
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  //set players name
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  //remove active class and set it to player-0 bcoz as soon as player clicks on new game player 1 will be the active player
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');




}
