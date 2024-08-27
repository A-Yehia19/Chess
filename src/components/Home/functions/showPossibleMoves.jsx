import locationToID from "./locationToID"
import { game, gameVars } from "../../../models/variables"
import { refreshBoard } from "../Board"
import { refreshHistory } from "../History"
import Cells from "../Cells"
import { refteshStatus } from "../Status"


function clearOverlay() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let id = locationToID({x:i, y:j});
            let cellOverlay = document.getElementById(id+'-overlay');
            cellOverlay.className = '';
        }
    }
}

function cellMove(move) {
    return () => {
        let player = game.turn;
        game.movePiece(gameVars.activePiece, move);
        gameVars.activePiece = null;
        clearOverlay();
        refreshBoard(<Cells/>);
        refreshHistory[player]([...game.players[player].moves]);
        refteshStatus(game.status);
    };
}

function showPossibleMoves(piece, opponentPieces, playerPieces) {
    return () => {
        if (game.winner) {
            return;
        }

        clearOverlay();

        if (game.player && game.player !== piece.color)
            return;
        
        if (gameVars.activePiece == piece) {
            gameVars.activePiece = null;
        }
        else if (game.turn == piece.color) {
            gameVars.activePiece = piece;
            const possibleMoves = piece.getPossibleMoves(opponentPieces, playerPieces);
            for (let move of possibleMoves) {
                let id = locationToID(move);
                let cellOverlay = document.getElementById(id+'-overlay');
                cellOverlay.className = 'cell-overlay';
                cellOverlay.onclick = cellMove(move);
            }
        }
    };
}

export default showPossibleMoves;