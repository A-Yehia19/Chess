import "../common.css"
import { game, socket } from "../models/variables"
import Constants from "../models/constants"
import Loader from "../components/common/loader"
import joinRoom from "../utils/sockets/join_room";
import sendMessage from "../utils/sockets/send_message";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'


const Button = styled.button`
  background-color: var(--black-cell-color)
`;

function HostPage() {
  const navigate = useNavigate();

  useEffect(() => {
    joinRoom(game.id);
    sendMessage("Player 1 has joined the room", game.id);
    socket.on("receive_message", (data) => {
      game.player = Constants.PLAYER_COLOR_WHITE;
      navigate(`/game/${game.id}`);
    });
  }, [socket, game.id]);
  
  return (
    <>
    <div className="screen">
      <h1> Waiting for other player </h1>
      <br />
      <br />
      <div className="row">
        <h3> Room ID: {game.id} </h3>
        <CopyToClipboard text={game.id} style={{marginLeft: "20px"}}>
            <Button> Copy ID </Button>
        </CopyToClipboard>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
      }}>
        <Loader />
      </div>
    </div>
    </>
  )
}

export default HostPage
