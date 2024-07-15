import "./style.css";

type ArrowProps = {
  exibeSideBar: boolean;
  setExibeSideBar(exibeSideBar: boolean): void;
  sideBarIconRef: React.RefObject<HTMLInputElement>;
};

const Arrow = ({
  exibeSideBar,
  setExibeSideBar,
  sideBarIconRef,
}: ArrowProps) => {
  const abrirFecharSideBar = (): void => setExibeSideBar(!exibeSideBar);

  return (
    <label className="container" onChange={abrirFecharSideBar}>
      <input ref={sideBarIconRef} type="checkbox" />
      <svg
        viewBox="0 0 320 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="chevron-right"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
      </svg>
    </label>
  );
};

export default Arrow;
