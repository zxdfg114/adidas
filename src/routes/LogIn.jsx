import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="wrap">
      <form>
        <h1>로그인</h1>
        <label htmlfor="id">ID</label>
        <input type="text" name="id" placeholder="아이디" required />
        <label htmlfor="password">PW</label>
        <input
          type="password"
          name="password"
          required
          placeholder="패스워드"
        />
        <button type="submit">Login</button>
      </form>
      <div className="user">
        <Link to={"/"}>ID/PW 찾기</Link>
        <Link to={"/"}>회원가입</Link>
        <Link to={"/"}>소셜아이디 로그인</Link>
      </div>
    </div>
  );
}
