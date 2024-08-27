import "../common.css"
import Status from "../components/Home/Status"
import HomeBoard from "../components/Home/Board"
import HomeHistory from "../components/Home/History"
import { game, socket } from "../models/variables"
import OnlineMove from "../utils/online_move"
import { useEffect } from "react"

function OnlinePage() {
  useEffect(() => {
    game.startGame();
    socket.on("receive_message", (data) => {
      console.log(data.message);
      OnlineMove(data.message.piece, data.message.position);
    });
  }, []);

  return (
    <>
    <div className="screen">
      <div className="row space-around full align-start">
        <div className="col">
          <h1> Chess </h1>
          <h3> you are {game.player} </h3>
          <Status/>
          <HomeBoard/>
        </div>
        <HomeHistory/>
      </div>
    </div>
    </>
  )
}

export default OnlinePage
