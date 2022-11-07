// eslint-disable-next-line
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import SignUp from "./components/SignUp";
import Section3 from "./components/Section3";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import { DKProduct, product, product2, product3 } from "./data";
import Detail from "./routes/detail";
import SubMen from "./components/SubMen";
import SubWomen from "./components/SubWomen";
import SubKid from "./components/SubKid";
import DwgKia from "./routes/DK";
import Login from "./routes/LogIn";
import axios from "axios";
import AxiosGet from "./components/AxiosGet.jsx";
import Cart from "./routes/Cart";
import Notice from "./components/Notice";
import { createContext } from "react";
import "./css/layout.min.css";

let Context1 = createContext();

function App() {
  let [notice, setNotice] = useState(false);
  let [axiosData, setAxiosData] = useState(null);
  let [axiosCount, setAxiosCount] = useState(0);
  let [axiosGet, setAxiosGet] = useState(false);
  let [subMenu, setSubMenu] = useState(null);
  let [재고] = useState(10, 11, 12);
  let subs = [
    <SubMen subMenu={subMenu} setSubMenu={setSubMenu}></SubMen>,
    <SubWomen subMenu={subMenu} setSubMenu={setSubMenu}></SubWomen>,
    <SubKid subMenu={subMenu} setSubMenu={setSubMenu}></SubKid>,
  ];
  let navigate = useNavigate();
  return (
    <div className="App">
      <Header subMenu={subMenu} setSubMenu={setSubMenu}></Header>
      {subMenu === 0 ? subs[0] : null}
      {subMenu ? subs[subMenu] : null}
      <Routes>
        <Route
          path={"/detail/:id"}
          element={
            <Context1.Provider value={{ 재고 }}>
              <Detail
                product={product}
                product2={product2}
                DKProduct={DKProduct}
              ></Detail>
            </Context1.Provider>
          }
        />
        <Route
          path="/"
          element={
            <main>
              <Hero></Hero>
              <Section1 product={product}></Section1>
              <Section2 product2={product2}></Section2>
              <Section3 product3={product3}></Section3>
              <Section4></Section4>
              <SignUp></SignUp>
            </main>
          }
        />
        <Route path="*" element={<h1>준비 중 입니다</h1>} />
        <Route
          path="/DwgKia"
          element={
            <>
              <DwgKia DKProduct={DKProduct} />
              <SignUp />
            </>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
