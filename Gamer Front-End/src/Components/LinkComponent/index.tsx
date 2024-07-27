import { ReactNode } from "react";
import { LinkStyle } from "./styles";

type LinkProps = {
  to: string;
  width?: string;
  height?: string;
  children: ReactNode;
  onClick?: () => void;
};

const LinkComponent = ({
  to = "/",
  height,
  width,
  children,
  onClick,
}: LinkProps) => {
  return (
    <LinkStyle onClick={onClick} $height={height} $width={width} to={to}>
      {children}
    </LinkStyle>
  );
};

export default LinkComponent;
