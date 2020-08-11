/*----- constants -----*/

//Deck of 52 cards arranged as <masterDeck>
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let masterDeck = [];
function buildMasterDeck() {
    masterDeck = [];
    suits.forEach(suit => {
        ranks.forEach(card => {
            let cardObj = {
                suit: suit,
                pip: card,
            }
            masterDeck.push(cardObj)
        })
    })
}
buildMasterDeck();
console.log(masterDeck);
let deckCopy = [...masterDeck];
console.log(deckCopy)





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