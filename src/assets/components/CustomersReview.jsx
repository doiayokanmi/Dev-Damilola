import React from "react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // Import Swiper core and required modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const CustomersReview = () => {
  return (
    <>
      <div id="customerReview">

      <h3>Customer Reviews</h3>
      <Swiper
        navigation
        slidesPerView={3}
        spaceBetween={40}
        grabCursor={true}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
        l
        </SwiperSlide>
        
        <SwiperSlide>
        pp
        </SwiperSlide>

        <SwiperSlide>
        lll
        </SwiperSlide>
        <SwiperSlide>
        l
        </SwiperSlide>
        
        <SwiperSlide>
        pp
        </SwiperSlide>

        <SwiperSlide>
        lll
        </SwiperSlide>

        
      </Swiper>
      </div>
    </>
  );
};

export default CustomersReview;
