function joinRoom (socket, roomID) {
    socket.emit("join_room", roomID);
};

export default joinRoom;
