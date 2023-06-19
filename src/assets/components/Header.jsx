import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";

const Header = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

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

            <div id="socialMobile" className="d-lg-none">
              <a href="">
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-square-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
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
          </div>

          <i className="fa-solid fa-bars" id="mobileMenu"></i>
        </nav>

        <section id="heroSec">
          <div id="heroText" className="animate__animated animate__backInLeft">
            <h1 className="mb-5">
              <span>Hello!,</span> I am <br /> Damilola Ibrahim
            </h1>

            <h2>
              An Expert in{" "}
              <TypeAnimation
                sequence={[
                  "Front-End",
                  1000,
                  "CSS3",
                  1000,
                  "SaaS",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores voluptatibus officia similique repellendus pariatur,
              vitae reiciendis dolore temporibus nobis aspernatur! Voluptates
              cumque dicta aut culpa suscipit, unde dolorem odit sunt.
            </p>

            <a href="" className="linkBtn mt-5">
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
