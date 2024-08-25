import "../common.css"
import { game, socket } from "../models/variables"
import Loader from "../components/common/loader"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components';
import { useEffect } from "react";
import joinRoom from "../utils/sockets/join_room";
import sendMessage from "../utils/sockets/send_message";


function HostPage() {
  const Button = styled.button`
    background-color: var(--black-cell-color)
  `;

  useEffect(() => {
    joinRoom(socket, game.id);
    sendMessage(socket, "Player 1 has joined the room", game.id);
    socket.on("receive_message", (data) => {
      window.location.href = `/game/${game.id}`;
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
