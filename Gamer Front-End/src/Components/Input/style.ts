import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { Theme } from "../../Styles/Theme";

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
