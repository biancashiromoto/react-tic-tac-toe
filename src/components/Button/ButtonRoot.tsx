import { ReactNode } from "react";

interface ButtonRootProps {
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode
}

const ButtonRoot = ({
  className,
  children,
  disabled,
  dataTestId,
  onClick
}: ButtonRootProps) => {
  return (
    <button
      className={className}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={() => onClick()}
      type="button"
    >
      { children }
    </button>
  )
}

export default ButtonRoot;