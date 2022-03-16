import { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return [...state, newTodo(action.payload.name)];
    }
    case ACTIONS.TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    }

    case ACTIONS.DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  }
};

function newTodo(todoName) {
  return { id: Date.now(), name: todoName, complete: false };
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: text } });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <input
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {state.map((todo) => {
        return <Todo dispatch={dispatch} key={todo.id} todo={todo}></Todo>;
      })}
    </form>
  );
}

export default App;
