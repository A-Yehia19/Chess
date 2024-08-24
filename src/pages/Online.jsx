import "../common.css"
import { game } from "../models/variables"

function OnlinePage() {
  game.startGame();

  return (
    <>
    <div className="screen">
      <h1>online game</h1>
    </div>
    </>
  )
}

export default OnlinePage
