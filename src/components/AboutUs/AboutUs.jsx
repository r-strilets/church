import React from "react";
import { Container } from "../../utils/GlobalStyle";
import {
  StyledSection,
  StyledTitle,
  StyledList,
  StyledListItem,
  StyledSubTitle,
} from "./AboutUs.styled";

const AboutUs = ({ section3Ref }) => {
  return (
    <StyledSection ref={section3Ref}>
      <Container>
        <StyledTitle>Про нас</StyledTitle>
        <StyledList>
          <StyledListItem>
            <StyledSubTitle>Бачення</StyledSubTitle>
            <p>
              Досягнути недосягнутих,
              <br /> відшукати загублених
            </p>
          </StyledListItem>
          <StyledListItem>
            <StyledSubTitle>Прагнення</StyledSubTitle>
            <p>
              Служіння, через яке люди <br />
              стають зрілими та <br /> підготовленими, що б брати <br />
              відповідальність за місію
            </p>
          </StyledListItem>
          <StyledListItem>
            <StyledSubTitle>Цінності</StyledSubTitle>
            <ul>
              <li>Місія</li>
              <li>Турбота</li>
              <li>Учнівство</li>
              <li>Євангелізація</li>
            </ul>
          </StyledListItem>
        </StyledList>
      </Container>
    </StyledSection>
  );
};

export default AboutUs;
