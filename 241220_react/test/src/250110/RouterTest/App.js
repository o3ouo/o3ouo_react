import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/App.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure className="img-box">
            <img src="/250110_router_test/main.cf8ce041.jpeg" alt="main img-1" />
          </figure>
          <div className="text-box">
            <p className="title">
              Yoo <br />
              Toung-kuk
            </p>
            <p>
              산은 내 앞에 있는 것이 아니라 <br /> 내 안에 있는
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="img-box">
            <img src="/250110_router_test/main2.8c4c75a1.jpg" alt="main img-2" />
          </figure>
          <div className="text-box">
            <p className="title">
              Yoo <br />
              Toung-kuk
            </p>
            <p>
              산은 내 앞에 있는 것이 아니라 <br /> 내 안에 있는
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="img-box">
            <img src="/250110_router_test/main3.e5167ff0.jpg" alt="main img-3" />
          </figure>
          <div className="text-box">
            <p className="title">
              Yoo <br />
              Toung-kuk
            </p>
            <p>
              산은 내 앞에 있는 것이 아니라 <br /> 내 안에 있는
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
