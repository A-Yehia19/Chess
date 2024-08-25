import "../common.css"
import { game, socket } from "../models/variables"
import styled from 'styled-components';
import sendMessage from "../utils/sockets/send_message";
import joinRoom from "../utils/sockets/join_room";

function JoinPage() {
  const Button = styled.button`
    background-color: var(--black-cell-color);
    margin-top: 20px;
  `;

  function joinButton() {
    const roomID = document.getElementById("roomID").value;
    if (roomID !== "") {
      game.id = parseInt(roomID);
      joinRoom(socket, game.id);
      sendMessage(socket, "Player 2 has joined the room", game.id);
      window.location.href = `/game/${game.id}`;
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
        <Button onClick={joinButton}>
          Join Room
        </Button>
      </div>
    </div>
    </>
  )
}

export default JoinPage
