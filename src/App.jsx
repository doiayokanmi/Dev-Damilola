import "./App.css";
import About from "./assets/components/About";
import CustomersReview from "./assets/components/CustomersReview";
import Header from "./assets/components/Header";
import Portfolio from "./assets/components/Portfolio";
import Skills from "./assets/components/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <CustomersReview />
    </>
  );
}

export default App;
