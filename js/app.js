/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

const startGameButton= document.querySelector('#btn__reset')
let game;
startGameButton.addEventListener('click', (e)=> {
    game = new Game(); 
    game.startGame();
})


