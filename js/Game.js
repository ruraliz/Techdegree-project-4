/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor() {
        this.missed=0;
        this.phrases=[
            new Phrase('phrase one'),
            new Phrase('phrase two'),
            new Phrase('phrase three'),
            new Phrase('phrase four'),
            new Phrase('phrase five')
        ];
        this.activePhrase = null;
    }
    startGame() {
        const overlay= document.querySelector('#overlay')
        overlay.style.display= 'none'
        this.activePhrase= this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        const randomIndex= Math.floor(Math.random() * this.phrases.length);
        const phrase= this.phrases[randomIndex];
        return phrase;
    };
    checkForWin(){
        const hiddenLetters= document.getElementsByClassName('.hide')
        if(hiddenLetters.length ===0){
            return true;
        }else{
            return false;
        }
    }
    removeLife(){
        const liveHeartImage= document.querySelectorAll('.tries img')
        if(this.missed < 5){
            liveHeartImage[this.missed].src= 'images/lostHeart.png';
            this.missed ++;
        } else if(this.missed === 5){
            this.gameOver();
        }
    }
    gameOver(){
        
    }
}
