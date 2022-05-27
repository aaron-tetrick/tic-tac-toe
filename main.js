

//GAMEBOARD MODULE
const gameBoard = (() => {
    const gameBoardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    
    
    return{gameBoardArray};

})();



let test = gameBoard.gameBoardArray;
console.log(test);

//PLAYER FACTORY FUNCTION
const Players = (name, mark) => {
        const getName = () => name;
        const getMark = () => mark;
 
 
    return{getName, getMark};
};


const player1 = Players('Player 1', 'X');
const player2 = Players('Player 2', 'O');



console.log(player1.getName());
console.log(player2.getName());