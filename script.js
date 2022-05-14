let Gameboard = {

    Board:[],

    



}


let Player = {

    createPlayer(name,marker, isPlaying) {
        this.name = name
        this.marker= marker
        this.isPlaying = isPlaying
        return {name,marker,isPlaying}
    }
                
 };









//   const gridContainer = document.querySelector('.grid-container')
  
//   const cellElementsArray = document.querySelectorAll('.cell-element')
  
//   gameBoard.cells = cellElementsArray
  
//   const playerOne = createPlayer('Juan', 'O', 'No')
//   const playerTwo = createPlayer('Alvaro', 'X', 'No')
  
  
//   gameBoard.cells.forEach (cell => 
//       cell.addEventListener ('click', function (e){
//           e.target.textContent = playerTwo.marker
//       })
//       )
  
