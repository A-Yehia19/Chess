import Constants from "../constants";
import Piece from "./piece";

class Bishop extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_BISHOP_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_BISHOP_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_BISHOP);
    }

    getPossibleMoves(board, opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Check if the bishop can move up-right
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(board, x + i, y + i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x + i, y: y + i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x + i, y: y + i});
                break;
            } else {
                break;
            }
        }

        // Check if the bishop can move up-left
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(board, x - i, y + i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x - i, y: y + i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x - i, y: y + i});
                break;
            } else {
                break;
            }
        }

        // Check if the bishop can move down-right
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(board, x + i, y - i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x + i, y: y - i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x + i, y: y - i});
                break;
            } else {
                break;
            }
        }

        // Check if the bishop can move down-left
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(board, x - i, y - i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x - i, y: y - i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x - i, y: y - i});
                break;
            } else {
                break;
            }
        }

        return possibleMoves;
    }
}

export default Bishop;
