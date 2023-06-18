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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              voluptatum vel, rem obcaecati harum odit maxime magnam nemo quia!
              Sit veniam corrupti reiciendis nihil. Eligendi obcaecati quam
              minima vel laboriosam ullam consequuntur modi. Natus, consectetur.
              Esse assumenda quos molestiae provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Temporibus, quod repellendus.
              Veniam, dignissimos hic possimus maiores soluta totam placeat.
              Illo!
            </p>

            <div>
              <a href="" className="linkBtn me-4">Contact Me</a>
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
