import "../../common.css"
import "./styles/History.css"

function HomeHistory() {
    return (
        <div id="game-history col">
            <h2 id="history-title"> History </h2>
            <div className="row">
                {/* white history */}
                <div id="white-history" className="col grow history">
                    <div className="center-content black-bg">
                        <img src="/src/assets/pieces/white/pawn.svg" alt="white pawn" height={30}/>
                    </div>
                    
                    {/* white history appended here */}
                </div>

                {/* black history */}
                <div id="black-history" className="col grow history">
                    <div className="center-content white-bg">
                        <img src="/src/assets/pieces/black/pawn.svg" alt="black pawn" height={30}/>
                    </div>
                    
                    {/* black history appended here */}
                </div>
            </div>
        </div>
    )
}

export default HomeHistory
