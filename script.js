'use strict';

// Selecting Elements

const diceEl = document.querySelector('.dice');
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const curren0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// inittalValues
diceEl.classList.add("hidden");
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let scores = [0,0];
let playing = true;

const swtichPlayer = () => {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle("player--active");
        player1.classList.toggle("player--active");
}

btnRoll.addEventListener('click',()=>{
    if(playing){
    // create random dice 
    
    
        const dice = Math.trunc(Math.random() * 6) +1;

    // display dice rondomly
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    currentScore += dice;
    // check if dice is not equal to 1
    if(dice !== 1 ){
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{
        // if dice is equal to 1 swtich to player 2
        swtichPlayer();
    }
}
});

btnHold.addEventListener('click',()=>{
    if(playing)
    {
    scores[activePlayer] += currentScore;
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
   if(scores[activePlayer] >= 100){
    playing = false
       document.querySelector(`.player--${activePlayer} `).classList.add('player--winner');
       diceEl.classList.add("hidden");
    }
    
    // siwtch to an other player
    swtichPlayer();
}
});

btnNew.addEventListener('click',()=>{
    playing = true;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    currentScore = 0;
    curren0El.textContent = 0;
    current1El.textContent = 0;
    activePlayer = 0;
    currentScore = 0;
    scores = [0,0];
    diceEl.classList.add("hidden");
});
