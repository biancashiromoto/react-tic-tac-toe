import { useState, useEffect } from 'react';

const useCellState = (isDisabledState: boolean) => {
  const [isDisabled, setIsDisabled] = useState(isDisabledState);

  useEffect(() => {
    if (isDisabledState) {
      setIsDisabled(false);
    }
  }, [isDisabledState]);

  const disableCell = () => {
    setIsDisabled(true);
  };

  const enableCell = () => {
    setIsDisabled(false);
  };

  return {
    isDisabled,
    disableCell,
    enableCell
  };
};

export default useCellState;
