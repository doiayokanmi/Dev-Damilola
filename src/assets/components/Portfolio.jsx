import React from "react";

const Portfolio = () => {

  const portfolio = [
    {
      title: "PiggyVest Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/piggyvest.png?updatedAt=1687010696520",
      gitLink: "",
      liveLink: ""
    },

    {
      title: "E-Commerce Web App",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/jumiaClone.png?updatedAt=1687010694115",
      gitLink: "",
      liveLink: ""
    },

    {
      title: "Javascript E-Learning for Beginner",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/javascript_tutorial.png?updatedAt=1687010698641",
      gitLink: "",
      liveLink: ""
    },

    {
      title: "SalesForce Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/salesforce.png?updatedAt=1687010691868",
      gitLink: "",
      liveLink: ""
    },

    {
      title: "NTI Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/nti.png?updatedAt=1687010704181",
      gitLink: "",
      liveLink: ""
    },

    {
      title: "Tribute Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/tribute.png?updatedAt=1687010701260",
      gitLink: "",
      liveLink: ""
    }
  ]

  return (
    <>
      <section id="portfolio">
        <h4>
          <i className="fa-solid fa-folder-open"></i> Previous Project Worked
          On!!!
        </h4>

        <div id="portfolioCon">

          <div id="cardMain">
            {
              portfolio.map((item, index) => (

                <div id="portfolioCard" key={index}>
                  <img
                    src= {item.image}
                    alt=""
                    className="img-fluid"
                  />

                  <div className="portBtn">
                    <a href={item.gitLink}>
                      <i className="fa-solid fa-code"></i>
                    </a>

                    <a href={item.liveLink}>
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                  <p>{item.title}</p>
                </div>
              ))
            }

          </div>
        </div>
        <div className="text-center">
        <a href="" id="seeMoreBtn" >See More</a>
        </div>

      </section>
    </>
  );
};

export default Portfolio;
