/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay= document.querySelector('#overlay')
class Game{ //Game class that manages the game state and logic.
    constructor() {
        this.missed= 0; //tracks number of missed guesses.
        this.phrases=[ //array of the phrases created from new instance of Phrase class
            new Phrase('Speak of the devil'),
            new Phrase('A piece of cake'),
            new Phrase('Break a leg'),
            new Phrase('No pain no gain'),
            new Phrase('Let the cat out of the bag'),
            new Phrase('Bite the bullet'),
            new Phrase('The last straw'),
            new Phrase('Once in a blue moon'),
            new Phrase('kill two birds with one stone')
        ];
        this.activePhrase = null; // the phrase object that is currently selected. initially null but once game starts hold value of phrase from getRandomPhrase() method. 
    }
    getRandomPhrase() { //Goes through array of phrases and returns a random phrase.
        const randomIndex= Math.floor(Math.random() * this.phrases.length);
        const phrase= this.phrases[randomIndex];
        return phrase;
    };
    startGame() {// method to hide start of game overlay and calls getRandomPhrase to put the random phrase into activePhrase and adds it to board by calling addPhraseToDisplay().
        overlay.style.display= 'none'
        this.activePhrase= this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
    checkForWin(){ //checks if all the previously hidden letters have been revealed meaning how many guesses the player got right or wrong.
        const hiddenLetters= document.getElementsByClassName('hide')
        if(hiddenLetters.length ===0){
            return true;
        }else{
            return false;
        }
    }
    removeLife(){ //removes life by replacing the liveHeart image with lostHeart image and if the player misses guesses five calls gameOver method. 
        const liveHeartImage= document.querySelectorAll('.tries img')
        liveHeartImage[this.missed].src= 'images/lostHeart.png';
        this.missed ++;
        if(this.missed === 5){
            this.gameOver(false)
        }
    }

    handleInteraction(button){ // if button has been clicked by player, it is disabled. also checks and adds different styling property if the player chooses a correct or wrong matching letter. If the player wins the game calls for gameOver method. 
        button.disabled= true;
        const correctButton= this.activePhrase.checkLetter(button.textContent)
        if(!correctButton){
            button.classList.add('wrong')
            this.removeLife();
        }else{
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver(true)
            }
        }
    }
    gameOver(gameWon){ //displays overlay screen with different properties depending on if the layer won or lost.
        const overlayH1= document.getElementById("game-over-message")
        overlay.style.display= 'block'
        if(gameWon){
            overlay.className= 'win'
            overlayH1.innerHTML= "Yayyyy you are a winner"
        }else{
            overlay.className= 'lose'
            overlayH1.innerHTML= "Sorry game over, better luck next time"
        }    
    }
}
