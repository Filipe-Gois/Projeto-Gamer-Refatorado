import { LineStyle } from "./style";

type LineProps = {
  width?: string;
  backgroundColor?: string;
  alignSelf?: string;
  margin?: string;
  height?: string;
};

const Line = ({
  width,
  backgroundColor,
  margin,
  alignSelf,
  height,
}: LineProps) => (
  <LineStyle
    $backgroundColor={backgroundColor}
    $margin={margin}
    $height={height}
    $alignSelf={alignSelf}
    $width={width}
  />
);

export default Line;
