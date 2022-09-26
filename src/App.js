// eslint-disable-next-line
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import { useState } from "react";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section4 from "./component/Section4";
import SignUp from "./component/SignUp";
import Section3 from "./component/Section3";
import "./layout.min.css";
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
import SubMen from "./component/SubMen";
import SubWomen from "./component/SubWomen";
import SubKid from "./component/SubKid";
import DwgKia from "./routes/DK";
import Login from "./routes/LogIn";

function App() {
  let [subMenu, setSubMenu] = useState(null);
  let subs = [
    <SubMen subMenu={subMenu} setSubMenu={setSubMenu}></SubMen>,
    <SubWomen subMenu={subMenu} setSubMenu={setSubMenu}></SubWomen>,
    <SubKid subMenu={subMenu} setSubMenu={setSubMenu}></SubKid>,
  ];
  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <div className="App">
      <Header subMenu={subMenu} setSubMenu={setSubMenu}></Header>
      {subMenu === 0 ? subs[0] : null}
      {subMenu ? subs[subMenu] : null}
      <Routes>
        <Route
          path={"/detail/:id"}
          element={
            <Detail
              product={product}
              product2={product2}
              DKProduct={DKProduct}
            ></Detail>
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
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
