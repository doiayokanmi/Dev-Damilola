import { TypeAnimation } from "react-type-animation";

const Header = () => {
  let Logo = "./public/image/logo.png";
  let myPics = "./public/image/myPic (2).png"
  return (
    <>
      <header>
        <nav className="flex">
          <a href="">
            <img className="img-fluid" src={Logo} alt="" id="brandLogo" />
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
            <a href="">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="" className="linkBtn d-lg-none">
              Hire Me
            </a>
          </div>

          <i className="fa-solid fa-bars" id="mobileMenu"></i>
        </nav>

        <section id="heroSec">
          <div id="heroText">
            <h1 className="mb-5">
              <span>Hello!,</span> I am <br /> Damilola Ibrahim
            </h1>

            <h2>
            Your Favorite {" "}
            <TypeAnimation
              sequence={["Front-End Dev", 1000, "MERN Stack", 1000, "Express JS", 1000, "JavaScript", 1000, "React Developer", 1000]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
            </h2>

            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptatibus officia similique repellendus pariatur,
              vitae reiciendis dolore temporibus nobis aspernatur! Voluptates
              cumque dicta aut culpa suscipit, unde dolorem odit sunt.
            </p>


            <a href="" className="linkBtn p-3 mt-5">
              Hire Me
            </a>
          </div>

          <div id="heroImg">
            <img src={myPics} alt="" className="img-fluid rounded-5 float-end" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
