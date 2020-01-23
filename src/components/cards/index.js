import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div class="col s12 m6 l3">
            <div class="card sticky-action z-depth-3">
                <div class="card-image">
                    <img src="http://www.simpsoncrazy.com/content/pictures/regulars/Grampa2.gif" alt="Grampa" />    
                </div>
            </div>
        </div>
    );
}

export default Card;