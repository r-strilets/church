import { styled } from "styled-components";
import { Container } from "../../utils/GlobalStyle";

export const StyledContainer = styled(Container)`
  display: flex;
  gap: 60px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const LeftBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 600px;
  -webkit-box-shadow: 2px 4px 14px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 4px 14px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 4px 14px 5px rgba(0, 0, 0, 0.75);
  div {
    width: 70%;
    height: 70%;
    background-color: #000;
    border-radius: 50%;
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 40px;
    color: #fff;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    span {
      display: block;
      font-size: 20px;
      margin-left: 50%;
    }
  }
`;

export const FigureBeforeText = styled.span`
  display: block;
  position: absolute;
  top: 26%;
  right: 32%;
  width: 99px;
  height: 110px;
  border-left: 17px solid #fff;
  border-bottom: 17px solid #fff;
  &::before {
    content: "";
    display: block;
    position: relative;
    background-color: #fff;
    width: 17px;
    height: 17px;
    top: -17px;
    left: -17px;
    border-top-right-radius: 100%;
  }
`;

export const FigureAfterText = styled.span`
  display: block;
  position: absolute;
  top: 53%;
  right: 52%;
  width: 90px;
  height: 155px;
  border-top: 17px solid #fff;
  border-right: 17px solid #fff;
  &::after {
    content: "";
    display: block;
    position: relative;
    background-color: #fff;
    width: 17px;
    height: 17px;
    top: 100%;
    left: 100%;
    border-bottom-right-radius: 100%;
  }
`;

export const RightBox = styled.div`
  width: 50%;
  height: 600px;
  padding-top: 40px;
  text-align: center;
  font-size: 20px;
  line-height: 1.8;
  padding-left: 40px;
  padding-right: 40px;
`;
