import "../common.css"
import { game } from "../models/variables"
import Loader from "../components/common/loader"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components';
import io from "socket.io-client";
import { useEffect } from "react";

function HostPage() {
  const Button = styled.button`
    background-color: var(--black-cell-color)
  `;

  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.emit("joinRoom", game.id);
    socket.on("receive_message", () => {
      alert("Player 2 has joined the room");
      window.location.href = `/game/${game.id}`;
    });
  }, [])
  
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
