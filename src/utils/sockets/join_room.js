import { socket } from "../../models/variables";

function joinRoom (roomID) {
    socket.emit("join_room", roomID);
};

export default joinRoom;
