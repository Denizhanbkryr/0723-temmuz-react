import { Form, FormGroup, Input, Label } from "reactstrap";
import useInput from "../hooks/useInput";

const LoginFormWithUseInput = () => {
  const [email, emailHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const [rememberMe, rememberMeHandler] = useInput(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <Label>Kullanıcı:</Label>
          <Input type="email" name={"email"} onChange={emailHandler} />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" name={"password"} onChange={passwordHandler} />
        </FormGroup>
        <FormGroup>
          <Label>Remember Me:</Label>
          <Input
            type="checkbox"
            name={"rememberMe"}
            onChange={rememberMeHandler}
          />
        </FormGroup>

        <Input type="submit" formNoValidate="formnovalidate" value="Log in" />
      </Form>
    </div>
  );
};

export default LoginFormWithUseInput;
