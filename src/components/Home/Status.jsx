import { useState } from 'react';
import { game } from "../../models/variables";
import "../Home/styles/Status.css";

export var refteshStatus;
function Status() {

    const [status, setStatus] = useState(game.status);
    refteshStatus = setStatus;

    return (
        <div>
            <h2 id="game-status"> {status} </h2>
        </div>
    )
}

export default Status
