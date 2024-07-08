import { render, screen } from "@testing-library/react";
import App from "./App";
import Provider from "./context/Provider";
import { TEST_IDS } from "./__variables";
import { TEXT } from "./__text";

describe("Component App", () => {
  beforeEach(() => {
    render(
      <Provider>
        <App />
      </Provider>
    );
  });

  it("should initially contain the components Board, PlayerDisplay and Button and a title", () => {
    expect(screen.getByTestId(TEST_IDS.board)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.buttons.restartGame)).toBeInTheDocument();
    expect(screen.getByTestId(TEST_IDS.playerDisplay)).toBeInTheDocument();
    expect(screen.queryByTestId(TEST_IDS.messageContainer)).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: TEXT.title })).toBeInTheDocument();
  });
});