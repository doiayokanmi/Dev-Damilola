import React from "react";

const CustomersReview = () => {
  const services = [
    {
      icon: "image/software.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum. Cum, architecto quasi quaerat culpa exercitationem",
    },
    {
      icon: "image/dev.png",
      title: "Web App Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum. Cum, architecto quasi quaerat culpa exercitationem",
    },
    {
      icon: "image/bug.png",
      title: "Bug Fixing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum. Cum, architecto quasi quaerat culpa exercitationem",
    },
    {
      icon: "image/technical.png",
      title: "Technical Writing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nostrum. Cum, architecto quasi quaerat culpa exercitationem",
    }
  ];
  return (
    <>
      <section id="services">
        <div id="servicesText">
          <h3 className="mb-4">Our services</h3>

          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            nostrum. Cum, architecto quasi quaerat culpa exercitationem
            asperiores, praesentium modi sit placeat quod eius. Tenetur maiores
            voluptas similique, quis laudantium accusamus.
          </p>

          <a href="" id="seeMoreBtn">
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
