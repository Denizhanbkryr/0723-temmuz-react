import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter render test", () => {
  render(<Counter userName={"test-user-name"} childDatasiniCek={() => {}} />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test("Counter sayaç container test", () => {
  render(<Counter userName={"test-user-name"} childDatasiniCek={() => {}} />);
  const sayacContainer = screen.getByTestId("sayac-container");
  expect(sayacContainer).toHaveTextContent("100");
});

test("Counter sayaç increment test", () => {
  render(<Counter userName={"test-user-name"} childDatasiniCek={() => {}} />);
  const sayacContainer = screen.getByTestId("sayac-container");
  const incBtn = screen.getByTestId("inc-btn");
  fireEvent.click(incBtn);
  fireEvent.click(incBtn);
  fireEvent.click(incBtn);

  expect(sayacContainer).toHaveTextContent("103");
});

test("Counter sayaç increment test", () => {
  render(<Counter userName={"test-user-name"} childDatasiniCek={() => {}} />);
  const sayacContainer = screen.getByTestId("sayac-container");
  const decBtn = screen.getByTestId("dec-btn");
  fireEvent.click(decBtn);
  fireEvent.click(decBtn);
  fireEvent.click(decBtn);

  expect(sayacContainer).toHaveTextContent("97");
});
