import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import { skills } from "../../../constants";

const Skills = () => {
  
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
