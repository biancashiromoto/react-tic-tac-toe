import { render, screen } from "@testing-library/react";
import App from "./App";
import Provider from "./context/Provider";
import { clickCells } from "./utils/test-utils";

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

  it("should render component MessageContainer after the game is over", () => {
    expect(screen.queryByTestId("message-container")).not.toBeInTheDocument();
    clickCells([0, 3, 1, 4, 2]);
    expect(screen.getByTestId("message-container")).toBeInTheDocument();
  });
});