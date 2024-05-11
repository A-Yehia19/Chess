import Constants from "../../../models/constants";
import showPossibleMoves from "./showPossibleMoves";
import locationToID from "./locationToID"
import { game } from "../../../models/variables";

function clearPieces() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 8; j++) {
            const cell = document.getElementById(`${locationToID({x:i, y:j})}-asset`);
            cell.innerHTML = "";
            cell.onclick = null;
        }
    }
}

function putPieces() {
    clearPieces();
    
    const whitePieces = game.players[Constants.PLAYER_COLOR_WHITE].pieces;
    const blackPieces = game.players[Constants.PLAYER_COLOR_BLACK].pieces;

    for (let piece of whitePieces) {
        const location = piece.getLocationCode();
        const cell = document.getElementById(location+"-asset");
        cell.innerHTML = `<img src=/assets/pieces/white/${piece.type}.svg alt=${piece.asset}/>`;
        cell.onclick = showPossibleMoves(piece, blackPieces, whitePieces);
    }

    for (let piece of blackPieces) {
        const location = piece.getLocationCode();
        const cell = document.getElementById(location+"-asset");
        cell.innerHTML = `<img src=/assets/pieces/black/${piece.type}.svg alt=${piece.asset}/>`;
        cell.onclick = showPossibleMoves(piece, whitePieces, blackPieces);
    }
}

export default putPieces;
