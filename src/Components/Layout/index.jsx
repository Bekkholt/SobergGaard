import * as S from "./index.styles";
import { Routes, Route } from "react-router-dom";
// import Header from "../Header";
import Footer from "../Footer";
import Hjem from "../../Pages/Hjem";
import Apartment1 from "../../Pages/Apartment1";
import Borgstua from "../../Pages/Borgstua";
import Apartment3 from "../../Pages/Apartment3";
import HolidayHouse from "../../Pages/HolidayHouse";
// import TimerOgPriser from "../../Pages/TimerOgPriser";

export default function Layout() {
  return (
    <S.Pagewrapper>
      {/* <Header /> */}
      <Routes>
        <Route index element={<Hjem />} />
        <Route path="/src/Pages/Apartment1" element={<Apartment1/>} />
        <Route path="/src/Pages/Borgstua" element={<Borgstua/>} />
        <Route path="/src/Pages/Apartment3" element={<Apartment3/>} />
        <Route path="/src/Pages/HolidayHouse" element={<HolidayHouse/>} />
        {/* <Route path="/Pages/TimerOgPriser" element={<TimerOgPriser />} /> */}
      </Routes>
      <S.Body />
      <Footer />
    </S.Pagewrapper>
  );
}
