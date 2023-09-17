import { Container } from "../../utils/GlobalStyle";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import {
  StyledSection,
  FooterList,
  ContactsBlock,
  ContactsList,
  ContactsLink,
  SocialBlock,
  SocialList,
  SocialListItemLink,
  SupportButton,
} from "./Footer.styled";
import Logo from "../../images/logo_white_transparent.png";
import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";

export const Footer = ({ section5Ref }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <StyledSection ref={section5Ref}>
      <Container>
        <FooterList>
          <li>
            <ContactsBlock>
              <img src={Logo} alt="footer_logo" width={200} height={200} />
              <ContactsList>
                <li>м.Вінниця, вул.Князів Коріатовичів, 10</li>
                <li>
                  <ContactsLink href="mailto:nazarenevn@gmail.com">
                    nazarenevn@gmail.com
                  </ContactsLink>
                </li>
                <li>
                  <ContactsLink href="tel:+380638576515">
                    +380638576515
                  </ContactsLink>
                </li>
              </ContactsList>
            </ContactsBlock>
          </li>
          <SocialBlock>
            <p style={{ textTransform: "uppercase" }}>
              слідкуйте за нами у соц.мережах
            </p>
            <SocialList>
              <li>
                <SocialListItemLink
                  href="https://www.facebook.com/nazarenevn"
                  target="_blank"
                >
                  <FaSquareFacebook fill="white" />
                </SocialListItemLink>
              </li>
              <li>
                <SocialListItemLink
                  href="https://www.instagram.com/jesusnazarene_ch_vn/"
                  target="_blank"
                >
                  <BsInstagram fill="white" />
                </SocialListItemLink>
              </li>
              <li>
                <SocialListItemLink
                  href="https://www.youtube.com/@nazarenevn"
                  target="_blank"
                >
                  <FaYoutube fill="white" />
                </SocialListItemLink>
              </li>
            </SocialList>
          </SocialBlock>
          <li>
            <SupportButton type="button" onClick={openModal}>
              Підтримати служіння
            </SupportButton>
          </li>
        </FooterList>
      </Container>
      {modalIsOpen && <ModalWindow closeModal={closeModal} />}
    </StyledSection>
  );
};

export default Footer;
