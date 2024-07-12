import { SideBarStyle } from "./style";

type SideBarProps = {
  exibeSideBar?: string;
};

const SideBar = ({ exibeSideBar = "false" }: SideBarProps) => {
  return <SideBarStyle $exibeSideBar={exibeSideBar}></SideBarStyle>;
};

export default SideBar;
