import { useState } from "react";
import { increment, decrement } from "./slices/counterSlice";
// import { display } from "./slices/nameSlice";

import "./App.css";
import Counter from "./Counter";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Counter />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
