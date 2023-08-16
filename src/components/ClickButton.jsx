import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";

const ClickButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="button">
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="button">
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className="button">
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
};

export default ClickButton;
