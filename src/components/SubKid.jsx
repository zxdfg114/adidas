import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SubKid(props) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("fadein");
    }, 100);
  }, [fade]);
  return (
    <div
      className={`sub sub-kid ${fade}`}
      onMouseLeave={() => {
        props.setSubMenu(null);
      }}
    >
      <ul className="sub-category">
        <li>
          키즈
          <ul>
            <li>
              <Link to={"/"}>신상품</Link>
            </li>
            <li>
              <Link to={"/"}>&nbsp;</Link>
            </li>
            <li>
              <Link to={"/"}>세일</Link>
            </li>
            <li>
              <Link to={"/"}>품절 임박</Link>
            </li>
          </ul>
        </li>
        <li>
          청소년 (8-16세)
          <ul>
            <li>
              <Link to={"/"}>남아 신발</Link>
            </li>
            <li>
              <Link to={"/"}>여아 신발</Link>
            </li>
            <li>
              <Link to={"/"}>&nbsp;</Link>
            </li>
            <li>
              <Link to={"/"}>남아 의류</Link>
            </li>
            <li>
              <Link to={"/"}>여아 의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
          </ul>
        </li>
        <li>
          어린이 (4-8세)
          <ul>
            <li>
              <Link to={"/"}>남아 신발</Link>
            </li>
            <li>
              <Link to={"/"}>여아 신발</Link>
            </li>
            <li>
              <Link to={"/"}>&nbsp;</Link>
            </li>
            <li>
              <Link to={"/"}>남아 의류</Link>
            </li>
            <li>
              <Link to={"/"}>여아 의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
          </ul>
        </li>
        <li>
          유아
          <ul>
            <li>
              <Link to={"/"}>유아 신발</Link>
            </li>
            <li>
              <Link to={"/"}>유아 의류</Link>
            </li>
          </ul>
        </li>
        <li>
          컬렉션
          <ul>
            <li>
              <Link to={"/"}>레고</Link>
            </li>
            <li>
              <Link to={"/"}>슈퍼스타</Link>
            </li>
            <li>
              <Link to={"/"}>스탠스미스</Link>
            </li>
            <li>
              <Link to={"/"}>코드케이오스</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
