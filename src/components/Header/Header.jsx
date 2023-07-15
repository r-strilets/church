import { Link } from "react-router-dom";
import { StyledHeader, StyledList } from "./Header.styled.js";
import { Container } from "../../utils/GlobalStyle.js";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledList>
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
        </StyledList>
      </Container>
    </StyledHeader>
  );
};

export default Header;
