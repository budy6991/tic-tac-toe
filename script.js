const gameBoard = {
    cells : []
}

const getPlayerData = (name, mark) => {
    this.name = name
    this.mark = mark 
    return {name, mark}
  };

const gridContainer = document.querySelector('.grid-container')

const cellElementsArray = document.querySelectorAll('.cell-element')

gameBoard.cells = cellElementsArray

gameBoard.cells[0].textContent = 'X'

gameBoard.cells.forEach (cell )