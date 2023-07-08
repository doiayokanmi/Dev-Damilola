import React from "react";

const CustomersReview = () => {
  const services = [
    {
      icon: "image/software.png",
      title: "Web Design",
      desc: "Web design is the creation of visually appealing and user-friendly websites, combining aesthetics and functionality for engaging online experiences.",
    },
    {
      icon: "image/dev.png",
      title: "Web App Development",
      desc: "Web app development is the process of creating and building functional applications that operate on the web platform.",
    },
    {
      icon: "image/bug.png",
      title: "Bug Fixing",
      desc: "Bug fixing involves identifying and resolving software defects, glitches, or errors to improve the functionality and performance of an application.",
    },
    {
      icon: "image/technical.png",
      title: "Technical Writing",
      desc: "Technical writing is the practice of creating clear and concise documentation that effectively communicates complex information or instructions to users.",
    },
  ];

  const serviceParagraph = [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "Integration of third party services such as Firebase/ AWS / Digital Ocean",
  ];
  return (
    <>
      <section id="services">
        <div id="servicesText">
          <h3 className="mb-4">Our services</h3>

          <p className="mb-5">
            I designs and implements the user interface of a website or
            application, focusing on visual elements, responsiveness, and user
            experience and utilize REACT JS, Bootstrap, SCSS, HTML, CSS, and
            JavaScript to create interactive and engaging interfaces that
            enhance usability and accessibility for the end users.
          </p>

          {
            serviceParagraph.map((par, index)=>(
              <p key={index}>{par}</p>
            ))
          }

          <a
            href="https://www.upwork.com/freelancers/~017769b81dace03e7e"
            target="_blank"
            rel="noopener noreferrer"
            id="seeMoreBtn"
          >
            Hire Me
          </a>
        </div>

        <div id="servicesList">
          {services.map((items, index) => (
            <div id="servicesCard" key={index}>
              <img src={items.icon} alt="" />
              <h4>{items.title}</h4>
              <p>{items.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomersReview;
