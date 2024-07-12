import "./style.css";

type MenuIconComponentProps = {
  exibeNavbar: boolean;
  setExibeNavbar(exibeNavbar: boolean): void;
};

const MenuIconComponent = ({
  setExibeNavbar,
  exibeNavbar,
}: MenuIconComponentProps) => {
  const abrirFecharNavMobile = (): void => setExibeNavbar(!exibeNavbar);

  return (
    <div className="MenuIconComponent">
      <input id="checkbox" type="checkbox" onChange={abrirFecharNavMobile} />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};

export default MenuIconComponent;
