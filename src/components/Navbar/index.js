import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <a className="title">
        Benj's Memory Game
      </a>
      <a className="message">{props.message}</a>
      <a className="score">
        Score: {props.score} | Top Score: {props.topscore}
      </a>
    </nav>
  );
}

export default Navbar;