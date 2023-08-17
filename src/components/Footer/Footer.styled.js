import styled from "styled-components";

export const StyledSection = styled.footer`
  background-color: gray;
  color: white;
  padding: 60px 0;
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;
export const ContactsBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactsLink = styled.a`
  color: white;
`;
export const SocialBlock = styled.li`
  position: relative;
  top: -15px;
`;
export const SocialList = styled.ul`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const SocialListItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  color: white;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SupportButton = styled.button`
  background-color: #e9dede;
  border: none;
  width: 150px;
  border-radius: 40px;
  padding: 4px 20px;
  word-wrap: break-word;
`;
