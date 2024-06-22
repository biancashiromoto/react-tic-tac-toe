import React, { ElementType } from "react";

interface ButtonIconProps {
  icon: ElementType;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon }) => {
  return <Icon />;
};

export default ButtonIcon;
