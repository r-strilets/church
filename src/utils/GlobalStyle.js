import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
::after,
::before {
  box-sizing: border-box;
}

html {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}


body {
    margin: 0;
    position: relative;
  
  &::-webkit-scrollbar-track {
   
  }
  &::-webkit-scrollbar-thumb {
   
  }
}

ul, ol{
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
a{
    text-decoration:none;
}

h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}

table {
  text-indent: 0;
  border-color: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  cursor: pointer;
  border: none;
}
`;

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 18px;
    padding-right: 18px;
    width: 1280px;
  }
`;

export const Section = styled.section`
  /* min-height: 97vh; */
  /* padding-top: 42px; */
  /* padding-bottom: 100px; */

  @media screen and (min-width: 768px) {
    /* padding-top: 88px; */
  }
  @media screen and (min-width: 1280px) {
    /* padding-top: 60px; */
  }
`;
