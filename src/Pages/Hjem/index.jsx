import * as S from "./index.styles";
import AP1 from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import AP2 from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import AP3 from "../../Images/Screenshot 2025-11-14 123406-min.jpg"
import holidayhouse from "../../Images/holiday_house.jpg"
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
              <Link to={"/src/Pages/Apartment2"}>
    <div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

        <img class="rounded-t-lg" src={AP2} alt="" />

    <div class="p-5">
        <a href="../../Pages/Apartment2">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>

        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
      </a>
    </div>
</div>
    </Link>
        <Link to="/src/Pages/Apartment1">
        <div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <img class="rounded-t-lg" src={AP1} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
    </div>
</div>
   </Link>
               <Link to="/src/Pages/Apartment1">
        <div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <img class="rounded-t-lg" src={holidayhouse} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
    </div>
</div>
   </Link>
        <Link to="/src/Pages/Apartment3">
<div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

        <img class="rounded-t-lg" src={AP3} alt="" />

    <div class="p-5">
        <a href="../../Pages/Apartment3">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
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
