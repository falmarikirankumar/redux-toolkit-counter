import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./slices/counterSlice";

const Counter = () => {
  const data = useSelector((state) => {
    return state.counter.value;
  });
  const name = useSelector((state) => {
    console.log(state.user.name);
    return state.user.name;
  });
  // const dispatch = useDispatch();
  //   console.log(data);

  return (
    <div>
      <h1>{name}</h1>
      Counter
      <h1>Counter Value : {data}</h1>
      {/* <button
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
      </button> */}
    </div>
  );
};

export default Counter;
