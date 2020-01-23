import React from "react";

function Card(props) {
    return (
        <div className="col s12 m6 l3">
            <div className="card sticky-action z-depth-3">
                <div className="card-image">
                <img alt={props.name} src={props.image} id={props.id}
                    onClick={() => props.shuffleCard(props.id)} className='shuffleScore'/> 
                </div>
            </div>
        </div>
    );
}

export default Card;