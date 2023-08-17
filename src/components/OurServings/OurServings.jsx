import React from "react";
import { Container } from "../../utils/GlobalStyle";

import {
  StyledSection,
  Title,
  List,
  ListItem,
  SubTitle,
} from "./OurServings.styled";
import listImage from "../../images/event.jpg";

const OurServingsData = [
  {
    foto: listImage,
    title: "Домашні Групи",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus perferendis optio. Officia vel nulla ea eligendi soluta blanditiis, placeat molestias fugit, alias quia qui, asperiores ipsum atque culpa nisi.",
  },
  {
    foto: listImage,
    title: "Підліткове служіння",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus perferendis optio. Officia vel nulla ea eligendi soluta blanditiis, placeat molestias fugit, alias quia qui, asperiores ipsum atque culpa nisi.",
  },
  {
    foto: listImage,
    title: "Молодіжне служіння",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus perferendis optio. Officia vel nulla ea eligendi soluta blanditiis, placeat molestias fugit, alias quia qui, asperiores ipsum atque culpa nisi.",
  },
  {
    foto: listImage,
    title: "Дитяче служіння",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ducimus perferendis optio. Officia vel nulla ea eligendi soluta blanditiis, placeat molestias fugit, alias quia qui, asperiores ipsum atque culpa nisi.",
  },
];

const OurServings = ({ section4Ref }) => {
  return (
    <StyledSection ref={section4Ref}>
      <Container>
        <Title>Наші служіння</Title>
        <List>
          {OurServingsData.map(({ foto, title, text }, index) => {
            return (
              <ListItem key={`${foto}` + index}>
                <img src={foto} alt="event_image" />
                <div>
                  <SubTitle>{title}</SubTitle>
                  <p>{text}</p>
                </div>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </StyledSection>
  );
};

export default OurServings;
