import "./App.css";

function App() {
  let Logo = "./public/image/logo.png"
  return (
    <>
      <header>
        <nav className="flex">
          <a href="">
          <img className="img-fluid" src= {Logo} alt="" id="brandLogo" />
          </a>

          <div id="navLinksCon">
            <a href="" className="navLink">
              About
            </a>
            <a href="" className="navLink">
              Skills
            </a>
            <a href="" className="navLink">
              Projects
            </a>
            <a href="" className="navLink">
              FAQs
            </a>
            <a href="" className="navLink">
              Contact
            </a>
          </div>

          <div id="socialMedia">
            <a href=""><i className="fa-brands fa-square-twitter"></i></a>
            <a href=""><i className="fa-brands fa-square-github"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
          </div>

          <i className="fa-solid fa-bars" id="mobileMenu"></i>
        </nav>
      </header>
    </>
  );
}

export default App;
