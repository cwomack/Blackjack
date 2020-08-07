# Blackjack


##  ♠️♥️♣️♦️  Welcome to "Blackjack by Womack"  ♠️♥️♣️♦️

Browser game built from scrath with  _Developer Level:_ __"2 weeks in"__  skills!


### _Technologies Used:_ 

* HTML
* CSS
* JavaScript


### _Project Goals:_ 

* Get practice using separation of the view logic (display) and business logic (application)
* 
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

END


Some of the app's features may need to be pseudocoded, that is, outlining the app's logic in a plain, informal way.
Pseudocode the app's overall functionality first.
More detailed pseudocode for a given feature may be required later.
Analyze the application's state (data)

What does the application need to "remember" throughout its execution?


Note that in an application with a database, we would analyze the database design during this step.
Set up the project

### _User Stories:_

* "The app's features, from the user's point of view, should be described using User Stories. User stories follow this template: As a [role], I want [feature] because [reason]. Example user story: As a player, I want to see a list of high-scores so that I know what I have to score to make the list."

* When user hits play button, cards are dealt per wireframe
* User has ability to see dealer's face up card and theirs
* Choice to either "hit" or "stand" or "fold" 
* Dealer logic of "soft"/"hard" cards and if they need to "hit" 
* Limit of how many cards can be used to "hit" based on 21 limit
* Comparison of user cards to dealer cards
* Message of Win/Loss/Push to user
* Ability to deal a new hand

Potential upgrades once the game logic is functioning:

* CSS Styling: cards, chips, backgrounds, etc.
* Able to place bets (bonus items would be doubling down)
* Function for "what the book says" to do based on players hand
* Feature to allow 1 deck or multi-deck

## Wireframe:

<img src="https://i.imgur.com/Y10z4cO.jpg" width="500">


### _Resources Used:_

* Jim Clark's Rep.it for [CSS Card Library](https://repl.it/@jim_clark/Use-CSS-Card-Library#index.html)
* [Guide on How to Build a Browser Game](https://git.generalassemb.ly/SEI-CC/SEI-CC-9/blob/master/work/w01/d5/01-04-guide-to-building-a-browser-game.md)
* [Official Rules and guide to Blackjack card game](https://bicyclecards.com/how-to-play/blackjack/)



### Notes for continued work:

* Conversion of Pseudocode to game logic (__in progress__)
