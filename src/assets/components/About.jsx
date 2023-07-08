import React from "react";

const About = () => {
  let myPics = "image/myPic2.png";
  return (
    <>
      <section id="about">
        <div id="innerAbout">
          <img src={myPics} alt="" className="img-fluid" />

          <div id="aboutText">
            <h3 className="mb-4">I&#39;m A Professional Full Stack Developer</h3>

            <p className="mb-5">
            Ibrahim Damilola is passionate Full Stack Developer with over 3 years experiences. I am skilled in JavaScript / React JS / Node JS / Mongo DB / Express JS, Bootstrap, SaaS, HTML, CSS, and Tailwind CSS. With my skills, I have design and develop some user-friendly and responsive web applications, I bring designs to life with clean, responsive and documented code. Collaborative and dedicated to delivering exceptional user experiences, I stay updated with industry trends to create visually stunning websites that make a lasting impact.
            </p>

            <div>
              <a href="https://wa.me/+2348057896279" className="linkBtn me-2">Contact Me</a>
              
              <a href="" className="linkBtn" id="downloadBtn">Download CV</a>
            </div>
          </div>

          <div id="social">
          <a href="https://www.twitter.com/doiayokanmi" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="https://www.github.com/doiayokanmi" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-dhikirullahi-3747181a6/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
