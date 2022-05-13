const gameBoard = {
    cells : []
}

const createPlayer = (name,marker) => {
    this.name = name
    this.marker= marker
    this.plays = function (){
        return true
    }
    return {name, marker, plays}
  };

const gridContainer = document.querySelector('.grid-container')

const cellElementsArray = document.querySelectorAll('.cell-element')

gameBoard.cells = cellElementsArray

const playerOne = createPlayer('Juan', 'O', 'No')
const playerTwo = createPlayer('Alvaro', 'X', 'No')

playerOne.played()

gameBoard.cells.forEach (cell => 
    cell.addEventListener ('click', function (e){
        e.target.textContent = playerOne.mark
    })
    )

