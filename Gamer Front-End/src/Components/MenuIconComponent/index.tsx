import "./style.css";

type MenuIconComponentProps = {
  exibeNavbar: boolean;
  setExibeNavbar(exibeNavbar: boolean): void;
  navRef: React.RefObject<HTMLInputElement>;
};

const MenuIconComponent = ({
  setExibeNavbar,
  exibeNavbar,
  navRef,
}: MenuIconComponentProps) => {
  const abrirFecharNavMobile = (): void => setExibeNavbar(!exibeNavbar);

  return (
    <div className="MenuIconComponent">
      <input
        ref={navRef}
        id="checkbox"
        type="checkbox"
        onChange={abrirFecharNavMobile}
      />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
    </div>
  );
};

export default MenuIconComponent;
