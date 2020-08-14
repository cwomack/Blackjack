# Blackjack


##  ♠️♥️♣️♦️  Welcome to "Blackjack by Womack"  ♠️♥️♣️♦️

Browser game built from scrath with  _Developer Level:_ __"2 weeks in"__  skills!


### _How to play:_

The objective of the game is to beat the dealer by getting a card count (total of card face values) as close to 21 (exactly 21 is best).  It is up to each individual player if an ace is worth 1 or 11. Face cards are 10 and any other card is its "pip" value.

At any given time, if a player is unsure of what to do they can leverage "the book" to determine what statistically is the best move. [Click here to see table.](https://i.imgur.com/RcNQPSk.png)

### _Technologies Used:_ 

* HTML
* CSS
* JavaScript


### _Project Goals:_ 

* Get practice using separation of the view logic (display) and business logic (application)
* __Be less of a noob and get more 1337__


### _Pseudocode:_

* Main functions to include init/play as well as render
* Function to execute when "hit" is needed for new cards by dealer or player
    * Needs to randomize among 52 cards
    * underlying array needs to mutate to remove exhausted cards from inital deal & hits
* Function to determine if max of 21 is exceeded
    * 21+ = go to loss functions
    * < 21 = allow to Stand, Hit
        * if hit then repeat to " > 21 ?"
    * BONUS - allow for bet to be placed/split
* Repeat the ability to hit essentially until user selects STAND 
* Once user stands, revert to dealer to play through their cards
* Dealer max set to <= 17 for logic on hit/stand
    * if 16 or less, dealer hits until 17+
    * Execute new caard function 
* Once dealer has card total that's >= 17, run function that compares player vs dealer cards
* Create alert that will notify player of win/loss
* Button to then "Deal Again" and replay
    * This will need to restart the play/init function
    * Listener for click on this


### _User Stories:_

Think... "As a [role], I want [feature] because [reason]" 

* When user hits play button, cards are dealt per wireframe
* User has ability to see dealer's face up card and theirs
* Choice to either "hit" or "stand" or "fold" 
* Dealer logic of "soft"/"hard" cards and if they need to "hit" 
* Limit of how many cards can be used to "hit" based on 21 limit
* Comparison of user cards to dealer cards
* Message of Win/Loss/Push to user
* Ability to deal a new hand


## Wireframe:

<img src="https://i.imgur.com/Y10z4cO.jpg" width="500">


### _Resources Used:_

* Jim Clark's Rep.it for [CSS Card Library](https://repl.it/@jim_clark/Use-CSS-Card-Library#index.html)
* [Guide on How to Build a Browser Game](https://git.generalassemb.ly/SEI-CC/SEI-CC-9/blob/master/work/w01/d5/01-04-guide-to-building-a-browser-game.md)
* [Official Rules and guide to Blackjack card game](https://bicyclecards.com/how-to-play/blackjack/)



### Future Improvements to come: 

* Button that will allow access to "what the book says" to do if a player is unsure in any siutation.

* Better CSS Styling to make the table feel more like a casino

* Multiple player options

* Choice between single deck, 6 deck, and other variations

* Ability to split cards, double down, and required ante to play

* Animations and sounds to improve user experience to be closer to casino
