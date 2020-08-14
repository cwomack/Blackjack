const suits = ['s', 'c', 'd', 'h'];
const pips = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let playerHand = [];
let computerHand = [];
let masterDeck = [];
let score = {
    player: 0,
    computer: 0,
};
const newGameBtn = document.getElementById('newGame');
const hitBtn = document.getElementById('hit');
const standBtn = document.getElementById('stand');
const betBtn = document.getElementById('bet');
const nextHandBtn = document.getElementById('nextHand');
const playerArea = document.querySelector('.playerHand');
const computerArea = document.querySelector('.computerHand');
const pCardArea = playerArea.querySelector('.playArea');
const cCardArea = computerArea.querySelector('.playArea');
let pBoardScore = playerArea.querySelector('.scoreDisplay .plyrScore')

//  ------------------- MASTER DECK -------------------
function buildMasterDeck(){ 
    masterDeck = [],
    suits.forEach(function(suit) {
        pips.forEach(function(pip) {
            let cardObj = {
                suit: suit,
                pip: pip,
                value: Number(pip) || (pip=== 'A' ? 11 : 10)
            }
            masterDeck.push(cardObj);
        });
    });
}
buildMasterDeck();
let playDeck = [...masterDeck];

function deal() {
    if (playDeck.length >= 1) {
        let newCard = playDeck.splice((Math.floor(Math.random() * playDeck.length)), 1);
        return newCard[0];
    } else {
        playerHand;
    }
    render();
};

//  ------------------- PLAY F(x)'s -------------------
function startHand() {
    let randomPlayerCard = deal();
    playerHand.push(randomPlayerCard);

    let randomComputerCard = deal();
    computerHand.push(randomComputerCard);

    let randomPlayerCard2 = deal();
    playerHand.push(randomPlayerCard2);

    let randomComputerCard2 = deal();
    computerHand.push(randomComputerCard2);

    calcScore();
    render();
    newGameBtn.disabled = true;
    hitBtn.disabled = false;
    standBtn.disabled = false;
    betBtn.disabled = false;
};

function init() {
    score.player = 0;
    score.computer = 0;
    hitBtn.disabled = true;
    standBtn.disabled = true;
    betBtn.disabled = true;
    newGameBtn.disabled = false;
    nextHandBtn.disabled - false;
    pBoardScore.innerHTML = score.player;
}

function createCardEl(card) {
    return `<div class="card ${card.suit}${card.pip}"></div>`
}

function render () {
    pBoardScore.textContent = score.player;
    

    let playerCardHTML = '';
    let computerCardHTML = '';

    playerHand.forEach((card) => {
        playerCardHTML += createCardEl(card);
    })
    pCardArea.innerHTML = playerCardHTML;

    computerHand.forEach((card) => {
        computerCardHTML += createCardEl(card);
    })
    cCardArea.innerHTML = computerCardHTML;
}

function scoreReset() {
    score.player = 0;
    score.computer = 0;
}

function calcScore() {
    playerHand.forEach((card) => {
        // score.player += card.value is same as below
        score.player = score.player + card.value
    });

    computerHand.forEach((card) => {
        // score.computer += card.value is same as below
        score.computer = score.computer + card.value 
    });
    console.log(score);
    console.log(playerHand);
    console.log(computerHand);
}

function hit(turn = "player") {
    const whosHand = turn === 'computer' ? computerHand : playerHand;
    let randomPlayerCard = deal();
    whosHand.push(randomPlayerCard);
    if (turn === 'computer') {
        score.computer += randomPlayerCard.value;
    } else {
        score.player +=randomPlayerCard.value;
    }
    render();
    // revealDealerCard();   -???
    if (score.computer === 21 || score.player > 21) {
        win('computer');
        return;
    }
    if (score.computer === score.player) {
        win('tie');
        return;
    }
}

function stand() {
    const whosHand = turn === 'computer' ? computerHand : playerHand;
    let randomComputerCard = deal();
    whosHand.push(randomComputerCard);
    if (turn === 'computer') {
        score.computer = score.computer + randomComputerCard.value;
    } else {
        score.player = score.player + randomComputerCard.value;
    }
    console.log("stand");
}

function checkScores() {
    if (score.player > 21) {
        win('computer');
    } else if(score)
}

function bet() {
    console.log("bet");
}

function win(whoWon) {
    if (whoWon === 'tie') { 
        message.textContent = "It's a tie! Push all bets back and try again."
    } else {
        message.textContent = `${whoWon === "player"  ? 'You win!' : 'Dealer wins, better luck next time.'}`;
     }
    nextHandBtn.disabled = false
    newGameBtn.disabled = true
    hitBtn.disabled = true
    standBtn.disabled = true
    betBtn.disabled = true
}
function nextHand() {
    init();
    deal();
}

init();

//  ------------------- EVENT LISTENERS -------------------
newGameBtn.addEventListener('click', startHand);
hitBtn.addEventListener('click', hit);
standBtn.addEventListener('click', stand);
betBtn.addEventListener('click', bet);




//  ------------------- BELOW IS INCOMPLETE -------------------

// function tie () {
//     alert("Dealer and Player tied! Push all bets.")
//     newGameBtn.style.visibility = "visible";
//     hitBtn.style.visibility = "hidden";
//     standBtn.style.visibility = "hidden";
//     betBtn.style.visibility = "hidden";
// }

//TO DO - pass through the information of card randomized card to
// visually show matching counterpart through array method to sync 
// CSS with the card presented....  "Data-attribute" thing maybe?









/*----- app's state (variables) -----*/
/*
1.) Who's turn? 
2.) Bet
3.) 



*/
/*----- cached element references -----*/









/*----- event listeners -----*/









/*----- functions -----*/
// let render = function (shuffleDeck) {

// };
// let newGame;






// run function to see if count <= 21, if so then go to dealer turn

//TO DO - player must now choose hit/stand (bet will be added later)
// so the following outcomes can happen: 
//      1.) Hit - run function push player new card/mutate deck
//      and run function to see if count <= 21
//      2.) Stand - run function that pushes new card/mutate deck
//      and go to dealer hit/stand (While 17 or more, stand)

//TO DO - If player HITS then add new card to player hand and 
// run function to see if >= 21.  If greater, bust and dealer turn. 


/* 
"For example, you might decide to model a game of tic-tac-toe using 
the values of 1, -1 or null to represent whether a square holds 
Player X, Player O, or nobody, respectively. However, when it comes 
time to transfer the app's state to the DOM, you can visualize the 
state anyway you want, e.g., a value of 1 is "rendered" with a 
certain image, etc."

    * IDEA - make cards assigned to this value strategy when 
    rendered they can be tied to a numerical value tied to suit and 
    card #


    */