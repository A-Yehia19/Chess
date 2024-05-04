import putPieces from "./functions/putPieces";
import { useEffect } from "react";


function Cells() {
    useEffect(() => {
        putPieces();
    });

    var indexes = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

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

            let cell = <div key={id} id={id} className={className}> 
                <div id={id+'-asset'}></div>
                <div id={id+'-overlay'}></div>
            </div>;
            cells.push(cell);
        }
    }
    return cells;
}

export default Cells;
