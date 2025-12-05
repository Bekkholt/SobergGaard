import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
// import Header from "../Header";
import Footer from "../Footer";
import Hjem from "../../Pages/Hjem";
import Apartment1 from "../../Pages/Apartment1";
import Apartment3 from "../../Pages/Apartment3";
import TimerOgPriser from "../../Pages/TimerOgPriser";
import Apartment2 from "../../Pages/Apartment2";

export default function Layout() {
  return (
    <S.Pagewrapper>
      {/* <Header /> */}
      <Routes>
        <Route index element={<Hjem />} />
        <Route path="/Pages/Om" element={<Apartment1 />} />
        <Route path="/Pages/FAQ" element={<Apartment3 />} />
        <Route path="/Pages/TimerOgPriser" element={<TimerOgPriser />} />
        <Route path="/Pages/BestillTime" element={<Apartment2 />} />
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
