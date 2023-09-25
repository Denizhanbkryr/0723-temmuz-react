import { useEffect, useReducer, useState } from "react";
import CounterDisplay from "./CounterDisplay";

import "./Counter.css";
import { Button } from "reactstrap";
// props Obje formatındadır

const sayacInitial = 100;

const sayacReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INCREASE":
      return state + 1;
      break;

    case "DECREASE":
      return state - 1;
      break;

    case "PLUS":
      return state + payload;

    case "RESET":
      return sayacInitial;

    default:
      return state;
      break;
  }
};

const CounterWithReducer = (props) => {
  // useState Hook = function - Component Datası ve setter methodu oluşturur
  const [sayac, dispatchSayac] = useReducer(sayacReducer, sayacInitial); // stateler immutable

  // Object Destructuring
  const { id, userName } = props;

  const arttirAction = (e) => {
    dispatchSayac({ type: "INCREASE" });
  };

  const azaltAction = (e) => {
    dispatchSayac({ type: "DECREASE" });
  };

  const resetAction = () => {
    dispatchSayac({ type: "RESET" });
  };

  return (
    <>
      <CounterDisplay
        id={id}
        sayac={sayac}
        userName={userName}
        arttirAction={arttirAction}
        azaltAction={azaltAction}
        resetAction={resetAction}
      />
      <Button
        className="me-2"
        onClick={() => {
          dispatchSayac({
            type: "PLUS",
            payload: 10,
          });
        }}
      >
        +10
      </Button>
      <Button
        onClick={() => {
          dispatchSayac({
            type: "PLUS",
            payload: -10,
          });
        }}
      >
        -10
      </Button>
    </>
  );
};

export const PI = 3.14;

export default CounterWithReducer;
