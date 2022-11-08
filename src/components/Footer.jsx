import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <ul className="footer-content">
          <li>
            <b>PRODUCT</b>
            <ul>
              <li>
                <Link to={"/"}>신상품</Link>
              </li>
              <li>
                <Link to={"/"}>공식아울렛</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>SPORTS</b>
            <ul>
              <li>
                <Link to={"/"}>러닝</Link>
              </li>
              <li>
                <Link to={"/"}>트레이닝</Link>
              </li>
              <li>
                <Link to={"/"}>아웃도어</Link>
              </li>
              <li>
                <Link to={"/"}>축구</Link>
              </li>
              <li>
                <Link to={"/"}>골프</Link>
              </li>
              <li>
                <Link to={"/"}>요가</Link>
              </li>
              <li>
                <Link to={"/"}>테니스</Link>
              </li>
              <li>
                <Link to={"/"}>농구</Link>
              </li>
              <li>
                <Link to={"/"}>스케이트보딩</Link>
              </li>
              <li>
                <Link to={"/"}>수영</Link>
              </li>
              <li>
                <Link to={"/"}>사이클링</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>COMPANY INFO</b>
            <ul>
              <li>
                <Link to={"/"}>회사소개</Link>
              </li>
              <li>
                <Link to={"/"}>채용정보</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>MEMBERSHIP</b>
            <ul>
              <li>
                <Link to={"/"}>아디클럽</Link>
              </li>
              <li>
                <Link to={"/"}>adidas Runners</Link>
              </li>
            </ul>
          </li>
          <li>
            <b>SUPPORT</b>
            <ul>
              <li>
                <Link to={"/"}>고객센터, 심의수선</Link>
              </li>
              <li>
                <Link to={"/"}>주문/ 배송조회</Link>
              </li>
              <li>
                <Link to={"/"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/"}>구매 이용약관</Link>
              </li>
            </ul>
          </li>
        </ul>

        <address>
          <p>
            아디다스코리아(유) | 서울특별시 서초구 서초대로 74길 4, 삼성생명
            서초타워 23층 (06620) | 대표자: 곽근엽 | 사업자 등록번호:
            214-81-07412 | 통신판매업신고: 2007-서울서초-10391 |
            개인정보관리책임자: 장영태 | 호스팅서비스사업자: 아디다스코리아(유)
            | 고객센터: 1588-8241 | 이메일: service@onlineshop.adidas.co.kr
          </p>
        </address>
      </div>

      <div className="footer-bottom">
        <ul className="notice">
          <li>
            <Link to={"/"}>쿠키 설정</Link>
          </li>
          <li>
            <Link to={"/"}>구매 이용약관</Link>
          </li>
          <li>
            <Link to={"/"}>
              <strong>개인정보 처리방침</strong>
            </Link>
          </li>
          <li>
            <Link to={"/"}>아디클럽 이용약관</Link>
          </li>
          <li>
            <Link to={"/"}>사업자 정보 확인</Link>
          </li>
          <li>
            <Link to={"/"}>공정거래 자율 준수</Link>
          </li>
          <li>
            <Link to={"/"}>채무지급 보증안내</Link>
          </li>
        </ul>
        <small>&copy;유기백 2022 비상업용 Portfolio</small>
      </div>
    </footer>
  );
}

export default Footer;
