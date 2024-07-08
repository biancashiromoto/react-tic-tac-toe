import { fireEvent, render, screen } from "@testing-library/react";
import Provider from "../../context/Provider";
import { Button } from "./";
import { vi } from "vitest";
import { GoUnmute } from "react-icons/go";
import { TEXT } from "../../__variables";

describe("Component Button", () => {
  describe("Restart game button", () => {
    let resetGameMock: ReturnType<typeof vi.fn>;
    beforeEach(() => {
      resetGameMock = vi.fn();
      render(
        <Provider>
          <Button.Root
            onClick={resetGameMock}
            disabled={false}
          >
            <Button.Label label={TEXT.restartButton} />
          </Button.Root>
        </Provider>
      );
    });
    
      it("should be correctly rendered", () => {
        expect(screen.getByRole("button", { name: TEXT.restartButton })).toBeInTheDocument();
      });
    
      it("should call function 'resetGameMock' when clicked", () => {
        fireEvent.click(screen.getByRole("button", { name: TEXT.restartButton }));
        expect(resetGameMock).toHaveBeenCalled();
      });
  });

  describe("Toggle mute button", () => {
    let setToggleMute: ReturnType<typeof vi.fn>;
    beforeEach(() => {
      setToggleMute = vi.fn();
      render(
        <Provider>
          <Button.Root
            disabled={false}
            onClick={setToggleMute}
          >
            <Button.Icon icon={GoUnmute} />
          </Button.Root>
        </Provider>
      );
    });
    
      it("should be correctly rendered", () => {
        expect(screen.getByRole("button")).toBeInTheDocument();
      });
    
      it("should call function 'setIsMutedMock' when clicked", () => {
        fireEvent.click(screen.getByRole("button"));
        expect(setToggleMute).toHaveBeenCalled();
      });
  });
});