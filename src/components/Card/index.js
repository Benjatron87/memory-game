import React from "react";
import "./style.css";



function Card(props) {

    return (
        <div onClick={props.shuffle} className="card" id={props.id} style={{ backgroundImage : `url(${props.image})` , }}></div>
    );
}

export default Card;
