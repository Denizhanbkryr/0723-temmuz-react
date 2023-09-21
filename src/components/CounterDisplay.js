import { Button } from "reactstrap";

const CounterDisplay = ({
  sayac,
  // props drilling
  id,
  userName,
  arttirAction,
  azaltAction,
  resetAction,
}) => {
  return (
    <div id={id} className="counter-card">
      <h3>Merhaba {userName}</h3>
      <hr />
      <div className="counter" data-testid="sayac-container">
        {sayac}
      </div>
      <div className="controls">
        <Button
          color="primary me-1"
          onClick={arttirAction}
          data-testid="inc-btn"
        >
          +
        </Button>
        <Button
          color="primary me-1"
          onClick={azaltAction}
          data-testid="dec-btn"
        >
          -
        </Button>
        <Button color="primary me-1" onClick={resetAction}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CounterDisplay;
