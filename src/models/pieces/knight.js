import Constants from "../constants";
import Piece from "./piece";

class Knight extends Piece {
    constructor(color, position) {
        let asset = Constants.PIECE_ASSET_KNIGHT_WHITE;
        if (color === Constants.PLAYER_COLOR_BLACK)
            asset = Constants.PIECE_ASSET_KNIGHT_BLACK;

        super(color, position, asset, Constants.PIECE_TYPE_KNIGHT);
    }

    getPossibleMoves(opponentPieces, playerPieces) {
        let possibleMoves = [];
        let x = this.position.x;
        let y = this.position.y;

        // Check if the knight can move up
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x - 1, y + 2, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x - 1, y: y + 2});
        }
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x + 1, y + 2, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x + 1, y: y + 2});
        }

        // Check if the knight can move down
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x - 1, y - 2, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x - 1, y: y - 2});
        }
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x + 1, y - 2, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x + 1, y: y - 2});
        }

        // Check if the knight can move left
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x - 2, y + 1, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x - 2, y: y + 1});
        }
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x - 2, y - 1, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x - 2, y: y - 1});
        }

        // Check if the knight can move right
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x + 2, y + 1, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x + 2, y: y + 1});
        }
        if ([Constants.CELL_STATUS_EMPTY, Constants.CELL_STATUS_OCCUPIED_OPPONENT].includes(this.cellStatus(x + 2, y - 1, opponentPieces, playerPieces))) {
            possibleMoves.push({x: x + 2, y: y - 1});
        }

        return possibleMoves;
    }
}

export default Knight;
