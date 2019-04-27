import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-light bg-light d-flex justify-content-center">
      <a className="navbar-brand" href="/">
        Benj's Memory Game
      </a>
      <a>
        Score:
      </a>
    </nav>
  );
}

export default Navbar;