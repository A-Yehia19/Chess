import "../common.css"
import Status from "../components/Home/Status"
import HomeBoard from "../components/Home/Board"
import HomeHistory from "../components/Home/History"
import { game } from "../models/variables"

function OfflinePage() {
  game.player = null;
  game.startGame();

  return (
    <>
    <div className="screen">
      <div className="row space-around full align-start">
        <div className="col">
          <h1> Chess </h1>
          <Status/>
          <HomeBoard/>
        </div>
        <HomeHistory/>
      </div>
    </div>
    </>
  )
}

export default OfflinePage
