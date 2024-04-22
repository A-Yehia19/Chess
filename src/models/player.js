import Constants from "./constants";
import Rook from "./pieces/rook";
import Knight from "./pieces/knight";
import Bishop from "./pieces/bishop";
import Queen from "./pieces/queen";
import King from "./pieces/king";
import Pawn from "./pieces/pawn";

class Player {
    constructor (id, color){
        this.id = id;
        this.color = color;
        this.pieces = this.initializePieces();
    }

    initializePieces() {
        let pieces = [];
        if (this.color === Constants.PLAYER_COLOR_WHITE) {
            pieces = [
                new Rook(this.color, {x: 1, y: 1}),
                new Knight(this.color, {x: 2, y: 1}),
                new Bishop(this.color, {x: 3, y: 1}),
                new Queen(this.color, {x: 4, y: 1}),
                new King(this.color, {x: 5, y: 1}),
                new Bishop(this.color, {x: 6, y: 1}),
                new Knight(this.color, {x: 7, y: 1}),
                new Rook(this.color, {x: 8, y: 1}),
            ];
            for (let i = 1; i <= 8; i++) {
                pieces.push(new Pawn(this.color, {x: i, y: 2}));
            }
        } else {
            pieces = [
                new Rook(this.color, {x: 1, y: 8}),
                new Knight(this.color, {x: 2, y: 8}),
                new Bishop(this.color, {x: 3, y: 8}),
                new Queen(this.color, {x: 4, y: 8}),
                new King(this.color, {x: 5, y: 8}),
                new Bishop(this.color, {x: 6, y: 8}),
                new Knight(this.color, {x: 7, y: 8}),
                new Rook(this.color, {x: 8, y: 8}),
            ];
            for (let i = 1; i <= 8; i++) {
                pieces.push(new Pawn(this.color, {x: i, y: 7}));
            }
        }

        return pieces;
    }

    getPiece(x, y) {
        return this.pieces.find(piece => piece.position.x === x && piece.position.y === y);
    }
}

export default Player;
