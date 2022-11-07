import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import "swiper/css";

export default function Section2(props) {
  let navigate = useNavigate();
  let [product2, setProduct2] = useState(props.product2);
  let { id } = useParams();
  let [ww, setWw] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWw(window.innerWidth);
  });

  const slideView = () => {
    if (ww > 1080) {
      return 6;
    } else if (ww > 780) {
      return 4;
    } else {
      return 2;
    }
  };
  return (
    <section className="section section2">
      <article>
        <h2>신상품</h2>
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
        {product2.map(function (data, i) {
          return (
            <SwiperSlide key={i}>
              <div className="card" key={i}>
                <figure
                  onClick={() => {
                    id = props.product2[i].id;
                    navigate(`/detail/${id}`);
                    console.log(id);
                  }}
                >
                  <img src={props.product2[i].src} alt="" />
                  <figcaption>
                    {props.product2[i].name}
                    <br />
                    <span>{props.product2[i].description}</span>
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
