import React, { Component } from "react";
import Card from "../components/cards";
import Characters from "../cards.json";


function Game(props) {
    return (
        <div className="game-board">
            <div className="row">
                {props.Characters.map(character => (
                    <Card
                        id={character.id}
                        key={character.id}
                        image={character.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Game;