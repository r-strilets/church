// import { Container } from "../../utils/GlobalStyle";
import { Section } from "../../utils/GlobalStyle";
import {
  StyledContainer,
  LeftBox,
  RightBox,
  FigureBeforeText,
  FigureAfterText,
} from "./ChurchDefinition.styled";

const ChurchDefinition = ({ section2Ref }) => {
  return (
    <Section ref={section2Ref}>
      <StyledContainer>
        <LeftBox>
          <div></div>
          <FigureBeforeText></FigureBeforeText>
          <h2>
            Церква Ісуса <br />
            <span>Назарянина</span>
          </h2>
          <FigureAfterText></FigureAfterText>
        </LeftBox>
        <RightBox>
          <div>
            <b>ЦЕРКВА -</b> це не організація, а люди, які збираються разом як
            Божа сім'я. Найголовніше, що ми робимо як церква, спрямоване на те,
            щоб люди відновили стосунки та примирилися з Богом через віру в
            Ісуса Христа. Найбільш важлива частина нашого зібрання - це та
            частина, коли ми даємо людям можливість примиритися з Богом. Тому що
            життя, яке Господь приготував для нас, перевершує будь-яке наше
            уявлення. І тільки коли ми живемо заради справи Христа, наше життя
            дійсно стає таким, яким його задумав Господь.
            <p style={{ marginTop: "50px" }}>
              <b>
                Чекаємо Вас щонеділі о 10:00 за адресою: м.Вінниця, вул.Князів
                Коріатовичів, 10
              </b>
            </p>
          </div>
        </RightBox>
      </StyledContainer>
    </Section>
  );
};

export default ChurchDefinition;
