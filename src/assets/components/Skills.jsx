import React from "react";

const Skills = () => {
  return (
    <>
      <section id="skillsCon">
        <div id="skillText">
        <h4>
          <i className="fa-sharp fa-solid fa-code"></i> My Skills
        </h4>

        <p className="text-light text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eum, officiis, quaerat rem libero hic possimus obcaecati perspiciatis alias labore eaque temporibus tempore similique? Nulla adipisci ullam quam atque maxime!
        </p>
        </div>

        <div id="skills">

          <div id="skillsCardCon">
            <div className="skillCard">
            <i className="fa-brands fa-html5"></i>

            <h5>HTML 5</h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>

            <div id="skillProCon">
                <div id="skillPro" style={{width: "96%"}}>96%</div>
            </div>
            </div>
            
            <div className="skillCard">
            <i className="fa-brands fa-css3-alt"></i>

            <h5>CSS 3</h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>

            <div id="skillProCon">
            <div id="skillPro" style={{width: "94%"}}>94%</div>
            </div>
            </div>

            <div className="skillCard">
            <i className="fa-brands fa-bootstrap"></i>

            <h5>BootStrap 5</h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>

            <div id="skillProCon">
            <div id="skillPro" style={{width: "92%"}}>92%</div>
            </div>
            </div>

            <div className="skillCard">
            <i className="fa-brands fa-square-js"></i>

            <h5>JavaScript</h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>

            <div id="skillProCon">
            <div id="skillPro" style={{width: "90%"}}>90%</div>
            </div>
            </div>

            <div className="skillCard">
            <i className="fa-brands fa-react"></i>

            <h5>React JS</h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>

            <div id="skillProCon">
            <div id="skillPro" style={{width: "90%"}}>90%</div>
            </div>
            </div>

            <div className="skillCard">
            <i className="fa-brands fa-sass"></i>

            <h5>SaaS</h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>

            <div id="skillProCon">
            <div id="skillPro" style={{width: "99%"}}>99%</div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
