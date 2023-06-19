import React from "react";

const About = () => {
  let myPics = "image/myPic2.png";
  return (
    <>
      <section id="about">
        <div id="innerAbout">
          <img src={myPics} alt="" className="img-fluid" />

          <div id="aboutText">
            <h3 className="mb-4">I&#39;m A Professional Front-End Developer</h3>

            <p className="mb-5">
            I, Ibrahim Damilola is passionate Front-End Developer with over 3 years experiences. I am skilled in React Js, Bootstrap, SaaS, HTML, CSS, and JavaScript. I bring designs to life with clean, responsive code. Collaborative and dedicated to delivering exceptional user experiences, I stay updated with industry trends to create visually stunning websites that make a lasting impact.
            </p>

            <div>
              <a href="" className="linkBtn me-2">Contact Me</a>
              <a href="" className="linkBtn" id="downloadBtn">Download CV</a>
            </div>
          </div>

          <div id="social">
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
      </section>
    </>
  );
};

export default About;
