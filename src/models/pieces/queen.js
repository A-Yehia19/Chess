import Constants from "../constants";
import Piece from "./piece";

class Queen extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_QUEEN_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_QUEEN_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_QUEEN);
    }

    getPossibleMoves(opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Check if the queen can move up
        for (let i = y + 1; i <= 8; i++) {
            let status = this.cellStatus(x, i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x, y: i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x, y: i});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move down
        for (let i = y - 1; i >= 1; i--) {
            let status = this.cellStatus(x, i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x, y: i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x, y: i});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move left
        for (let i = x - 1; i >= 1; i--) {
            let status = this.cellStatus(i, y, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: i, y: y});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: i, y: y});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move right
        for (let i = x + 1; i <= 8; i++) {
            let status = this.cellStatus(i, y, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: i, y: y});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: i, y: y});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move up-right
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(x + i, y + i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x + i, y: y + i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x + i, y: y + i});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move up-left
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(x - i, y + i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x - i, y: y + i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x - i, y: y + i});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move down-right
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(x + i, y - i, opponentPieces, playerPieces);
            if (status === Constants.CELL_STATUS_EMPTY) {
                possibleMoves.push({x: x + i, y: y - i});
            } else if (status === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                possibleMoves.push({x: x + i, y: y - i});
                break;
            } else {
                break;
            }
        }

        // Check if the queen can move down-left
        for (let i = 1; i <= 8; i++) {
            let status = this.cellStatus(x - i, y - i, opponentPieces, playerPieces);
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

export default Queen;
