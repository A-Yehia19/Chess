import Constants from "../constants";
import Piece from "./piece";

class Knight extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_KNIGHT_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_KNIGHT_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_KNIGHT);
    }

    getPossibleMoves(board, opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Check if the knight can move up
        if (this.cellStatus(board, x - 1, y + 2, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 1, y: y + 2});
        }
        if (this.cellStatus(board, x + 1, y + 2, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 1, y: y + 2});
        }

        // Check if the knight can move down
        if (this.cellStatus(board, x - 1, y - 2, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 1, y: y - 2});
        }
        if (this.cellStatus(board, x + 1, y - 2, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 1, y: y - 2});
        }

        // Check if the knight can move left
        if (this.cellStatus(board, x - 2, y + 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 2, y: y + 1});
        }
        if (this.cellStatus(board, x - 2, y - 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 2, y: y - 1});
        }

        // Check if the knight can move right
        if (this.cellStatus(board, x + 2, y + 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 2, y: y + 1});
        }
        if (this.cellStatus(board, x + 2, y - 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 2, y: y - 1});
        }

        return possibleMoves;
    }
}

export default Knight;
