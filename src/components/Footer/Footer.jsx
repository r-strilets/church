import { Container } from "../../utils/GlobalStyle";
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

export const Footer = ({ section5Ref }) => {
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
                  <ContactsLink href="tel:+380000000000">
                    +380000000000
                  </ContactsLink>
                </li>
              </ContactsList>
            </ContactsBlock>
          </li>
          <SocialBlock>
            <p>слідкуйте за нами у соц.мережах</p>
            <SocialList>
              <li>
                <SocialListItemLink
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <FaSquareFacebook fill="white" />
                </SocialListItemLink>
              </li>
              <li>
                <SocialListItemLink
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <BsInstagram fill="white" />
                </SocialListItemLink>
              </li>
              <li>
                <SocialListItemLink
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <FaYoutube fill="white" />
                </SocialListItemLink>
              </li>
            </SocialList>
          </SocialBlock>
          <li>
            <SupportButton>Підтримати служіння</SupportButton>
          </li>
        </FooterList>
      </Container>
    </StyledSection>
  );
};

export default Footer;
