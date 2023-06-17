import React from "react";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h4>
          <i className="fa-solid fa-folder-open"></i> Previous Project Worked
          On!!!
        </h4>

        <div id="portfolioCon">

          <div id="cardMain">
            <div id="portfolioCard">
              <img
                src="/public/image/piggyvest.png"
                alt=""
                className="img-fluid"
              />

              <div className="portBtn">
                <a href="https://piggy-vest.vercel.app/">
                  <i className="fa-solid fa-code"></i>
                </a>

                <a href="">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
              <p>PiggyVest Landing Page</p>
            </div>

            <div id="portfolioCard">
              <img
                src="/public/image/jumiaClone.png"
                alt=""
                className="img-fluid"
              />

              <div className="portBtn">
                <a href="https://jumia-clone-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-code"></i>
                </a>

                <a href="">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
              <p>E-commerce Website</p>
            </div>

            <div id="portfolioCard">
              <img
                src="/public/image/javascript tutorial.png"
                alt=""
                className="img-fluid"
              />

              <div className="portBtn">
                <a href="">
                  <i className="fa-solid fa-code"></i>
                </a>

                <a href="">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
              <p>Javascript E-Learning Website</p>
            </div>

            <div id="portfolioCard">
              <img
                src="/public/image/salesforce.png"
                alt=""
                className="img-fluid"
              />

              <div className="portBtn">
                <a href="">
                  <i className="fa-solid fa-code"></i>
                </a>

                <a href="">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
              <p>A Clone of SalesForce Website</p>
            </div>
            <div id="portfolioCard">
              <img
                src="/public/image/tribute.png"
                alt=""
                className="img-fluid"
              />

              <div className="portBtn">
                <a href="">
                  <i className="fa-solid fa-code"></i>
                </a>

                <a href="">
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
              <p>A Tribute Landing Page Website</p>
            </div>

            <div id="seeMore"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
