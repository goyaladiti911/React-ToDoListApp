import React, { useState } from "react";

function AddNewItem(props) {
  const [newToDo, setNewToDo] = useState("");

  function addToDo(event) {
    const entry = event.target.value;
    setNewToDo(entry);
  }

  return (
    <div className="form">
      <input onChange={addToDo} value={newToDo} type="text" />
      <button
        onClick={() => {
          props.onClicked(newToDo);
          setNewToDo("");
        }}
      >
        <span>+</span>
      </button>
    </div>
  );
}

export default AddNewItem;
