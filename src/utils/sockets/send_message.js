import { socket } from "../../models/variables";

function sendMessage (message, room) {
    socket.emit("send_message", { message, room });
};

export default sendMessage;
