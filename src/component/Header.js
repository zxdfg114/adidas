import React from "react";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export default function Header(props) {
  const nav = ["MEN", "WOMEN", "KID", "SPORTS", "BRANDS", "SALE"];
  let navigate = useNavigate();
  return (
    <header>
      <div className="header-top">
        <ul>
          <li>
            <Link to={"/"}>가입/로그인/배송지 입력 안내</Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              회원가입 10% 할인 및 생일 쿠폰 / 상시 할인 쿠폰 재발급 관련 안내
            </Link>
          </li>
          <li>
            <Link to={"/"}>택배 서비스 안내 사항</Link>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-left">
          <figure id="logo">
            <Link to={"/"}>
              <img src="../image/LOGO.svg" alt="로고" />
            </Link>
          </figure>
          <nav>
            <ul>
              {nav.map(function (data, i) {
                return (
                  <li
                    key={`unique${i}`}
                    onMouseOver={() => {
                      props.setSubMenu(i);
                    }}
                  >
                    <Link to={"/"}>{nav[i]}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="header-bottom-right">
          <ul className="quick">
            <li>
              <Link to={"/"}>도움말</Link>
            </li>
            <li>
              <Link to={"/Login"}>반품</Link>
            </li>
            <li>
              <Link to={"/Login"}>주문조회</Link>
            </li>
            <li>
              <Link to={"/Login"}>아디클럽 가입하기</Link>
            </li>
          </ul>
          <ul className="util">
            <li>
              <form action="/search" method="/POST">
                <input type="text" name="search" placeholder="검색" />
                <button type="submit">
                  <i className="fa fa-search fa-2x"></i>
                </button>
              </form>
            </li>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              <Link to={"/"}>
                <i className="fa fa-user fa-2x"></i>
              </Link>
            </li>
            <li>
              <Link to={"/Login"}>
                <i className="fa fa-heart fa-2x"></i>
              </Link>
            </li>
            <li>
              <Link to={"/Login"}>
                <i className="fa fa-shopping-basket fa-2x"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
