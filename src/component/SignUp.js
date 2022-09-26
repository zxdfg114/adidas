import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export default function SignUp() {
  return (
    <article className="signup">
      <h2>지금 멤버십 가입하고 10% 할인혜택 받으세요 </h2>
      <Link to={"/Login"}>회원가입</Link>
      <span>* 이메일 수신동의자에 한해 10% 할인쿠폰 발급</span>
    </article>
  );
}
