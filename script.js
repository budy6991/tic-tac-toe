function createPlayer (name,marker, isPlaying) {
    this.name = name
    this.marker= marker
    this.isPlaying = isPlaying
    return {name,marker,isPlaying}
}

let Player = {

    playerOne: createPlayer('Alvaro', 'X', true),
    playerTwo: createPlayer('Juan', 'O', false),
    togglePlayer() {

        if (this.playerOne.isPlaying){
            this.playerOne.isPlaying = false
            this.playerTwo.isPlaying = true
            Gameboard.displayMarker(this.playerTwo.marker)
            Gameboard.banCell()
            Gameboard.checkWinner()
            return
        }        
            this.playerTwo.isPlaying = false
            this.playerOne.isPlaying = true
            Gameboard.displayMarker(this.playerOne.marker)
            Gameboard.banCell()
            Gameboard.checkWinner()
    }
};

let Gameboard = {
    
    board: document.querySelectorAll('.cell-element'),
    displayMarker(marker){
        this.board.forEach (cell => {
            cell.onclick = function (e){
                e.target.textContent = marker
                Player.togglePlayer()
            }
        })
    },

    banCell() {
        this.board.forEach(cell => {
            if (cell.textContent != '') {
                cell.onclick = ''
            }
        })
    },

    checkWinner(){
        if 
        ((this.board[0].textContent === 'X'
        &&this.board[1].textContent === 'X'
        &&this.board[2].textContent === 'X') 
        ||(this.board[3].textContent === 'X'
        &&this.board[4].textContent === 'X'
        &&this.board[5].textContent === 'X') 
        ||(this.board[6].textContent === 'X'
        &&this.board[7].textContent === 'X'
        &&this.board[8].textContent === 'X')
        ||(this.board[0].textContent === 'X'
        &&this.board[3].textContent === 'X'
        &&this.board[6].textContent === 'X')
        ||(this.board[1].textContent === 'X'
        &&this.board[4].textContent === 'X'
        &&this.board[7].textContent === 'X')
        ||(this.board[2].textContent === 'X'
        &&this.board[5].textContent === 'X'
        &&this.board[8].textContent === 'X')
        ||(this.board[0].textContent === 'X'
        &&this.board[4].textContent === 'X'
        &&this.board[8].textContent === 'X')
        ||(this.board[2].textContent === 'X'
        &&this.board[4].textContent === 'X'
        &&this.board[6].textContent === 'X')) {
            alert('Player One Won')
        }

        else if 
        ((this.board[0].textContent === 'O'
        &&this.board[1].textContent === 'O'
        &&this.board[2].textContent === 'O') 
        ||(this.board[3].textContent === 'O'
        &&this.board[4].textContent === 'O'
        &&this.board[5].textContent === 'O') 
        ||(this.board[6].textContent === 'O'
        &&this.board[7].textContent === 'O'
        &&this.board[8].textContent === 'O')
        ||(this.board[0].textContent === 'O'
        &&this.board[3].textContent === 'O'
        &&this.board[6].textContent === 'O')
        ||(this.board[1].textContent === 'O'
        &&this.board[4].textContent === 'O'
        &&this.board[7].textContent === 'O')
        ||(this.board[2].textContent === 'O'
        &&this.board[5].textContent === 'O'
        &&this.board[8].textContent === 'O')
        ||(this.board[0].textContent === 'O'
        &&this.board[4].textContent === 'O'
        &&this.board[8].textContent === 'O')
        ||(this.board[2].textContent === 'O'
        &&this.board[4].textContent === 'O'
        &&this.board[6].textContent === 'O')) {
            alert('Player Two Won')
        }

        else {alert('You shat your pants')}
    }

}




Gameboard.displayMarker(Player.playerOne.marker)








  

