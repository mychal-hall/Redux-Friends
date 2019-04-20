import React from "react";

export default function SelectedFriend(props) {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleShow({})}> X </span>
      <div>{props.selected.email}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => process.handleDelete()}>{`Delete ${
        props.selected.name
      }`}</button>
    </div>
  );
}
