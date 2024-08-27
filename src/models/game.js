import Constants from './constants';
import Player from './player';
import Queen from './pieces/queen';
import sendMove from '../utils/sockets/send_move';

class Game {
    constructor(id) {
        this.id = id;
        this.board = this.initiateBoard();
        this.turn = Constants.PLAYER_COLOR_WHITE;
        this.player = null;
        this.winner = null;
        this.status = "White's turn";
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
        if (this.winner) {
            return;
        }
        
        this.turn = this.turn === Constants.PLAYER_COLOR_WHITE
        ? Constants.PLAYER_COLOR_BLACK
        : Constants.PLAYER_COLOR_WHITE;

        this.status = this.turn === Constants.PLAYER_COLOR_WHITE
        ? "White's turn"
        : "Black's turn";
    }

    movePiece(piece, position) {
        let opponentColor = this.turn === Constants.PLAYER_COLOR_WHITE ? Constants.PLAYER_COLOR_BLACK : Constants.PLAYER_COLOR_WHITE;
        let opponentPieces = this.players[opponentColor].pieces;
        let playerPieces = this.players[this.turn].pieces;
        let possibleMoves = piece.getPossibleMoves(opponentPieces, playerPieces);

        // Move the piece
        if (possibleMoves.some(move => move.x === position.x && move.y === position.y)) {
            let oldPosition = {x: piece.position.x, y: piece.position.y};
            this.players[this.turn].moves.push({piece, oldPosition, newPosition: position});
            sendMove(piece, position);
            piece.move(position);
            
            // Check if the move makes any captures
            if (piece.cellStatus(position.x, position.y, opponentPieces, playerPieces) === Constants.CELL_STATUS_OCCUPIED_OPPONENT) {
                let opponentPieceIndex = opponentPieces.findIndex(piece => piece.position.x === position.x && piece.position.y === position.y);
                let opponentPiece = opponentPieces[opponentPieceIndex];
                opponentPieces.splice(opponentPieceIndex, 1);
                
                this.players[opponentColor].pieces = opponentPieces;

                if (opponentPiece.type === Constants.PIECE_TYPE_KING) {
                    this.winner = this.turn;
                    this.status = this.turn === Constants.PLAYER_COLOR_WHITE ? "White wins" : "Black wins";
                    alert(this.status);
                }
            }

            // Check if the move puts the pawn into promotion position
            if (piece.type === Constants.PIECE_TYPE_PAWN && (position.y === 1 || position.y === 8)) {
                let pieceIndex = playerPieces.findIndex(piece => piece.position.x === position.x && piece.position.y === position.y);
                playerPieces[pieceIndex] = new Queen(piece.color, position);
                this.players[this.turn].pieces = playerPieces;
            }

            // switch turns
            this.switchTurn();

            return true;
        }

        alert("Invalid move");
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

        // // for console game testing
        // while (!this.winner) {
        //     let board = this.renderPieces();
        //     board.forEach(row => console.log(row.join(' ')));
        //     console.log(`Player ${this.turn}'s turn`);
        //     console.log("Enter move (e.g. 'A2,A4'):");
        //     let input = prompt();
        //     this.parseInput(input);
        // }
    }
}

export default Game;
