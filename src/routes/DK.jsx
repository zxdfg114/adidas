import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function DwgKia(props) {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(props.DKProduct);
  return (
    <div className="dk-wrap">
      <div className="dk-main-bg">
        <p>
          <b>DARE TO BE LEGENDS. 리그의 전설은 우리가 쓴다</b>
          <br />
          &nbsp;새롭게 선보이는 담원 기아 레전드 팩은 글로벌 무대에서 압도적인
          활약을 펼치고 있는 담원 기아 팀에서 영감을 받았습니다. <br />
          &nbsp;편안한 면 소재와 릴랙스 핏 후디의 조합으로 게임에 완벽히 집중할
          수 있는 신개념 e스포츠웨어를 만나보세요.
        </p>
        <img className="main-bg" src="../image/DKBG.jpg" alt="" />
        <img className="player" src="../image/DK001.jpg" alt="" />
        <img className="player mt50" src="../image/DK002.jpg" alt="" />
        <img className="player" src="../image/DK003.jpg" alt="" />
        <img className="player" src="../image/DK004.jpg" alt="" />
        <img className="player mt50" src="../image/DK005.jpg" alt="" />
        <img className="player" src="../image/DK006.jpg" alt="" />
      </div>

      <article>
        <h2>DK Legend Pack</h2>
        <h4>
          <Link to={"/"}>제품 전체보기</Link>
        </h4>
      </article>
      <div className="dk-container">
        {props.DKProduct?.map(function (data, i) {
          return (
            <div className="card">
              <figure
                onClick={() => {
                  let id = props.DKProduct[i].id;
                  navigate(`/detail/${id}`);
                }}
              >
                <img src={props.DKProduct[i].src} alt="" />
                <figcaption>
                  DK{props.DKProduct[i].name}
                  <br />
                </figcaption>
                <span>{props.DKProduct[i].description}</span>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}
