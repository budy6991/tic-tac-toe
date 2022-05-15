function createPlayer (name,marker, isPlaying) {
    this.name = name
    this.marker= marker
    this.isPlaying = isPlaying
    return {name,marker,isPlaying}
}

let Player = {

    counter: null,
    playerOne: createPlayer('', '', true),
    playerTwo: createPlayer('', '', false),
    togglePlayer(e) {

        if (this.playerOne.isPlaying){
            e.target.textContent = this.playerOne.marker
            this.playerOne.isPlaying = false
            this.playerTwo.isPlaying = true
            Gameboard.displayMarker(this.playerTwo.marker)
            Gameboard.banCell()
            Gameboard.checkWinner()
            this.counter += 1
            console.log(this.counter)
            return
        }
            e.target.textContent = this.playerTwo.marker
            this.playerTwo.isPlaying = false
            this.playerOne.isPlaying = true
            Gameboard.displayMarker(this.playerOne.marker)
            Gameboard.banCell()
            Gameboard.checkWinner()
            this.counter += 1
            console.log(this.counter)
    }
};

let Gameboard = {
    
    board: document.querySelectorAll('.cell-element'),
    displayMarker(marker){
        if(Player.playerOne.isPlaying ||Player.playerTwo.isPlaying )
        this.board.forEach (cell => {
            cell.onclick = function (e){
                Player.togglePlayer(e)
                
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
            Gameflow.restartGame()
            Player.counter = -1
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
            Gameflow.restartGame()
            Player.counter = -1   
        }

        else if (Player.counter == 8) {
            console.log('Draw')
        }
 
    }

}

let Gameflow = {

    restartGame(){
        Gameboard.board.forEach (cell => {
            cell.textContent = ''
            Player.playerOne.isPlaying = true
            Gameboard.displayMarker(Player.playerOne.marker)
            
        })
    },
  
}

let NamesAndMarkers = {

    namePlayerOne : document.getElementById('player-one-name'),
    namePlayerTwo : document.getElementById('player-two-name'),
    markerPlayerOne : document.getElementById('choose-mark-one'),
    markerPlayerTwo : document.getElementById('choose-mark-two'),

    getNamesAndMarks (nameOne, nameTwo, markerOne, markerTwo) {
        let valueOne = nameOne.value
        let valueTwo = nameTwo.value
        let markOne = markerOne.value
        let markTwo = markerTwo.value
        this.displayPlayerName(valueOne,valueTwo,markOne, markTwo)
    },

    submitValues() {
        this.getNamesAndMarks(this.namePlayerOne, this.namePlayerTwo, this.markerPlayerOne, this.markerPlayerTwo)
    },

    displayPlayerName (valueOne, valueTwo, markerOne, markerTwo) {
        const playerOneContainer = document.querySelector('.player-one-container')
        const playerTwoContainer = document.querySelector('.player-two-container')
        playerOneContainer.textContent = `PLAYER: ${valueOne} MARKER: ${markerOne}`
        playerTwoContainer.textContent = `PLAYER: ${valueTwo} MARKER: ${markerTwo}`
        Player.playerOne = createPlayer(valueOne, markerOne, true)
        Player.playerTwo = createPlayer(valueTwo, markerTwo, true)
        console.log(Player.playerOne)
        console.log(Player.playerTwo)
    },
    
}

    const modal = document.querySelector('.modal')
    const openModal = document.querySelector('.open-button')
    const closeModal = document.querySelector('.close-button')
    const submitForm = document.querySelector('.submit-form')
    
    openModal.addEventListener('click', ()=> {
        modal.showModal();
    })
    
    closeModal.addEventListener('click', ()=>{
        modal.close();
    })
    
    submitForm.addEventListener('click', function(){
        NamesAndMarkers.submitValues()
        Gameflow.restartGame()
    })
    
    const restartBtn = document.querySelector('.restart-btn')
    restartBtn.addEventListener ('click', function (e){
        Gameflow.restartGame()
    })

    Gameboard.displayMarker(Player.playerOne.marker)

