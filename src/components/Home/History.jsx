import "../../common.css"
import "./styles/History.css"
import { useState } from "react"
import locationToID from "./functions/locationToID"


export var refreshHistory;
function HomeHistory() {
    const [whiteMoves, setWhiteMoves] = useState([]);
    const [blackMoves, setBlackMoves] = useState([]);

    refreshHistory = {
        white: setWhiteMoves,
        black: setBlackMoves
    };

    return (
        <div id="game-history col">
            <h2 id="history-title"> History </h2>
            <div className="row align-start">
                {/* white history */}
                <div id="white-history" className="col grow history">
                    <div className="center-content black-bg">
                        <img src="/src/assets/pieces/white/pawn.svg" alt="♙" height={30}/>
                    </div>
                    
                    {/* white history appended here */}
                    {whiteMoves.map((move, index) => {
                        return (
                            <label key={index}>
                                {move.piece.asset} : {locationToID(move.oldPosition)} {`->`} {locationToID(move.newPosition)}
                            </label>
                        )
                    })}
                </div>

                {/* black history */}
                <div id="black-history" className="col grow history">
                    <div className="center-content white-bg">
                        <img src="/src/assets/pieces/black/pawn.svg" alt="♟" height={30}/>
                    </div>
                    
                    {/* black history appended here */}
                    {blackMoves.map((move, index) => {
                        return (
                            <label key={index}>
                                {move.piece.asset} : {locationToID(move.oldPosition)} {`->`} {locationToID(move.newPosition)}
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomeHistory
