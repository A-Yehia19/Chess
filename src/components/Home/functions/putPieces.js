import Game from "../../../models/game";
import Constants from "../../../models/constants";

function putPieces() {
    const whitePieces = Game.players[Constants.PLAYER_COLOR_WHITE].pieces;
    const blackPieces = Game.players[Constants.PLAYER_COLOR_BLACK].pieces;

    for (piece of whitePieces) {
        const location = piece.getLocationCode();
        document.getElementById(location).innerHTML = piece.asset;
    }

    for (piece of blackPieces) {
        const location = piece.getLocationCode();
        document.getElementById(location).innerHTML = piece.asset;
    }
}

export default putPieces;
