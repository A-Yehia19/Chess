import Constants from "../constants";
import Piece from "./piece";

class Pawn extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_PAWN_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_PAWN_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_PAWN);
    }

    getPossibleMoves(board, opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Set the direction the pawn can move based on its color
        let direction = this.color === Constants.PLAYER_COLOR_WHITE ? 1 : -1;

        // Check if the pawn can move forward
        if (this.cellStatus(board, x, y + direction, opponentPieces, playerPieces) === Constants.CELL_STATUS_EMPTY) {
            possibleMoves.push({x: x, y: y + direction});
        }

        // Check if the pawn can move two squares forward
        if (this.color === Constants.PLAYER_COLOR_WHITE && y === 2 && this.cellStatus(board, x, 3, opponentPieces, playerPieces) === Constants.CELL_STATUS_EMPTY) {
            possibleMoves.push({x: x, y: 4});
        }
        if (this.color === Constants.PLAYER_COLOR_BLACK && y === 7 && this.cellStatus(board, x, 5, opponentPieces, playerPieces) === Constants.CELL_STATUS_EMPTY) {
            possibleMoves.push({x: x, y: 5});
        }

        // Check if the pawn can move diagonally to take an opponent piece
        if (this.cellStatus(board, x - 1, y + direction, opponentPieces, playerPieces) === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
            possibleMoves.push({x: x - 1, y: y + direction});
        }
        if (this.cellStatus(board, x + 1, y + direction, opponentPieces, playerPieces) === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
            possibleMoves.push({x: x + 1, y: y + direction});
        }

        return possibleMoves;
    }
}

export default Pawn;
