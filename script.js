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
            return
            
        }

        
            this.playerTwo.isPlaying = false
            this.playerOne.isPlaying = true
            Gameboard.displayMarker(this.playerOne.marker)
        
    }
    
};

let Gameboard = {
    
    board: document.querySelectorAll('.cell-element'),

    displayMarker(marker){
        this.board.forEach (cell => {
            cell.onclick = function (e){
                e.target.textContent = marker
                Player.togglePlayer()
                console.log(Player)
            }
        })
    },


}

    

    

    


Gameboard.displayMarker(Player.playerOne.marker)












  

