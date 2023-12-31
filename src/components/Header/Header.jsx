import { StyledHeader, StyledList } from "./Header.styled.js";
import { Container } from "../../utils/GlobalStyle.js";

const Header = ({
  scrollToSection1,
  scrollToSection2,
  scrollToSection3,
  scrollToSection4,
  scrollToSection5,
}) => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <StyledList>
            <li onClick={scrollToSection1}>Храм</li>
            <li onClick={scrollToSection2}>Церква це...</li>
            <li onClick={scrollToSection3}>Про нас</li>
            <li onClick={scrollToSection4}>Наші служіння</li>
            <li onClick={scrollToSection5}>Контакти</li>
          </StyledList>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
