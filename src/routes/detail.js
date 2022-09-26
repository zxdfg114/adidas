import { useParams } from "react-router-dom";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import React from "react";

export default function Detail(props) {
  let { id } = useParams();
  let combined = props.product.concat(props.product2).concat(props.DKProduct);
  console.log(combined);
  const getProduct = combined.filter((x) => x.id === parseInt(id));
  return (
    <div className="detail">
      <figure>
        <img src={getProduct[0].src} alt="" />
      </figure>
      <article>
        <div className="product-info">
          <h2>{getProduct[0].name}</h2>
          <strong>{getProduct[0].price} 원</strong>
          <span>색상</span>
          <Link to={"/"}>장바구니 담기</Link>
        </div>
        <ul>
          <li>
            <Link to={"/"}>배송/반품</Link>
          </li>
          <li>
            <Link to={"/"}>세탁 및 취급시 주의사항</Link>
          </li>
          <li>
            <Link to={"/"}>품질 보증 및 AS 정보</Link>
          </li>
          <li>
            <Link to={"/"}>상품 제조년월 정보</Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
