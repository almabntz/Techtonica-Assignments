import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// TEST
// First Test - Pass: Renders app
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

//test
escribe("Form", () => {
  test("render the Form component", () => {
    render(<Form />);
  });
});