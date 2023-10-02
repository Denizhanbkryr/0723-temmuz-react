import { Button, Spinner } from "reactstrap";

const SpinnerButton = ({ children, loading, ...rest }) => {
  return (
    <Button {...rest}>
      {loading && <Spinner className="me-2" size={"sm"} />}
      {children}
    </Button>
  );
};

export default SpinnerButton;
