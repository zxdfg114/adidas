import React from "react";
import { Link } from "react-router-dom";

export default function SubMen(props) {
  return (
    <div
      className="sub sub-men"
      onMouseLeave={() => {
        props.setSubMenu(false);
      }}
    >
      <ul className="sub-category">
        <li>
          남성
          <ul>
            <li>
              <Link to={"/"}>신상품</Link>
            </li>
            <li>
              <Link to={"/"}>Y-3 collection</Link>
            </li>
            <li>
              <Link to={"/"}>Impossible is nothing</Link>
            </li>
            <li>
              <Link to={"/"}>SEOUL</Link>
            </li>
            <li>
              <Link to={"/"}>&nbsp;</Link>
            </li>
            <li>
              <Link to={"/"}>Yeezy</Link>
            </li>
            <li>
              <Link to={"/"}>Special Drop</Link>
            </li>
            <li>
              <Link to={"/"}>&nbsp;</Link>
            </li>
            <li>
              <Link to={"/"}>세일</Link>
            </li>
            <li>
              <Link to={"/"}>품절임박</Link>
            </li>
          </ul>
        </li>
        <li>
          신발
          <ul>
            <li>
              <Link to={"/"}>오리지널스</Link>
            </li>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>슬리퍼/샌들</Link>
            </li>
            <li>
              <Link to={"/"}>아웃도어</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>골프</Link>
            </li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
          </ul>
        </li>
        <li>
          의류
          <ul>
            <li>
              <Link to={"/"}>자켓</Link>
            </li>
            <li>
              <Link to={"/"}>축구저지</Link>
            </li>
            <li>
              <Link to={"/"}>후디 / 스웨트셔츠</Link>
            </li>
            <li>
              <Link to={"/"}>티셔츠</Link>
            </li>
            <li>
              <Link to={"/"}>트랙탑</Link>
            </li>
            <li>
              <Link to={"/"}>팬츠</Link>
            </li>
            <li>
              <Link to={"/"}>반바지</Link>
            </li>
            <li>
              <Link to={"/"}>수영복</Link>
            </li>
          </ul>
        </li>
        <li>
          용품
          <ul>
            <li>
              <Link to={"/"}>양말</Link>
            </li>
            <li>
              <Link to={"/"}>모자</Link>
            </li>
            <li>
              <Link to={"/"}>가방</Link>
            </li>
            <li>
              <Link to={"/"}>공</Link>
            </li>
            <li>
              <Link to={"/"}>장갑</Link>
            </li>
            <li>
              <Link to={"/"}>스카프</Link>
            </li>
            <li>
              <Link to={"/"}>헤드폰</Link>
            </li>
          </ul>
        </li>
        <li>
          스포츠
          <ul>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>슬리퍼/샌들</Link>
            </li>
            <li>
              <Link to={"/"}>아웃도어</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>골프</Link>
            </li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
