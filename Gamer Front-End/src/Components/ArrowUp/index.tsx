import { ArrowUpStyle } from "./style";

const ArrowUp = () => {
  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ArrowUpStyle onClick={voltarAoTopo}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9708 0.537868C13.1573 -0.16106 11.8362 -0.16106 11.0227 0.537868L0.610113 9.48414C-0.203371 10.1831 -0.203371 11.3181 0.610113 12.0171C1.4236 12.716 2.7447 12.716 3.55818 12.0171L10.4175 6.11811V23.2726C10.4175 24.2623 11.3481 25.0618 12.5 25.0618C13.6519 25.0618 14.5825 24.2623 14.5825 23.2726V6.11811L21.4418 12.0115C22.2553 12.7104 23.5764 12.7104 24.3899 12.0115C25.2034 11.3125 25.2034 10.1775 24.3899 9.47855L13.9773 0.532276L13.9708 0.537868Z"
          fill="#1B1426"
        />
      </svg>
    </ArrowUpStyle>
  );
};

export default ArrowUp;
