import "../../common.css"
import "./styles/Board.css"
import Cells from "./Cells"
import { useState } from "react"

export var refreshBoard;
function HomeBoard() {

    const [board, setBoard] = useState(<Cells />);
    refreshBoard = setBoard;

    return (
        <div id="borad-border">
            <div id="board-grid">
                {board}
            </div>
        </div>
    )
}

export default HomeBoard
