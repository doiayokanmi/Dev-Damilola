import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const Skills = () => {
  const skills = [
    {
      icon: <i className="fa-brands fa-html5"></i>,
      title: "HTML 5",
    },

    {
      icon: <i className="fa-brands fa-css3-alt"></i>,
      title: "CSS 3",
    },

    {
      icon: <i className="fa-brands fa-square-js"></i>,
      title: "JavaScript",
    },

    {
      icon: <i className="fa-brands fa-bootstrap"></i>,
      title: "Bootstrap",
    },

    {
      icon: <i className="fa-brands fa-react"></i>,
      title: "React Js",
    },

    {
      icon: <i className="fa-brands fa-sass"></i>,
      title: "SaaS",
    },
  ];
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
          <Swiper
            direction={"horizontal"}
            slidesPerView={7}
            spaceBetween={20}
            autoplay={{delay: 3000}}
            mousewheel={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 4
              }, 
              1024: {
                slidesPerView: 7
              }
            }}
            modules={[Mousewheel]}
            className="mySwiper"
          >
            {skills.map((items, index) => (
              <SwiperSlide className="skillCard SwiperSlide" key={index}>
                {items.icon}

                <h5>{items.title}</h5>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Skills;
