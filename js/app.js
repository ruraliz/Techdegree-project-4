/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

const startGameButton= document.querySelector('#btn__reset')
const keyBoard = document.querySelectorAll('.key')
let game;
startGameButton.addEventListener('click', (e)=> { //event listener for when user clicks the start game button. 
    resetGameBoard();
    game = new Game();  //creating new instance of the Game class.
    game.startGame(); //calling startGame method from Game class. 
})
keyBoard.forEach(button => { //event listener to call the handInteraction method which controls the games logic when keyboards are being clicked.
    button.addEventListener('click', (e) => {
        game.handleInteraction(e.target)
    })
})
function resetGameBoard(){ //After the game has ended, this function resets everything, removes the li elements, undo the disabled keyboards and reset all the heart to liveHearts.
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

document.addEventListener('keydown', (event)=>{ //event listener to let player use physcical computer keyboard to pick letters. 
    if (overlay.style.display === 'block'){
        event.preventDefault();
        return false;
    }
    keyBoard.forEach(button => {
        if(button.textContent === event.key){
            game.handleInteraction(button)
        } 
    })
})
