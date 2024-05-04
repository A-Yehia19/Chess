import locationToID from "./locationToID"
import { gameVars } from "../../../models/variables"

function clearOverlay() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            let id = locationToID({x:i, y:j});
            let cellOverlay = document.getElementById(id+'-overlay');
            cellOverlay.innerHTML = '';
        }
    }
}

function showPossibleMoves(piece, opponentPieces, playerPieces) {
    return () => {
        clearOverlay();

        if (gameVars.activePiece == piece) {
            gameVars.activePiece = null;
        }
        else {
            gameVars.activePiece = piece;
            const possibleMoves = piece.getPossibleMoves(opponentPieces, playerPieces);
            for (let move of possibleMoves) {
                let id = locationToID(move);
                let cellOverlay = document.getElementById(id+'-overlay');
                cellOverlay.innerHTML = `<label> x </label>`;
            }
        }
    };
}

export default showPossibleMoves;
