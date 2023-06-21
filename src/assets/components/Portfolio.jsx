import React from "react";

const Portfolio = () => {

  const portfolio = [
    {
      title: "PiggyVest Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/piggyvest__1_.png?updatedAt=1687089425360",
      gitLink: "https://github.com/doiayokanmi/piggyVest",
      liveLink: "https://piggy-vest.vercel.app/"
    },

    {
      title: "E-Commerce Web App",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/jumiaClone__1_.png?updatedAt=1687089426702",
      gitLink: "https://github.com/doiayokanmi/JumiaClone",
      liveLink: "https://jumia-clone-beta.vercel.app"
    },

    {
      title: "Javascript E-Learning for Beginner",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/javascript_tutorial__1_.png?updatedAt=1687089426544",
      gitLink: "https://github.com/doiayokanmi/Js-Documentation",
      liveLink: "https://jsdocd.netlify.app"
    },

    {
      title: "SalesForce Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/salesforce__1_.png?updatedAt=1687089496311",
      gitLink: "https://github.com/doiayokanmi/salesforce",
      liveLink: "https://salesforced.netlify.app"
    },

    {
      title: "NTI Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/nti__1_.png?updatedAt=1687089422429",
      gitLink: "https://github.com/doiayokanmi/nti",
      liveLink: "https://ntid.netlify.app"
    },

    {
      title: "Tribute Landing Page",
      image: "https://ik.imagekit.io/lgpltatcf/portfolio/tribute__1_.png?updatedAt=1687089427234",
      gitLink: "https://github.com/doiayokanmi/FreeCodeCamp-Portfolio-Project",
      liveLink: "https://tribute-freecodecampd.netlify.app"
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
                    <a href={item.gitLink} target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-code"></i>
                    </a>

                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
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
        <a href="https://github.com/doiayokanmi?tab=repositories" id="seeMoreBtn" target="_blank" rel="noopener noreferrer">See More</a>
        </div>

      </section>
    </>
  );
};

export default Portfolio;
