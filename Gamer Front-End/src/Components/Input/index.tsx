import { InputHTMLAttributes, ReactNode, useState } from "react";
import { InputBoxStyle, InputContentStyle, InputStyle } from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  helperText?: string;
};

type InputBoxProps = {
  children?: ReactNode;
};

const InputComponent = ({ ...rest }: InputProps) => {
  return (
    <InputContentStyle>
      <InputStyle {...rest} />
    </InputContentStyle>
  );
};

const InputPassword = ({ ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <InputContentStyle>
      <InputStyle type={showPassword ? "text" : "password"} {...rest} />
    </InputContentStyle>
  );
};

const InputBox = ({ children }: InputBoxProps) => (
  <InputBoxStyle>{children}</InputBoxStyle>
);

export { InputBox, InputPassword };
export default InputComponent;
