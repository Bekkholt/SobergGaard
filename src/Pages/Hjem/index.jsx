import * as S from "./index.styles";
import AP1 from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import AP2 from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import AP3 from "../../Images/Screenshot 2025-11-14 123406-min.jpg"
import { Link } from "react-router-dom";

export default function Hjem() {
  return (
    <div className="home-background">
      <S.MiddleContent>
        <p className="golos-text text-color underline underline-offset-4 text-4xl px-5 text-center">
          SØBERG GÅRD
        </p>
        <p className="golos-text text-color text-2xl pb-5 px-5 text-center">
          Your next holiday
        </p>
        <div class="flex items-center flex-wrap">
<div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    <Link to="/src/Pages/Apartment1">
        <img class="rounded-t-lg" src={AP1} alt="" />
   </Link>
    <div class="p-5">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
    </div>
</div>
<div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    <Link to="/src/Pages/Apartment2">
        <img class="rounded-t-lg" src={AP2} alt="" />
    </Link>
    <div class="p-5">
        <a href="../../Pages/Apartment2">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>

        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
      </a>
    </div>
</div>
<div class="m-5 p-2 max-w-sm back-color border border-gray-800 rounded-lg shadow-xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
    <Link to="/src/Pages/Apartment3">
        <img class="rounded-t-lg" src={AP3} alt="" />
    </Link>
    <div class="p-5">
        <a href="../../Pages/Apartment3">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Card goes to page with more info.</p>
      </a>
    </div>
</div>
</div>
      </S.MiddleContent>
      <S.BottomContent>
      </S.BottomContent>
    </div>
  );
}
