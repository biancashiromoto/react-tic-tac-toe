import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";
import player1Symbol from '../../assets/img/o-item.png';
import player2Symbol from '../../assets/img/x-item.png';
import { TEST_IDS, TEXT } from "../../__variables";


let cells: Element[];
describe("Component PlayerDisplay", () => {
  beforeEach(() => {
    const { getAllByTestId } = render(
      <Provider>
        <App />
      </Provider>
    );
    cells = getAllByTestId(TEST_IDS.cell);
  });

  it("should correctly display the current player", () => {
    const container = screen.getByTestId(TEST_IDS.playerDisplay);
    expect(container).toHaveTextContent(TEXT.player1);
    expect(container).not.toHaveTextContent(TEXT.player2);
    expect(container.firstChild).toHaveAttribute("src", player1Symbol);
    
    fireEvent.click(cells[0]);
    expect(container).toHaveTextContent(TEXT.player2);
    expect(container).not.toHaveTextContent(TEXT.player1);
    expect(container.firstChild).toHaveAttribute("src", player2Symbol);
    
    fireEvent.click(cells[1]);
    expect(container).toHaveTextContent(TEXT.player1);
    expect(container).not.toHaveTextContent(TEXT.player2);
    expect(container.firstChild).toHaveAttribute("src", player1Symbol);
  });

  it("should set the current player as player 1 after player 1 wins", () => {
    const container = screen.getByTestId(TEST_IDS.playerDisplay);
    fireEvent.click(cells[0]);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[1]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[2]);
    fireEvent.click(screen.getByTestId(TEST_IDS.buttons.restartGame));
    expect(container).toHaveTextContent(TEXT.player1);
  });

  it("should set the current player as player 1 after player 2 wins", () => {
    const container = screen.getByTestId(TEST_IDS.playerDisplay);
    fireEvent.click(cells[3]);
    fireEvent.click(cells[6]);
    fireEvent.click(cells[4]);
    fireEvent.click(cells[7]);
    fireEvent.click(cells[0]);
    fireEvent.click(cells[8]);
    fireEvent.click(screen.getByTestId(TEST_IDS.buttons.restartGame));
    expect(container).toHaveTextContent(TEXT.player1);
  });
});