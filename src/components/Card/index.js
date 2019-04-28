import React from "react";
import "./style.css";



function Card(props) {

    return (
        <div onClick={() => props.shuffleCards(props.id)} className="card" id={props.id} style={{ backgroundImage : `url(${props.image})` , }}></div>
    );
}

export default Card;
