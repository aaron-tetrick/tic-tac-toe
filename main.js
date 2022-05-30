//PLAYER FACTORY FUNCTION
const Players = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;
    
    return{getName, getMark};
};

//GAMEBOARD MODULE
const gameBoard = (() => {
    const gameBoardArray = [];
    
    return{gameBoardArray};
})();

//DISPLAY CONTROLLER MODULE
const displayController = ((e) => {
    const player1 = Players('Player 1', 'X');
    const player2 = Players('Player 2', 'O');  
    const cells = document.querySelectorAll('.cell');
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const h1 = document.querySelector('h1');

    //Runs placeMarker function on each cell
    cells.forEach(cell => cell.addEventListener('click', placeMarker));
    
    //Places a marker and declares winner
    function placeMarker(e) {
        const container = Array.from(e.target.parentElement.children);
        let X = 0;
        let O = 0;

        //Figures out the player's turn
        container.forEach(cell => {
            if (cell.innerText === 'X') {
                X++;
            } else if (cell.innerText === 'O') {
                O++;
            };
        });

        //Places marker and indicates the next player's turn.
        if (e.target.innerText === '' && h1.innerText === "Tic Tac Toe") {
            if (X <= O) {
                e.target.innerText = player1.getMark();
                p1.classList.remove('players-turn');
                p2.classList.add('players-turn');
                p2.style.transition = "1s";
                p1.style.transition = "0.5s";
            }  else if (X > O) {
                e.target.innerText = player2.getMark();
                p2.classList.remove('players-turn');
                p1.classList.add('players-turn');
                p1.style.transition = "0.5s";
                p2.style.transition = "1s";
            };

        //Update gameBoardArray
        gameBoard.gameBoardArray = [t1.innerText, t2.innerText, t3.innerText,
                                    m1.innerText, m2.innerText, m3.innerText,
                                    b1.innerText, b2.innerText, b3.innerText];
        searchGameBoard();
        };
    };

    //Searches the board and declares a winner
    function searchGameBoard() {
        let placements = 0;
        for (i=0; i < 9; i++) {
            if (gameBoard.gameBoardArray[i] === "X" || gameBoard.gameBoardArray[i] === "O")
            placements++;
             if (placements >= 9) {
                 h1.innerText = "TIE GAME"
                 p1.classList.add('player-tie');
                 p2.classList.add('player-tie');
             };
        };
    
        //Declares winner
        gameBoard.gameBoardArray.forEach(marker => {
            if(t1.innerText === marker && t2.innerText === marker && t3.innerText === marker ||
               m1.innerText === marker && m2.innerText === marker && m3.innerText === marker ||
               b1.innerText === marker && b2.innerText === marker && b3.innerText === marker ||
               t1.innerText === marker && m1.innerText === marker && b1.innerText === marker ||
               t2.innerText === marker && m2.innerText === marker && b2.innerText === marker ||
               t3.innerText === marker && m3.innerText === marker && b3.innerText === marker ||
               t1.innerText === marker && m2.innerText === marker && b3.innerText === marker ||
               t3.innerText === marker && m2.innerText === marker && b1.innerText === marker)  {
                    if (marker === "X") {
                        h1.innerText = "Player 1 WINS"
                        p1.classList.add('player-wins');
                        p2.classList.add('player-loses');
                    } else if (marker === "O") {
                        h1.innerText = "Player 2 WINS";
                        p2.classList.add('player-wins');
                        p1.classList.add('player-loses');
                    };
            };
        });
    };

    //Restarts the game
    const restart = document.querySelector('.restart');
    restart.addEventListener('click', restartGame);

    function restartGame() {
        cells.forEach(cell => {
            cell.innerText = '';
        });

        p1.classList.remove('player-wins');
        p2.classList.remove('player-wins');
        p1.classList.remove('player-loses');
        p2.classList.remove('player-loses');
        p1.classList.remove('player-tie');
        p2.classList.remove('player-tie');
        p1.classList.add('players-turn');
        p2.classList.remove('players-turn');
        h1.innerText = "Tic Tac Toe";
    };

return{};

})();