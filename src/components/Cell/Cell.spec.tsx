import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";
import player1Symbol from "../../assets/img/o-item.png";
import player2Symbol from "../../assets/img/x-item.png";
import { Utils } from "../../utils/utils";
// import { vi } from 'vitest';
// import soundPath from "../assets/sounds/click.mp3";

describe("Component Cell", () => {
  const {
    _player1Symbol,
    _player2Symbol,
  } = new Utils();

  beforeEach(() => {
    render(
      <Provider>
        <App />
      </Provider>
    );
  });

  afterEach(() => fireEvent.click(screen.getByTestId("restart-game-button")));
  
  it("should correctly be restored when game is restarted", async () => {
    let cells;
    cells = screen.getAllByTestId("cell");
    expect(cells[0]).not.toHaveClass("disabled");
    expect(cells[1]).not.toHaveClass("disabled");
    
    fireEvent.click(cells[0]);
    expect(screen.getByText(/player 2/i)).toBeInTheDocument();
    expect(cells[0]).toHaveClass("disabled");
    expect(cells[0].firstChild).toHaveAttribute("src", player1Symbol);
    expect(cells[0].firstChild).toHaveAttribute("alt", _player1Symbol);

    fireEvent.click(cells[1]);
    expect(screen.getByText(/player 1/i)).toBeInTheDocument();
    expect(cells[1]).toHaveClass("disabled");
    expect(cells[1].firstChild).toHaveAttribute("src", player2Symbol);
    expect(cells[1].firstChild).toHaveAttribute("alt", _player2Symbol);
    
    fireEvent.click(screen.getByTestId("restart-game-button"));
    cells = screen.getAllByTestId("cell");
    expect(screen.getByText(/player 1/i)).toBeInTheDocument();
    expect(cells[0]).not.toHaveClass("disabled");
    expect(cells[0].childNodes.length).toEqual(0);
    expect(cells[1]).not.toHaveClass("disabled");
    expect(cells[1].childNodes.length).toEqual(0);
  });

  // it("should correctly play sound when cell is clicked and sound is not disabled", () => {
  //   const playSoundMock = vi.spyOn(Utils.prototype, "playSound").mockImplementation(() => {});    
  //   const cells = screen.getAllByTestId("cell");
  //   fireEvent.click(cells[0]);
  //   screen.debug();
  //   expect(playSoundMock).toHaveBeenCalled();
  // });
});