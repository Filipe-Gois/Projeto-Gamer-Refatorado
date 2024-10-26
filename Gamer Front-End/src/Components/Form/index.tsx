import { FormHTMLAttributes, ReactNode } from "react";
import { FormStyle, FormStyleLogin } from "./style";
import { Theme } from "../../Styles/Theme";
import { TitleLogin } from "../Title";
import ButtonComponent from "../Button";
import InputComponent, { InputBox, InputPassword } from "../Input";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children?: ReactNode;
  gap?: string;
  flexD?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
};

const FormComponent = ({
  children,
  gap,
  flexD,
  justifyContent,
  alignItems,
  margin,
  ...rest
}: FormProps) => {
  return (
    <FormStyle
      $gap={gap}
      $flexD={flexD}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $margin={margin}
      {...rest}
    >
      {children}
    </FormStyle>
  );
};

const FormLogin = ({ ...rest }: FormProps) => {
  return (
    <FormStyleLogin {...rest}>
      <TitleLogin
        textColor={Theme.colors.tertiary}
        textAlign="center"
        text="Login"
      />

      <InputBox>
        <InputComponent placeholder="Digite seu Email:" />
        <InputPassword placeholder="Digite sua senha:" />
      </InputBox>
      <ButtonComponent widthResponsivo="200px" width="100%" text="Logar" />
    </FormStyleLogin>
  );
};

export { FormLogin };
export default FormComponent;
