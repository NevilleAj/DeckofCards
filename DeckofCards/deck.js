const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

class Deck {
    deck = [];
        
    // TODO: constructor should place all 52 cards into the deck array 
    reset(){
    this.deck = [];
        for(let suit = 0; suit < suits.length-1; suit++){
            for (let value = 0; value <values.length-1; value++){
                this.deck.push(new Card(suits[suit], values[value]));
            }

        }
            
    }
    

    // TODO: suffle should randomize the cards order in the deck
    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
}
    // TODO: deal should remove the top card from the deck and return it
    deal()
    {
            return this.deck.pop();
    }
}



