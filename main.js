//PLAYER FACTORY FUNCTION
const Players = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

return{getName, getMark};
};


const player1 = Players('Player 1', 'X');
const player2 = Players('Player 2', 'O');

//GAMEBOARD MODULE
const gameBoard = (() => {
    const gameBoardArray = [];
    return{gameBoardArray};

})();

//DISPLAY CONTROLLER
const displayController = (() => {  
    const cells = document.querySelectorAll('.cell')
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
   
    //Runs placeMarker function on each cell
    cells.forEach(cell => {
        cell.addEventListener('click', placeMarker)
    });

    function placeMarker(e) {
        const container = e.target.parentElement.children
        containerArray = Array.from(container);
        let X = 0;
        let O = 0;

        //Finds out whose turn it is
        containerArray.forEach(cell => {
            if (cell.innerText === 'X') {
                X++;
            } else if (cell.innerText === 'O') {
                O++;
            }
        });

        //Places marker and indicates the next player's turn (Try making this a finction and putting it outside the placeMarker function???)
        if (e.target.innerText === '') {
            if (X <= O) {
                e.target.innerText = player1.getMark();
                p1.classList.remove('players-turn');
                p2.classList.add('players-turn');
                p2.style.transition = "1s";
                p1.style.transition = "0.5s";
            }   else if (X > O) {
                e.target.innerText = player2.getMark();
                p2.classList.remove('players-turn');
                p1.classList.add('players-turn');
                p1.style.transition = "0.5s";
                p2.style.transition = "1s";
            }

            searchGameBoard();
        } 
        
        console.log(gameBoard.gameBoardArray);

        //Update gameBoardArray
        gameBoard.gameBoardArray = [t1.innerText, t2.innerText, t3.innerText,
                                    m1.innerText, m2.innerText, m3.innerText,
                                    b1.innerText, b2.innerText, b3.innerText];
        return gameBoard.gameBoardArray;
    }

    console.log(gameBoard.gameBoardArray);
    function searchGameBoard() {
    gameBoard.gameBoardArray.forEach(marker => {
            console.log(marker);
    });
};


    
    //Restart Game
    const restart = document.querySelector('.restart')
    restart.addEventListener('click', restartGame);

    function restartGame() {
        cells.forEach(cell => {
            cell.innerText = '';
        });
        p2.classList.remove('players-turn');
        p1.classList.add('players-turn');
        gameBoard.gameBoardArray = [];
        console.log(gameBoard.gameBoardArray);
    }
return{};

})();


