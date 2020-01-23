import React, { Component } from "react";
import Card from "../components/cards";
import Characters from "../cards.json";


class Game extends Component {

    state = {
      Characters
    };

    render() {
        return (
            <div className="game-board">
                <div className="row">
                    {this.state.Characters.map(character => (
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
  
}

export default Game;