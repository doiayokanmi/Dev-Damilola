import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 50) {
      setBackgroundColor("var(--greyColor)");
    } else {
      setBackgroundColor("transparent");
    }
  }, [scrollPosition]);

  let Logo = "image/logo.png";
  let myPics = "image/myPic (2).png";
  return (
    <>
      <header>
        <nav
          className="flex"
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <a href="index.html">
            <img className="img-fluid" src={Logo} alt="" id="brandLogo" />
          </a>

          <div id="navLinksCon" className={`${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
            <a href="#about" className="navLink">
              About
            </a>
            <a href="#skillsCon" className="navLink">
              Skills
            </a>
            <a href="#portfolio" className="navLink">
              Projects
            </a>
            <a href="#services" className="navLink">
              Services
            </a>
            <a href="#contact" className="navLink">
              Contact
            </a>

        
            <div id="socialMobile" className="d-lg-none" onClick={toggleNav}>
              <a
                href="https://www.twitter.com/doiayokanmi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a
                href="http://www.github.com/doiayokanmi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahim-dhikirullahi-3747181a6/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div id="socialMedia">
            <a
              href="https://www.twitter.com/doiayokanmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a
              href="http://www.github.com/doiayokanmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-dhikirullahi-3747181a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <i
            className={isNavOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            id="mobileMenu"
            onClick={toggleNav}
          ></i>
        </nav>

        <section id="heroSec">
          <div id="heroText" className="animate__animated animate__backInLeft">
            <h1 className="mb-5">
              <span>Hello!, 👋</span> I am <br /> Damilola Ibrahim
            </h1>

            <h2>
              An Expert in{" "}
              <TypeAnimation
                sequence={[
                  "Front-End",
                  1000,
                  "CSS3",
                  1000,
                  "SASS",
                  1000,
                  "Bootstrap",
                  1000,
                  "MERN Stack",
                  1000,
                  "Express JS",
                  1000,
                  "JavaScript",
                  1000,
                  "React JS",
                  1000,
                  "HTML5",
                  1000,
                ]}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h2>

            <p className="mb-5 text-light">
            A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / React JS / Node JS / Mongo DB / Express JS and some other cool libraries and frameworks.
            </p>

            <a href="https://www.upwork.com/freelancers/~017769b81dace03e7e" target="_blank" rel="noopener noreferrer" className="linkBtn mt-5">
              Hire Me
            </a>
          </div>

          <div id="heroImg" className="animate__animated animate__zoomInRight">
            <img src={myPics} alt="" className="img-fluid float-end" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
