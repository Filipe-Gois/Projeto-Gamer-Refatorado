import IconComponent from "../../IconComponent";
import { MidiasSociaisBox } from "./style";

type MidiasSociaisProps = {
  display?: string;
  gap?: string;
};

const MidiasSociaisComponent = ({
  display = "flex",
  gap = "0px",
}: MidiasSociaisProps) => {
  return (
    <MidiasSociaisBox $display={display} $gap={gap}>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/filipe-góis-841b58206/"
      >
        <IconComponent iconType="facebook" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/filipe-góis-841b58206/"
      >
        <IconComponent iconType="linkedin" />
      </a>
      <a target="_blank" href="https://www.instagram.com/felpz.11/">
        <IconComponent iconType="instagram" />
      </a>
    </MidiasSociaisBox>
  );
};

export default MidiasSociaisComponent;
