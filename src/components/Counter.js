import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

import "./Counter.css";
// props Obje formatındadır

const Counter = (props) => {
  // useState Hook = function - Component Datası ve setter methodu oluşturur
  const [sayac, setSayac] = useState(100); // stateler immutable

  // Object Destructuring
  const { userName, childDatasiniCek } = props;

  console.log(
    "Counter comopnent fonksiyonu yeniden çalıştırıldı! Yaaani, Counter Componenti Rerender edildi!"
  );

  const arttirAction = (e) => {
    setSayac(sayac + 1);
    console.log("+ butonuna tıklandı!", sayac); // 100
  };

  const azaltAction = (e) => {
    setSayac(sayac - 1);
    console.log("- butonuna tıklandı! ", sayac);
  };

  const resetAction = () => {
    setSayac(100);
  };

  console.log("Counter componenti render edildi! ", sayac);

  useEffect(() => {
    childDatasiniCek(sayac);
  }, [sayac]);

  return (
    <CounterDisplay
      sayac={sayac}
      userName={userName}
      arttirAction={arttirAction}
      azaltAction={azaltAction}
      resetAction={resetAction}
    />
  );
};

export const PI = 3.14;

export default Counter;
