import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Card;