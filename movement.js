// Pieces movement object - methods to allow valid moves to be chosen and validated
let pieceMovement = {

    // Array to store movement variables
    // Future update: capture all movements (to allow potential for replay and undo)
    // -----------------------------------------------------------------------------
    movementArray: [],

    // Method to activate tiles to which a ship can move
    // -------------------------------------------------
    // Future update: change row and col to passed variables
    //              : code for different pieces
    //              : distance around obstacles
    activateTiles: function(rowForChosenTile, colForChosenTile) {
        let moveDistance = 3;
        for (var i = -moveDistance; i < moveDistance + 1; i++) {
            if(rowForChosenTile+i >=0 && rowForChosenTile+i <row) {
                for (var j = -moveDistance; j < moveDistance + 1; j++) {
                    if(colForChosenTile+j >=0 && colForChosenTile+j <col) {
                        if (gameBoard.boardArray[rowForChosenTile+i][colForChosenTile+j].terrain == 'sea' && gameBoard.boardArray[rowForChosenTile+i][colForChosenTile+j].pieces.populatedSquare == false) {
                            gameBoard.boardArray[rowForChosenTile+i][colForChosenTile+j].activeStatus = 'active';
                        }
                    }
                }
            }
        }
        gameBoard.boardArray[rowForChosenTile][colForChosenTile].activeStatus = 'inactive';
    },

    // Method to deactivate tiles after a piece has moved
    // --------------------------------------------------
    // Future update: as above for activateTiles
    deactivateTiles: function() {
        let moveDistance = 3;
        for (var i = -moveDistance; i < moveDistance + 1; i++) {
            if(this.movementArray.fromRow+i >=0 && this.movementArray.fromRow+i <row) {
                for (var j = -moveDistance; j < moveDistance + 1; j++) {
                    if(this.movementArray.fromCol+j >=0 && this.movementArray.fromCol+j <col) {
                        gameBoard.boardArray[this.movementArray.fromRow+i][this.movementArray.fromCol+j].activeStatus = 'inactive';
                    }
                }
            }
        }
    },
}
