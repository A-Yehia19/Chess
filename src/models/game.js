import Constants from './constants';
import Player from './player';

class Game {
    constructor(id) {
        this.id = id;
        this.board = this.initiateBoard();
        this.turn = Constants.PLAYER_COLOR_WHITE;
        this.moves = [];
        this.winner = null;
        this.players = {
            [Constants.PLAYER_COLOR_WHITE]: new Player(Constants.PLAYER_ID_WHITE, Constants.PLAYER_COLOR_WHITE),
            [Constants.PLAYER_COLOR_BLACK]: new Player(Constants.PLAYER_ID_BLACK, Constants.PLAYER_COLOR_BLACK),
        };
        this.winner = null;
    }

    initiateBoard() {
        let board = [];
        board.push(Array(10).fill(Constants.BOARD_COLOR_BORDER));
        for (let i = 1; i <= 8; i++) {
            let row = [];
            row.push(Constants.BOARD_COLOR_BORDER);
            for (let j = 1; j <= 8; j++) {
                let color = (i + j) % 2 === 0 ? Constants.BOARD_COLOR_WHITE : Constants.BOARD_COLOR_BLACK;
                row.push(color);
            }
            row.push(Constants.BOARD_COLOR_BORDER);
            board.push(row);
        }
        board.push(Array(10).fill(Constants.BOARD_COLOR_BORDER));

        return board;
    }
    
    resetGame() {
        this.board = this.initiateBoard();

        if (this.winner) {
            this.players[Constants.PLAYER_COLOR_WHITE].initializePieces();
            this.players[Constants.PLAYER_COLOR_Black].initializePieces();
            this.turn = Constants.PLAYER_COLOR_WHITE;
            this.moves.length = 0;
            this.winner = null;
        }
    }

    switchTurn() {
        this.turn = this.turn === Constants.PLAYER_COLOR_WHITE
        ? Constants.PLAYER_COLOR_BLACK
        : Constants.PLAYER_COLOR_WHITE;
    }

    movePiece(piece, position) {
        let opponentPieces = this.players[this.turn === Constants.PLAYER_COLOR_WHITE ? Constants.PLAYER_COLOR_BLACK : Constants.PLAYER_COLOR_WHITE].pieces;
        // let playerPieces = this.players[this.turn].pieces;
        let possibleMoves = piece.getPossibleMoves(this.board, opponentPieces);
        console.log(possibleMoves);

        // Move the piece
        if (possibleMoves.some(move => move.x === position.x && move.y === position.y)) {
            piece.move(position);
            this.moves.push({piece, position});
            
            // Check if the move makes any captures
            if (piece.cellStatus(this.board, position.x, position.y, opponentPieces) === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                let opponentPiece = opponentPieces.find(piece => piece.position.x === position.x && piece.position.y === position.y);
                opponentPieces = opponentPieces.filter(piece => piece.position.x !== position.x && piece.position.y !== position.y);
                if (opponentPiece.type === Constants.PIECE_TYPE_KING) {
                    this.winner = this.turn;
                }
            }

            // Check if the move puts the pawn into promotion position
            if (piece.type === Constants.PIECE_TYPE_PAWN && (position.y === 1 || position.y === 8)) {
                piece.type = Constants.PIECE_TYPE_QUEEN;
            }

            // switch turns
            this.switchTurn();

            return true;
        }

        console.log("Invalid move");
        return false;
    }

    parseInput(input) {
        let [src, dest] = input.split(',');
        let srcX = src.charCodeAt(0) - 64; // 'A' -> 1, 'B' -> 2, ..., 'H' -> 8
        let srcY = parseInt(src[1]);
        let destX = dest.charCodeAt(0) - 64; // 'A' -> 1, 'B' -> 2, ..., 'H' -> 8
        let destY = parseInt(dest[1]);

        let piece = this.players[this.turn].getPiece(srcX, srcY);
        let position = {x: destX, y: destY};
        if (!piece) {
            console.log("Invalid move");
            return false;
        }
        this.movePiece(piece, position);
    }

    renderPieces() {
        let board = this.initiateBoard();
        this.players[Constants.PLAYER_COLOR_WHITE].pieces.forEach(piece => {
            board[piece.position.y][piece.position.x] = piece.asset;
        });
        this.players[Constants.PLAYER_COLOR_BLACK].pieces.forEach(piece => {
            board[piece.position.y][piece.position.x] = piece.asset;
        });

        return board;
    }

    startGame () {
        this.resetGame();
        console.log("Game started");

        while (!this.winner) {
            let board = this.renderPieces();
            board.forEach(row => console.log(row.join(' ')));
            console.log(board);
            console.log(`Player ${this.turn}'s turn`);
            console.log("Enter move (e.g. 'A2,A4'):");
            let input = prompt();
            this.parseInput(input);
        }
    }
}

export default Game;
