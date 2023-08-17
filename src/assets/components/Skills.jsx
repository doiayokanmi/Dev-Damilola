import React from "react";
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const Skills = () => {

const skills = [
  {
    icon: <i><SiNextdotjs style='margin: 0;' /></i>,
    title: "Next JS",
  },
  {
    icon: <i><SiTypescript style='margin: 0;' /></i>,
    title: "TypeScript",
  },
  {
    icon: <i className="fa-brands fa-node"></i>,
    title: "Node JS",
  },
  {
    icon: <i className="fa-brands fa-react"></i>,
    title: "React Js",
  },
  {
    icon: <i className="fa-solid fa-database"></i>,
    title: "Mongo DB",
  },
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
          The skills utilized to manifest the design goes beyond the technical skills but also include creativity, technical expertise, problem-solving, attention to detail, effective communication, adaptability, collaboration, and a keen understanding of user experience and aesthetics.
          </p>
        </div>

        <div id="skills">
          <Swiper
            direction={"horizontal"}
            spaceBetween={20}
            autoplay={{delay: 3000}}
            mousewheel={true}
            loop={true}
            pagination={true}
            breakpoints={{
              320: {
                slidesPerView: 4
              }, 
              680: {
                slidesPerView: 5
              },
              1024: {
                slidesPerView: 7
              }
            }}
            modules={[Mousewheel, Pagination]}
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
