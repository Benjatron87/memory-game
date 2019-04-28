import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"
import characters from "./characters.json"

let score = 0

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    characters,
    score
  }

  shuffleCards = () => {
    const characters = this.state.characters;

    shuffle(characters);

    this.setState({ characters });
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
              shuffleCards={this.shuffleCards}
              id={character.id}
              image={character.image}
              name={character.name}
              bool={character.bool}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;