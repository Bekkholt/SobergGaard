import * as S from "./index.styles";
import SmiaIMG from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import BorgstuaIMG from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import ForpakterboligIMG from "../../Images/Screenshot 2025-11-14 123406-min.jpg"
import HolidayhouseIMG from "../../Images/holiday_house.jpg"
import { Link } from "react-router-dom";

export default function Hjem() {
  return (
    <div className="home-background">
      <S.MiddleContent>
        <p className="golos-text text-color underline underline-offset-4 text-4xl px-5 text-center">
          SØBERG NORGE
        </p>
        <p className="golos-text text-color text-2xl pb-5 px-5 text-center">
          Your next holiday
        </p>
        <S.Flex>
              <Link to={"/src/Pages/Borgstua"}>
    <div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

        <img class="rounded-t-lg" src={BorgstuaIMG} alt="BorgstuaIMG" />

    <div class="p-5">
        <a href="../../Pages/Borgstua">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Borgstua</h5>

        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Cabin with 2 double bedrooms, perfect for a family of 4, 70 m2.</p>
      </a>
    </div>
</div>
    </Link>
              <Link to="/src/Pages/Smia">
    <div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

        <img class="rounded-t-lg" src={SmiaIMG} alt="SmiaIMG" />

    <div class="p-5">
        <a href="../../Pages/Smia">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Smia</h5>

        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Medium sized, 3 double bedrooms for a family of 6+ persons with 2 floors. 100 m2.</p>
      </a>
    </div>
</div>
    </Link>
               <Link to="/src/Pages/HolidayHouse">
        <div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <img class="rounded-t-lg" src={HolidayhouseIMG} alt="HolidayHouseIMG" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Holiday House</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Big holiday house, 4 double bedrooms for a family of 8 people. 150 m2.</p>
    </div>
</div>
   </Link>
        <Link to="/src/Pages/Forpakterbolig">
<div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

        <img class="rounded-t-lg" src={ForpakterboligIMG} alt="ForpakterboligIMG" />

    <div class="p-5">
        <a href="../../Pages/Forpakterbolig">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Forpakterbolig</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Luxury 1st class with 4 double bedrooms + 2 double daybeds, 2 big sitting rooms. 
ca. 320 m2.</p>
      </a>
    </div>
</div>
    </Link>
</S.Flex>
      </S.MiddleContent>
      <S.BottomContent>
      </S.BottomContent>
    </div>
  );
}
