import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("card plans renders", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/BUY/i);
  expect(linkElement);
});
