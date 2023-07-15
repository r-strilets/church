import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="#">Храм</Link>
        </li>
        <li>
          <Link to="#">Церква це...</Link>
        </li>
        <li>
          <Link to="#">Про нас</Link>
        </li>
        <li>
          <Link to="#">Наші служіння</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
