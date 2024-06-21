import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import Provider from "../../context/Provider";

let cells: Element[];
describe("Component MessageContainer", () => {

  beforeEach(() => {
    const { getAllByTestId } = render(
      <Provider>
        <App />
      </Provider>
    );
    cells = getAllByTestId("cell");
  });
  
  it("should display the correct message if player 1 wins", async () => {
      fireEvent.click(cells[0]);
      fireEvent.click(cells[3]);
      fireEvent.click(cells[1]);
      fireEvent.click(cells[4]);
      fireEvent.click(cells[2]);
      expect(await screen.findByTestId("message-container")).toHaveTextContent(/player 1 wins!/i);
    });
    
    it("should display the correct message if player 2 wins", async () => {
      fireEvent.click(cells[3]);
      fireEvent.click(cells[6]);
      fireEvent.click(cells[4]);
      fireEvent.click(cells[7]);
      fireEvent.click(cells[0]);
      fireEvent.click(cells[8]);
      expect(await screen.findByTestId("message-container")).toHaveTextContent(/player 2 wins!/i);
  });
  
  it("should display the correct message if game ends in tie", async () => {
      fireEvent.click(cells[0]);
      fireEvent.click(cells[3]);
      fireEvent.click(cells[1]);
      fireEvent.click(cells[4]);
      fireEvent.click(cells[6]);
      fireEvent.click(cells[7]);
      fireEvent.click(cells[5]);
      fireEvent.click(cells[2]);
      fireEvent.click(cells[8]);
      expect(await screen.findByTestId("message-container")).toHaveTextContent(/tie!/i);
  });
});
