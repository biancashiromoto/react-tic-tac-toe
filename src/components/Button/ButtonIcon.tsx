import React, { ElementType } from "react";

interface ButtonIconProps {
  icon: ElementType;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon, className }) => {
  return <Icon className={className} />;
};

export default ButtonIcon;
