import { useRef } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import ChurchDefinition from "./components/ChurchDefinition/ChurchDefinition";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServings from "./components/OurServings/OurServings";
import Footer from "./components/Footer/Footer";

function App() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();

  const scrollToSection1 = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection2 = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection3 = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection4 = () => {
    section4Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSection5 = () => {
    section5Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToSection1={scrollToSection1}
        scrollToSection2={scrollToSection2}
        scrollToSection3={scrollToSection3}
        scrollToSection4={scrollToSection4}
        scrollToSection5={scrollToSection5}
      />
      <Hero section1Ref={section1Ref} />
      <ChurchDefinition section2Ref={section2Ref} />
      <AboutUs section3Ref={section3Ref} />
      <OurServings section4Ref={section4Ref} />
      <Footer section5Ref={section5Ref} />
    </>
  );
}

export default App;
