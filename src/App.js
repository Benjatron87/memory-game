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
    score,
    message: ""
  }

  shuffleCards = (id) => {
    const characters = this.state.characters;

    shuffle(characters);

    let score = this.state.score;
    let message = "";

    for(let i = 0; i < characters.length; i++){
      if(id === characters[i].id){
        if(characters[i].bool === "0"){
          characters[i].bool = "1";

          score = score + 1;
        }
        else{
          characters.map(character => (
            character.bool = "0"
          ))
          score = score * 0;
          message = "You Lose! Click a Character to Start Again"
        }
      }
    }
    
    if(score === 12){
      message = "You Win! Click a Character to Start Again"

      characters.map(character => (
        character.bool = "0"
      ))
    }
    else if (score > 12){
      message = "";
      score = 0;
    }

    this.setState({characters, score, message})
  }

  render() {
    return (
      <div className="container">
        <Navbar 
            score={this.state.score}
            message={this.state.message}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
            <Card
              checkBool={this.checkBool}
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