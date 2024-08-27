import sendMessage from "./send_message"
import { game } from "../../models/variables";

function sendMove(piece, position) {
    sendMessage({piece, position}, game.id);
};

export default sendMove;
