import "./App.css";
import "./phone.css"
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Header from "./assets/components/Header";
import Portfolio from "./assets/components/Portfolio";
import Skills from "./assets/components/Skills";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
