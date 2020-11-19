import { render } from "@testing-library/react";
import App from "./App";

test("expects addContactButton in App component", () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId("add-contact-button");
  expect(addContactButton).toBeInTheDocument();
});

test("expects Drawer not to be in App component on render", () => {
  const { queryByTestId } = render(<App />);
  const addDrawer = queryByTestId("add-contact-drawer");
  expect(addDrawer).not.toBeInTheDocument();
});
