import "../../common.css"
import "./styles/Board.css"
import putPieces from "./functions/putPieces";
import Cells from "./Cells";
import React, { useEffect } from 'react';

function HomeBoard() {
    // useEffect(() => {putPieces()}, []);
    return (
        <div id="borad-border">
            <div id="board-grid">
                {Cells()}
            </div>
        </div>
    )
}

export default HomeBoard
