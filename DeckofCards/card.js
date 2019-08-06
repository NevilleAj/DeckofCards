class Card {
    constructor(suits, value){
        this.suits = suits;
        this.value = value;
        // TODO: generate the appropriate image name here
        this.image = ``;
        if (isNaN(this.value)){
            this.image += this.value[0];
        } else {
            this.image += this.value;
        }
        this.image += this.suits[0] + ".png";
        }
    }