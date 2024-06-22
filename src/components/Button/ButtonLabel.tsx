interface ButtonLabelProps {
  label: string;
}

const ButtonLabel = ({ label }: ButtonLabelProps) => {
  return (<p>{label}</p>);
}

export default ButtonLabel;