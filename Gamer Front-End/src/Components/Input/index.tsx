import { InputStyle } from "./style";

type InputProps = {
  label?: string;
  helperText?: string;
};

const Input = ({ label = "Email", helperText }: InputProps) => {
  return (
    <InputStyle
      helperText={helperText}
      id="filled-basic"
      label={label}
      variant="standard"
    />
  );
};

export default Input;
