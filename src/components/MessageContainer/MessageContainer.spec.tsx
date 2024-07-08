import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";
import { TEST_IDS } from "../../__variables";
import { TEXT } from "../../__text";

describe("Component MessageContainer", () => {

  beforeEach(() => {
    render(
      <Provider>
        <App />
      </Provider>
    );
  });
  
  it("should display the correct message if player 1 wins", async () => {
    const cells = screen.getAllByTestId(TEST_IDS.cell);
      fireEvent.click(cells[0]);
      fireEvent.click(cells[3]);
      fireEvent.click(cells[1]);
      fireEvent.click(cells[4]);
      fireEvent.click(cells[2]);
      expect(await screen.findByTestId(TEST_IDS.messageContainer)).toHaveTextContent(`${TEXT.player1} ${TEXT.gameOverMessage.wins}`);
    });
    
    it("should display the correct message if player 2 wins", async () => {
      fireEvent.click(screen.getByTestId(TEST_IDS.buttons.restartGame));
      const cells = screen.getAllByTestId(TEST_IDS.cell);
      fireEvent.click(cells[3]);
      fireEvent.click(cells[6]);
      fireEvent.click(cells[4]);
      fireEvent.click(cells[7]);
      fireEvent.click(cells[0]);
      fireEvent.click(cells[8]);
      expect(await screen.findByTestId(TEST_IDS.messageContainer)).toHaveTextContent(`${TEXT.player2} ${TEXT.gameOverMessage.wins}`);
  });
  
  it("should display the correct message if game ends in tie", async () => {
    fireEvent.click(screen.getByTestId(TEST_IDS.buttons.restartGame));
    const cells = screen.getAllByTestId(TEST_IDS.cell);
      fireEvent.click(cells[0]);
      fireEvent.click(cells[3]);
      fireEvent.click(cells[1]);
      fireEvent.click(cells[4]);
      fireEvent.click(cells[6]);
      fireEvent.click(cells[7]);
      fireEvent.click(cells[5]);
      fireEvent.click(cells[2]);
      fireEvent.click(cells[8]);
      expect(await screen.findByTestId(TEST_IDS.messageContainer)).toHaveTextContent(TEXT.gameOverMessage.tie);
  });
});
