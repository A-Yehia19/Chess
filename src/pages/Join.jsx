import "../common.css"
import { game, socket } from "../models/variables"
import Constants from "../models/constants";
import sendMessage from "../utils/sockets/send_message";
import joinRoom from "../utils/sockets/join_room";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
  background-color: var(--black-cell-color);
  margin-top: 20px;
`;

function JoinPage() {
  const navigate = useNavigate();

  function joinButton() {
    const roomID = document.getElementById("roomID").value;
    if (roomID !== "") {
      game.id = parseInt(roomID);
      game.player = Constants.PLAYER_COLOR_BLACK;
      joinRoom(game.id);
      sendMessage("Player 2 has joined the room", game.id);
      navigate(`/game/${game.id}`);
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
