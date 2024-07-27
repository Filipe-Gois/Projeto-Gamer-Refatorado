import TextField from "@mui/material/TextField";
import { styled as styledComponents } from "styled-components";
import { styled } from "@mui/system";
import { Theme } from "../../Styles/Theme";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

export const InputStyle = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px", // Adiciona border-radius
    "& fieldset": {
      borderColor: "#fff", // Cor da borda
      borderRadius: "8px", // Adiciona border-radius ao fieldset
    },
    "&:hover fieldset": {
      borderColor: "#fff", // Cor da borda ao passar o mouse
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff", // Cor da borda quando o campo está focado
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    background:
      "linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,0))", // Fundo linear
    color: Theme.colors.primary, // Cor do texto
    padding: "10px", // Padding no texto
  },
  "& .MuiInputLabel-root": {
    color: "#fff", // Cor do label
    padding: "0 10px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff", // Cor do label quando focado
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#fff", // Cor do placeholder
    opacity: 1, // Necessário para que a cor seja aplicada corretamente
  },
});

export const InputBoxStyle = styledComponents.div`
display: flex;
flex-direction:column;
gap:30px;
width:100%;
height: max-content;
`;

export const OutlinedInputStyle = styled(OutlinedInput)({});

export const FormControlStyle = styled(FormControl)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px", // Adiciona border-radius
    "& fieldset": {
      borderColor: "#fff", // Cor da borda
      borderRadius: "8px", // Adiciona border-radius ao fieldset
    },
    "&:hover fieldset": {
      borderColor: "#fff", // Cor da borda ao passar o mouse
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff", // Cor da borda quando o campo está focado
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    background:
      "linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,0))", // Fundo linear
    color: Theme.colors.primary, // Cor do texto
    padding: "10px", // Padding no texto
  },
  "& .MuiInputLabel-root": {
    color: "#fff", // Cor do label
    padding: "0 10px",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#fff", // Cor do label quando focado
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#fff", // Cor do placeholder
    opacity: 1, // Necessário para que a cor seja aplicada corretamente
  },
});

export const InputAdornmentStyle = styled(InputAdornment)({});
