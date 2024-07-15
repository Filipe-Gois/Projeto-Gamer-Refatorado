import { FormHTMLAttributes, ReactNode } from "react";
import { FormStyle } from "./style";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
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

export default FormComponent;
