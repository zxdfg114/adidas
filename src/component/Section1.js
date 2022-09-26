import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

export default function Section1(props) {
  let [product, setProduct] = useState(props.product);
  let navigate = useNavigate();
  return (
    <section className="section section1">
      <article>
        <h2>TRANING WEAR</h2>
        <p>운동 루틴에 새로운 에너지를 불어넣는 트레이닝 웨어</p>
      </article>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={6}
      >
        {props.product.map(function (data, i) {
          return (
            <SwiperSlide key={i}>
              <div className="card" key={`uniqueSec1${i}`}>
                <figure
                  onClick={() => {
                    let id = props.product[i].id;
                    navigate(`/detail/${id}`);
                    console.log(id);
                  }}
                >
                  <img src={props.product[i].src} alt="" />
                  <figcaption>
                    {props.product[i].name}
                    <br />
                    <span>{props.product[i].description}</span>
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
