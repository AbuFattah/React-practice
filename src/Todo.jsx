import React from "react";
import { ACTIONS } from "./App";
const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <li>
        <span style={{ color: todo.complete ? "#ccc" : "#333" }}>
          {todo.name}
        </span>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
          }}
        >
          toggle
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
          type="button"
        >
          delete
        </button>
      </li>
    </>
  );
};

export default Todo;
