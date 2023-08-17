import styled from "styled-components";

import { Section } from "../../utils/GlobalStyle";

export const StyledSection = styled(Section)`
  padding: 60px 0;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 60px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  row-gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  width: calc((100% / 2) - 20px);
  height: 300px;
  padding: 10px;
  gap: 15px;
  text-align: center;

  border: 1px solid grey;
  img {
    width: 300px;
  }
`;
export const SubTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;
