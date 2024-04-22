import Constants from "../constants";
import Piece from "./piece";

class Rook extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_ROOK_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_ROOK_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_ROOK);
    }

    getPossibleMoves(board, opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Check if the rook can move up
        for (let i = y + 1; i <= 8; i++) {
            let status = this.cellStatus(board, x, i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x, y: i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x, y: i});
                break;
            } else {
                break;
            }
        }

        // Check if the rook can move down
        for (let i = y - 1; i >= 1; i--) {
            let status = this.cellStatus(board, x, i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x, y: i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x, y: i});
                break;
            } else {
                break;
            }
        }

        // Check if the rook can move left
        for (let i = x - 1; i >= 1; i--) {
            let status = this.cellStatus(board, i, y, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: i, y: y});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: i, y: y});
                break;
            } else {
                break;
            }
        }

        // Check if the rook can move right
        for (let i = x + 1; i <= 8; i++) {
            let status = this.cellStatus(board, i, y, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: i, y: y});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: i, y: y});
                break;
            } else {
                break;
            }
        }

        return possibleMoves;
    }
}

export default Rook;