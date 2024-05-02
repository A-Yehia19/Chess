import Constants from "../constants";

class Piece {
    constructor (color, position, asset, type = Constants.PIECE_TYPE_PAWN){
        this.color = color;
        this.position = position;
        this.asset = asset;
        this.type = type;
    }

    move (position) {
        this.position = position;
        console.log(`${this.color} ${this.type} moved to ${String.fromCharCode(position.x + 64)}${position.y}`);
    }

    cellStatus(board, x, y, opponentPieces, playerPieces = []) {
        if (board[y][x] === Constants.BOARD_COLOR_BORDER || x < 1 || x > 8 || y < 1 || y > 8) {
            return Constants.CELL_STATUS_OUT_OF_BOUNDS;
        }
        if (opponentPieces.some(piece => piece.position.x === x && piece.position.y === y)) {
            return Constants.CELL_STATUS_OCCUPIED_OPPONENT;
        }
        if (playerPieces.some(piece => piece.position.x === x && piece.position.y === y)) {
            return Constants.CELL_STATUS_OCCUPIED_PLAYER;
        }

        return Constants.CELL_STATUS_EMPTY;
    }

    getPossibleMoves(board, opponentPieces) {
        throw new Error("Method 'getPossibleMoves(board, opponentPieces)' must be implemented.");
    }

    getLocationCode() {
        return String.fromCharCode(this.position.x + 64) + this.position.y;
    }
}

export default Piece;
