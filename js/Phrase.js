/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const ul= document.getElementById('phrase').firstElementChild
class Phrase {
    constructor(phrase){
        this.phrase=phrase.toLowerCase();
    };
    addPhraseToDisplay(){
        for (let i = 0; i < this.phrase.length; i++){
            const li = document.createElement('li');
            if(this.phrase[i] === ' '){
                li.className = 'space';
            }else{
                li.className = ` hide letter ${this.phrase[i]}`;
                li.textContent = this.phrase[i];
            }
            ul.appendChild(li);
        }
    }
    checkLetter(letter){ //checks to see if the letter selected by player matches one of the letter in the phrase
        return this.phrase.includes(letter);
    }
    showMatchedLetter(letter){   //displays the letter on the board that matches the letter the player selected 
        const matchLetter= document.getElementsByClassName(letter)
        for(let i= 0; i< matchLetter.length; i++){
            matchLetter[i].classList.remove('hide')
            matchLetter[i].classList.add('show')
        }
    }
}