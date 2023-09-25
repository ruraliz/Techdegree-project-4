/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

const startGameButton= document.querySelector('#btn__reset')
const keyBoard = document.querySelectorAll('.key')
let game;
startGameButton.addEventListener('click', (e)=> {
    resetGameBoard();
    game = new Game(); 
    game.startGame();
})
keyBoard.forEach(button => {
    button.addEventListener('click', (e) => {
        game.handleInteraction(e.target)
    })
})
function resetGameBoard(){
    const ul= document.querySelector('#phrase ul')
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    keyBoard.forEach(button => {
        button.disabled= false;
        button.classList.remove('wrong')
        button.classList.remove('chosen')
    })
    const liveHeartImage= document.querySelectorAll('.tries img')
    liveHeartImage.forEach(heartImage=> heartImage.src= 'images/liveHeart.png' )
}


