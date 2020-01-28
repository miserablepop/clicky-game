import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";
import Card from "./components/cards";
import Characters from "./cards.json";
import "./App.css";

class App extends Component {

    state = {
      Characters,
      clickedCharacterIds: [],
      score: 0,
      goal: 8,
      status: "Click an image to begin!"
    };

    shuffleCard = id => {
        let clickedCharacterIds = this.state.clickedCharacterIds;

        if(clickedCharacterIds.includes(id)){
            this.setState({ clickedCharacterIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
            return;
        } else {
            clickedCharacterIds.push(id)

            if(clickedCharacterIds.length === 8){
                this.setState({score: 8, status: "You Won! Click to play again!", clickedCharacterIds: []});
                console.log('You Win');
                return;
            }
            this.setState({ Characters, clickedCharacterIds, score: clickedCharacterIds.length, status: "Good Choice!" });

            for (let i = Characters.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [Characters[i], Characters[j]] = [Characters[j], Characters[i]];
            }
        }
    }

 render() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="Site">
        <Header 
          total={this.state.score}
          status={this.state.status}
        /> 
        <Wrapper>
          <div className="game-board">
              <div className="row">
                  {this.state.Characters.map(character => (
                      <Card
                          shuffleCard={this.shuffleCard}
                          id={character.id}
                          key={character.id}
                          image={character.image}
                      />
                  ))}
              </div>
          </div>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}
export default App;
