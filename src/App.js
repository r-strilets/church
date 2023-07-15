import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import ChurchDefinition from "./components/ChurchDefinition/ChurchDefinition";
import AboutUs from "./components/AboutUs/AboutUs";
import OurServings from "./components/OurServings/OurServings";
import Footer from "./components/Footer/Footer.styled";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ChurchDefinition />
      <AboutUs />
      <OurServings />
      <Footer />
    </>
  );
}

export default App;
