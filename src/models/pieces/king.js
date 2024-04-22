import Constants from "../constants";
import Piece from "./piece";

class King extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_KING_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_KING_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_KING);
    }

    getPossibleMoves(board, opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Check if the king can move up
        if (this.cellStatus(board, x, y + 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x, y: y + 1});
        }

        // Check if the king can move down
        if (this.cellStatus(board, x, y - 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x, y: y - 1});
        }

        // Check if the king can move left
        if (this.cellStatus(board, x - 1, y, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 1, y: y});
        }

        // Check if the king can move right
        if (this.cellStatus(board, x + 1, y, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 1, y: y});
        }

        // Check if the king can move up-right
        if (this.cellStatus(board, x + 1, y + 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 1, y: y + 1});
        }

        // Check if the king can move up-left
        if (this.cellStatus(board, x - 1, y + 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 1, y: y + 1});
        }

        // Check if the king can move down-right
        if (this.cellStatus(board, x + 1, y - 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x + 1, y: y - 1});
        }

        // Check if the king can move down-left
        if (this.cellStatus(board, x - 1, y - 1, opponentPieces, playerPieces) in [Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT]) {
            possibleMoves.push({x: x - 1, y: y - 1});
        }

        return possibleMoves;
    }
}

export default King;
