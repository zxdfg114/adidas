import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { product3 } from "../data";
import { useNavigate } from "react-router-dom";

export default function Section3(props) {
  let navigate = useNavigate();
  const slideView = () => {
    if (props.ww > 1080) {
      return 6;
    } else if (props.ww > 780) {
      return 4;
    } else {
      return 2;
    }
  };
  return (
    <section className="section section3">
      <article>
        <h2>SPECIAL</h2>
        <h4>
          <a href="/">제품 전체보기</a>
        </h4>
      </article>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={slideView()}
      >
        {product3.map(function (data, i) {
          return (
            <SwiperSlide key={i}>
              <div className="card" key={i}>
                <figure
                  onClick={() => {
                    navigate("/DwgKia");
                  }}
                >
                  <img src={product3[i].src} alt="" />
                  <figcaption>
                    {product3[i].name}
                    <br />
                    <span>{product3[i].description}</span>
                  </figcaption>
                </figure>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
