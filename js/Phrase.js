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
    // checkLetter()
    // showMatchedLetter()
}