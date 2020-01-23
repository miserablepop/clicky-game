import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from  "./pages/Game"
import Header from "./components/header";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="Site">
        <Header /> 
        <Wrapper>
          <Route exact path="/" component={Game} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
