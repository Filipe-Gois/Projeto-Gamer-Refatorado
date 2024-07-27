import { ReactNode, useState } from "react";
import {
  FormControlStyle,
  InputAdornmentStyle,
  InputBoxStyle,
  InputStyle,
  OutlinedInputStyle,
} from "./style";
import { InputLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type InputProps = {
  label?: string;
  helperText?: string;
};

type InputBoxProps = {
  children?: ReactNode;
};

const Input = ({ label = "Digite seu Email:", helperText }: InputProps) => {
  return (
    <InputStyle
      helperText={helperText}
      id="filled-basic"
      label={label}
      variant="standard"
    />
  );
};

const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControlStyle sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        Digite sua senha:
      </InputLabel>
      <OutlinedInputStyle
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornmentStyle position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornmentStyle>
        }
        label="Password"
      />
    </FormControlStyle>
  );
};

const InputBox = ({ children }: InputBoxProps) => (
  <InputBoxStyle>{children}</InputBoxStyle>
);

export { InputBox, InputPassword };
export default Input;
