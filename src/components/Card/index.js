import React from "react";
import "./style.css";



function Card(props) {

    return (
        <div onClick={() => props.shuffleCards()} className="card" id={props.key} style={{ backgroundImage : `url(${props.image})` , }}></div>
    );
}

export default Card;
