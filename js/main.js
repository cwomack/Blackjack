// ----- ADD COMMENTS SO THAT SOMEONE WHO'S ON WEEK 1 GETS IT -----

/*----- constants -----*/
// Build a deck with 52 cards, all suits and pips
const suits = ['s', 'c', 'd', 'h'];
const pips = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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

//Deck of 52 cards arranged as <masterDeck>
//Now we build the master deck with pip (card#) and suit
//Array of objects lets us access "key: value" later


// TO-DO - init ()
// reset play

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
        alert("Out of Cards!");
        playerHand;
    }
};

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

    newGameBtn.style.visibility = "visible";
};

// Create a new function that you call after deal that calculates
// current score of p and c and updates score object

function calcScore() {
    playerHand.forEach((card) => {
        // score.player += card.value is same as below
        score.player = score.player + card.value
    });

    computerHand.forEach((card) => {
        // score.computer += card.value is same as below
        score.computer = score.computer + card.value 
    });
    console.log(score)
    console.log(playerHand)
}

function scoreReset () {
    score.player = 0;
    score.computer = 0;
}



// ------- Working Above Here ------- // 
function render () {
}

let pHandCount=[];
let cHandCount= [];
function tie () {
    alert("Dealer and Player tied! Push all bets.")
    newGameBtn.style.visibility = "visible";
    hitBtn.style.visibility = "hidden";
    standBtn.style.visibility = "hidden";
    betBtn.style.visibility = "hidden";
}
function hit(turn = "player") {
    const whosHand = turn === 'computer' ? computerHand : playerHand;
    let randomPlayerCard = deal();
    whosHand.push(randomPlayerCard);
    if (turn === 'computer') {
        score.computer = score.computer + randomPlayerCard.value;
    } else {
        score.player = score.player + randomPlayerCard.value;
    }
    console.log(score)
    console.log(playerHand, computerHand);
}
// hit("computer");

function stand() {
    console.log("stand");
}

function bet() {
    console.log("bet");
}

newGameBtn.addEventListener('click', startHand);
hitBtn.addEventListener('click', hit);
standBtn.addEventListener('click', stand);
betBtn.addEventListener('click', bet);

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