// var score1 = 0;
// var score1 = 0;
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    //1. generate ramdom number

    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    diceDOM.src = 'dice-' + dice + '.png';

    // update the round score IF the rolled number was not a 1
    //if (dice < 1)

    if (dice !== 1) {
      //add score
      //roundScore = roundScore + dice;
      roundScore += dice;

      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
      //next player
      nextPlayer();
    }
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
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';

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


function nextPlayer() { 
  //ternary operator
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

function init() { 
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');


}
