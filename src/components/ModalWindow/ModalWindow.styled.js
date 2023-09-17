import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #000000c7;
`;
export const ModalBox = styled.div`
  position: relative;
  width: 70%;
  height: 70%;
  max-height: calc(100vh - 50px);
  background-color: white;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  padding: 20px 16px 44px 16px;
  border: 1px solid #6c6c6c;
  border-radius: 20px;
  z-index: 9999999998;
  margin: 0 auto;
  margin-top: 140px;
`;
export const ModalCloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
export const ModalTitle = styled.h3`
  text-align: center;
  font-size: 35px;
  padding: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0 30px;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: calc(100% / 2);
  text-align: center;
  padding: 20px;
`;

export const ListItemTitle = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px;
`;
export const ListItemText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
