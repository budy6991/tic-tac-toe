const gameBoard = {
    cells : []
}

const createPlayer = (name, mark) => {
    this.name = name
    this.mark = mark 
    return {name, mark}
  };

const gridContainer = document.querySelector('.grid-container')

const cellElementsArray = document.querySelectorAll('.cell-element')

gameBoard.cells = cellElementsArray

const playerOne = createPlayer('Juan', 'O')

gameBoard.cells.forEach (cell => 
    cell.addEventListener ('click', function (e){
        e.target.textContent = playerOne.mark
    })
    )

