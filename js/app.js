/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

const startGameButton= document.querySelector('#btn__reset')
const keyBoard = document.querySelectorAll('.key')
let game;
startGameButton.addEventListener('click', (e)=> {
    game = new Game(); 
    game.startGame();
})
keyBoard.forEach(button => {
    button.addEventListener('click', (e) => {
        game.handleInteraction(e.target)
    })
})


