import "../../common.css"
import "./styles/Board.css"

function GenerateCells() {
    const indexes = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];
    let cells = [];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let className = "board-cell center-content";
            let id = indexes[j] + numbers[i];
            if ((i + j) % 2 === 0) {
                className += " white-cell";
            } else {
                className += " black-cell";
            }

            let cell = <div key={id} id={id} className={className}> <label>{id}</label> </div>;
            cells.push(cell);
        }
    }

    return cells;
}

function HomeBoard() {
    return (
        <div id="borad-border">
            <div id="board-grid">
                {GenerateCells()}
            </div>
        </div>
    )
}

export default HomeBoard
