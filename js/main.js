// ----- ADD COMMENTS SO THAT SOMEONE WHO'S ON WEEK 1 GETS IT -----

/*----- constants -----*/
// Build a deck with 52 cards, all suits and pips
const suits = ['s', 'c', 'd', 'h'];
const pips = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let playerHand = [];
let dealerHand = [];
let masterDeck = [];
const newGameBtn = document.getElementById('newGame');
const hitBtn = document.getElementById('hit');
const standBtn = document.getElementById('stand');
const betBtn = document.getElementById('bet');

//Deck of 52 cards arranged as <masterDeck>
//Now we build the master deck with pip (card#) and suit
//Array of objects lets us access "key: value" later
function buildMasterDeck() {
    masterDeck = [];
    suits.forEach(suit => {
        pips.forEach(pip => {
            let cardObj = {
                suit: suit,
                pip: pip,
            }
            masterDeck.push(cardObj)
        })
    })
}
buildMasterDeck();

// This is the copy of the main deck that can be mutated
// based on cards being dealt and .pop'd out
let playDeck = [...masterDeck];

// Function that will randomize card
function newPlayerCard() {
    let newCard = Math.floor(Math.random() * playDeck.length);
    playerHand.push(playDeck[newCard]);
    console.log(playerHand);
}
newPlayerCard();
console.log(playDeck);

function deal() {
    console.log("deal")
}

function hit() {
    console.log("hit");
}

function stand() {
    console.log("stand");
}

function bet() {
    console.log("bet");
}

newGameBtn.addEventListener('click', deal)
hitBtn.addEventListener('click', hit)
standBtn.addEventListener('click', stand)
betBtn.addEventListener('click', bet)






/*Jims JavaScript    
function renderShuffledDeck() {
shuffledDeck = [];
while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
}
renderDeckInContainer(shuffledDeck, shuffledContainer);
}







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
//     if (shuffleDeck === true);
// };
// let newGame;
// const shuffleDeck = function();
// // e-listen for the click of new game button to shuffle
// // this will also initialize the game first time & replays
// function (e.target) {
//     button.addEventListener.('click', shuffleDeck)
// }
// // TO DO - Function to deal to player first, then dealer
// // and it will need to mutate the underlying deck to remove
// // the cards that have been dealt: 

//TO DO - pass through the information of card randomized card to
// visually show matching counterpart through array method to sync 
// CSS with the card presented....  "Data-attribute" thing maybe?

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