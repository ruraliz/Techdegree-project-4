/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay= document.querySelector('#overlay')
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
        const hiddenLetters= document.getElementsByClassName('hide')
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
            this.gameOver(false);
        }
    }
    gameOver(gameWon){
        const overlayH1= document.getElementById("game-over-message")
        overlay.style.display= 'block'
        if(gameWon){
            overlay.classList.add('win') 
            overlayH1.innerHTML= "Yayyyy you are a winner"
        }else{
            overlay.classList.add('lose') 
            overlayH1.innerHTML= "Sorry game over, better luck next time"
        }    
    }

    handleInteraction(button){
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
}
