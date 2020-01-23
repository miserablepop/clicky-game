import React from "react";
import "./style.css";

function Score(props) {
    return(
        <div class="game-score brand-logo right">Score: {props.total}</div>
    );
}

export default Score;