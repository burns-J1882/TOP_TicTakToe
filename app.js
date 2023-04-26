console.log("Sup chump");

/*
Generate gameboard in module
    starting array
    reset array to empty with a function for after wins/resetting
    
function to be called on a click that changes the array and adds either user or computer input
Generate a "winner" key, once a parameter has been met display a winner message for the winner. If not display a tie

1. Make it work in the console
2. Make the board appear in the DOM
3. Have the DOM update 
*/

const gameBoardModule = (() => {  
    //sets an empty array and game board
    const _emptyBoard =[
        0,0,0,
        0,0,0,
        0,0,0
    ];

    let _playBoard = _emptyBoard;

    //code to generate a board in the DOM and add click listener to each that returns its theoretical location in the array
    const domCache = (() => {
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('boardContainer');
        for (let i = 0; i < 9; i++){
          const cell = document.createElement('div');
          cell.classList.add('cell');
          cell.setAttribute('data-cell', i);
          cell.appendChild(document.createTextNode(''))
          boardContainer.appendChild(cell);
          cell.addEventListener('click', () => {
            const clickedSquare = cell.dataset.cell;
            //player gamelogic function call;
            gameLogic(clickedSquare, 'p')
          } )
        }
        
        const body = document.getElementsByTagName('body')[0];
        const h1 = document.getElementsByTagName('h1')[0];
        body.insertBefore(boardContainer, h1.nextSibling);
      })();

      function gameLogic (index, marker) {
        //needs to update the array with player choice and dom with representation of the array
        //take cell data value and find index in array
        //update that index with a P (representing player)
        console.log(index, marker);
    }

return {_emptyBoard,
         _playBoard, 
         init: function (){
            domCache}

        }
})();
//gameBoardModule.domCache();






function computerOpponent () {
    //update array with computer choice and dom with representation of the array
    //use a math.random to find a number between 0 and 8. 
    //compare that number with index of array, if array index is P and any of the indexes are 0, repeat and check again. 
    
}



