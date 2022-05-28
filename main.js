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
  const t1 = document.querySelector('.t1')
  const t2 = document.querySelector('.t2')
  const t3 = document.querySelector('.t3')
  const m1 = document.querySelector('.m1')
  const m2 = document.querySelector('.m2')
  const m3 = document.querySelector('.m3')
  const b1 = document.querySelector('.b1')
  const b2 = document.querySelector('.b2')
  const b3 = document.querySelector('.b3')

    const gameBoardArray = [t1.innerText, t2.innerText, t3.innerText, m1.innerText, m2.innerText, m3.innerText, b1.innerText, b2.innerText, b3.innerText];
    return{gameBoardArray};

})();



//DISPLAY CONTROLLER
const displayController = ((player) => {
    const p1 = document.querySelector('.p1');
    const p2 = document.querySelector('.p2');
    const cells = document.querySelectorAll('.cell')
    const cellsArray = Array.from(cells);
    const h1 = document.querySelector('h1');

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
                console.log(X);
            } else if (cell.innerText === 'O') {
                O++;
                console.log(O);
            }
        });
        if (e.target.innerText === '') {
            if (X <= O) {
                e.target.innerText = player1.getMark();
                p1.classList.remove('players-turn');
                p2.classList.add('players-turn');
        } else if (X > O) {
                e.target.innerText = player2.getMark();
                p2.classList.remove('players-turn');
                p1.classList.add('players-turn');
        }
    }   

    }

    

return{h1};

})();


//An if statement that says if there are more O's



