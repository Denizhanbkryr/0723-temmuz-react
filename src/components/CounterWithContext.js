import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

import "./Counter.css";

const CounterWithContext = (props) => {
  const { counter, setCounter, increment } = useContext(CounterContext);

  const { id } = props;

  const arttirAction = (e) => {
    setCounter(counter + increment);
  };

  const azaltAction = (e) => {
    setCounter(counter - increment);
  };

  const resetAction = () => {
    setCounter(0);
  };

  return (
    <CounterDisplay
      id={id}
      sayac={counter}
      arttirAction={arttirAction}
      azaltAction={azaltAction}
      resetAction={resetAction}
    />
  );
};

export default CounterWithContext;
