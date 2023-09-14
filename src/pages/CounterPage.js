import { Button } from "reactstrap";
import Counter from "../components/Counter";
import { useState } from "react";

const CounterPage = ({ userName }) => {
  const [show, setShow] = useState(true);
  const [childData, setChildData] = useState();

  const childDatasiniCek = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h2>Counter Page | Sayaç: {childData}</h2>
      <hr />
      <a href="#counter-component">Counter comp</a>
      <Button onClick={() => setShow(!show)}> Toggle Counter </Button>
      {/* Conditional Rendering */}
      {show && (
        <Counter
          id="counter-component"
          userName={userName}
          childDatasiniCek={childDatasiniCek}
        />
      )}
    </div>
  );
};

export const name = "Ali";
export const PI = 3.1415;

export default CounterPage;
