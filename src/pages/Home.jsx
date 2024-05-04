import "../common.css"
import "./styles/Home.css"
import HomeBoard from "../components/Home/Board"
import HomeHistory from "../components/Home/History"
import { game } from "../models/variables"

function HomePage() {
  game.startGame();

  return (
    <>
    <div className="screen">
      <div className="row space-between full align-start">
        <div></div>
        <div className="col">
          <h1> Chess </h1>
          <br />
          <HomeBoard/>
        </div>
        <HomeHistory/>
      </div>
    </div>
    </>
  )
}

export default HomePage
