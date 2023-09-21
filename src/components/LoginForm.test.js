import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

// setup userEvent
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

test("Login Form render test", () => {
  render(<LoginForm />);
});

test("Login Form fill data test", async () => {
  const { user } = setup(<LoginForm />);

  // Email Input

  const emailInput = screen.getByTestId("email-input");
  // fireEvent.change(emailInput, { target: { value: "asd@asd.com" } });
  await user.type(emailInput, "asd@asd.com");
  expect(emailInput).toHaveValue("asd@asd.com");

  // Pass Input
  const passInput = screen.getByTestId("pass-input");
  // fireEvent.change(passInput, { target: { value: "123456" } });
  await user.type(passInput, "123!'^QWEqwe");
  expect(passInput).toHaveValue("123!'^QWEqwe");

  // Pass Input
  const rememberMeInput = screen.getByTestId("remember-me-input");
  // fireEvent.change(rememberMeInput, { target: { checked: true } });
  await user.click(rememberMeInput);
  expect(rememberMeInput).toBeChecked();

  const submitBtn = screen.getByTestId("login-submit-btn");
  expect(submitBtn).toBeEnabled();
});

test("Login Form validation test", async () => {
  const { user } = setup(<LoginForm />);

  // Email Input
  const emailInput = screen.getByTestId("email-input");
  await user.type(emailInput, "qwe");

  const errMessage = screen.getByText("Email adresi geçerli değildir.");
  expect(errMessage).toBeInTheDocument();

  // const submitBtn = screen.getByTestId("login-submit-btn");
  // expect(submitBtn).toBeDisabled();

  // // Pass Input
  // const passInput = screen.getByTestId("pass-input");
  // fireEvent.change(passInput, { target: { value: "123456" } });
  // expect(passInput).toHaveValue("123456");

  // // Pass Input
  // const rememberMeInput = screen.getByTestId("remember-me-input");
  // fireEvent.change(rememberMeInput, { target: { checked: true } });
  // expect(rememberMeInput).toBeChecked();
});
