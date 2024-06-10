import { render, screen } from "@testing-library/react";
import App from "./App";
import Provider from "./context/Provider";

describe("Component App", () => {
  beforeEach(() => {
    render(
      <Provider>
        <App />
      </Provider>
    );
  });

  it("should initially contain the components Board, PlayerDisplay and Button and a title", () => {
    expect(screen.getByTestId("board")).toBeInTheDocument();
    expect(screen.getByTestId("restart-game-button")).toBeInTheDocument();
    expect(screen.getByTestId("player-display-container")).toBeInTheDocument();
    expect(screen.queryByTestId("message-container")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tic-tac-toe/i })).toBeInTheDocument();
  });
});