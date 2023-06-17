import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skillsCon">
        <div id="skillText">
          <h4 className="text-light">
            <i className="fa-sharp fa-solid fa-code"></i> My Skills
          </h4>

          <p className="text-light text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum,
            officiis, quaerat rem libero hic possimus obcaecati perspiciatis
            alias labore eaque temporibus tempore similique? Nulla adipisci
            ullam quam atque maxime!
          </p>
        </div>

        <div id="skills">
          <div id="skillsCardCon">
            <div className="skillCard">
              <i className="fa-brands fa-html5"></i>

              <h5>HTML 5</h5>
            </div>

            <div className="skillCard">
              <i className="fa-brands fa-css3-alt"></i>

              <h5>CSS 3</h5>
            </div>

            <div className="skillCard">
              <i className="fa-brands fa-bootstrap"></i>

              <h5>BootStrap 5</h5>
            </div>

            <div className="skillCard">
              <i className="fa-brands fa-square-js"></i>

              <h5>JavaScript</h5>
            </div>

            <div className="skillCard">
              <i className="fa-brands fa-react"></i>

              <h5>React JS</h5>
            </div>

            <div className="skillCard">
              <i className="fa-brands fa-sass"></i>

              <h5>SaaS</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
