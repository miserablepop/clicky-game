import React from "react";

function Card(props) {
    return (
        <div class="col s12 m6 l3">
            <div class="card sticky-action z-depth-3">
                <div class="card-image">
                <img alt={props.name} src={props.image} id={props.id}
                    onClick={() => props.shuffleCard(props.id)} className='shuffleScore'/> 
                </div>
            </div>
        </div>
    );
}

export default Card;