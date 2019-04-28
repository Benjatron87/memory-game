import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"
import characters from "./characters.json"

let score = 0

class App extends Component {

  state = {
    characters,
    score
  }

  render() {
    return (
      <div className="container">
        <Navbar 
            score={score}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
            <Card
              id={character.id}
              image={character.image}
              name={character.name}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;