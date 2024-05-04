import Constants from "../../../models/constants";
import showPossibleMoves from "./showPossibleMoves";
import { game } from "../../../models/variables";

function putPieces() {
    const whitePieces = game.players[Constants.PLAYER_COLOR_WHITE].pieces;
    const blackPieces = game.players[Constants.PLAYER_COLOR_BLACK].pieces;

    for (let piece of whitePieces) {
        const location = piece.getLocationCode();
        const cell = document.getElementById(location+"-asset");
        cell.innerHTML = `<label> ${piece.asset} </label>`;
        cell.onclick = showPossibleMoves(piece, blackPieces, whitePieces);
    }

    for (let piece of blackPieces) {
        const location = piece.getLocationCode();
        const cell = document.getElementById(location+"-asset");
        cell.innerHTML = `<label> ${piece.asset} </label>`;
        cell.onclick = showPossibleMoves(piece, whitePieces, blackPieces);
    }
}

export default putPieces;
