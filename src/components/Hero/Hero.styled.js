import { styled } from "styled-components";
import { Section } from "../../utils/GlobalStyle";

import hero from "../../images/hero.jpg";

export const HeroSection = styled(Section)`
  position: relative;
  height: calc(100vh - 98px);
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
`;
