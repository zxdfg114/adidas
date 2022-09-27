import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Alert, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Detail(props) {
  let [fade, setFade] = useState("");
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let combined = props.product.concat(props.product2).concat(props.DKProduct);
  const getProduct = combined.filter((x) => x.id === parseInt(id));
  useEffect(() => {
    setTimeout(() => {
      setFade("fadein");
    }, 200);
  }, [fade]);

  return (
    <>
      {alert === true ? <Alert>2초안에 사면 할인해줌</Alert> : null}
      <div className={`detail ${fade}`}>
        <figure>
          <img src={getProduct[0].src} alt="" />
        </figure>
        <article>
          <div className="product-info">
            <h2>{getProduct[0].name}</h2>
            <strong>{getProduct[0].price} 원</strong>
            <span>색상</span>
            <div>
              수량
              <Input type="number" valid name="count" />
            </div>
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
    </>
  );
}
