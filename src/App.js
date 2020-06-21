import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchPost } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("here");
    dispatch(fetchPost());

    console.log("there");
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggedIn ? <h1>here is confidential information</h1> : ""}
    </div>
  );
}

export default App;
