import styled from "styled-components";
import { Section } from "../../utils/GlobalStyle";

export const StyledSection = styled(Section)`
  padding: 60px 0;
  background: gray;
  color: #fff;
  text-align: center;
`;

export const StyledTitle = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 40px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  line-height: 1.6;
`;
export const StyledListItem = styled.li`
  width: calc((100% - 40px) / 3);
  height: 400px;
  border: 1px solid #fff;
  padding: 60px;

  font-size: 20px;
`;

export const StyledSubTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 60px;
`;
