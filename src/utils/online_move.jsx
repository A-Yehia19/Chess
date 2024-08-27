import { game, gameVars } from "../models/variables";
import Cells from "../components/Home/Cells"
import { refreshBoard } from "../components/Home/Board"
import { refreshHistory } from "../components/Home/History"
import { refteshStatus } from "../components/Home/Status"

function movePiece(piece, move) {
    let opponentColor = game.turn;
    let opponentPieces = game.players[opponentColor].pieces;
    let targetPiece = opponentPieces.filter(p => p.position.x === piece.position.x && p.position.y === piece.position.y)[0];
    if (targetPiece) {
        console.log(targetPiece);
        game.movePiece(targetPiece, move);
    }
}

function OnlineMove(piece, move) {
    let player = game.turn;
    movePiece(piece, move);
    gameVars.activePiece = null;
    refreshBoard(<Cells/>);
    refreshHistory[player]([...game.players[player].moves]);
    refteshStatus(game.status);
}

export default OnlineMove;
