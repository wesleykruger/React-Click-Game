import React from "react";
import { Col, Row, Container } from "../Grid";

function CharacterItem(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.src} />
      </div>
    </div>
  )
}

export default CharacterItem