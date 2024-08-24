import "../common.css"
import { game } from "../models/variables"
import styled from 'styled-components';
import io from "socket.io-client";
import sendMessage from "../utils/sockets/send_message";

const socket = io.connect("http://localhost:3001");

function JoinPage() {
  const Button = styled.button`
    background-color: var(--black-cell-color);
    margin-top: 20px;
  `;

  function joinRoom() {
    const roomID = document.getElementById("roomID").value;
    if (roomID !== "") {
      game.id = roomID;
      console.log("Joined room with ID: " + roomID);
      socket.emit("joinRoom", roomID);
      sendMessage(socket, "Player 2 has joined the room", roomID);
      window.location.href = `/game/${roomID}`;
    }
  };

  return (
    <>
    <div className="screen">
      <h1> Waiting for other player </h1>
      <br />
      <br />
      <div className="col">
        <div className="row">
          <h3> Room ID: </h3>
          <input type="number" name="roomID" id="roomID" />
        </div>
        <Button onClick={joinRoom}>
          Join Room
        </Button>
      </div>
    </div>
    </>
  )
}

export default JoinPage
