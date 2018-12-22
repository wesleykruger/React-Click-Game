import React from "react";

export function CharacterItem(props) {
  return (
    <div {...props} >     
       <img alt={props.name} src={props.src} />
       {props.children}
    </div>
  );
}