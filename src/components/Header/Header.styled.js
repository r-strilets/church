import { styled } from "styled-components";

export const StyledHeader = styled.header`
  padding: 35px 0;
  background-color: #4d4a4a52;
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  li {
    cursor: pointer;
  }
  a {
    font-size: 18px;
    color: inherit;
  }
`;
