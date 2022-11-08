import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <img src={`${process.env.PUBLIC_URL}/image/hero.jpg`} alt="" />
      <div className="hero-txt">
        <h1>2022 카타르 월드컵 저지</h1>
        <p>
          골 때리는 그녀들과 함께하는 카타르 월드컵 홈/어웨이 저지. <br />
          THIS IS OUR WORLD CUP
        </p>
        <Link to={"/"}>구매하기</Link>
      </div>
    </div>
  );
}
