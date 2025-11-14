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
        <Link to="/Pages/BestillTime">
          {/* <button
            type="button"
            className="karla-text text-color bg-orange-700 hover:bg-orange-950 font-medium rounded-lg text-lg px-5 py-2.5 me-2 drop-shadow-2xl"
          >
            Gå inn her
          </button> */}
        </Link>
        <div class="flex items-center">
<div class="m-5 p-2 max-w-sm bg-lime-950 border border-gray-800 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl">
    <a href="../../Pages/Om">
        <img class="rounded-t-lg" src={AP1} alt="" />
    </a>
    <div class="p-5">
        <a href="../../Pages/Om">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        </a>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Image, title and button goes to page with more info.</p>
        <a href="../../Pages/Om" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-color bg-sky-950 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-800 dark:focus:ring-blue-800">
            Button
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="m-5 p-2 max-w-sm bg-lime-950 border border-gray-800 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl">
    <a href="../../Pages/BestillTime">
        <img class="rounded-t-lg" src={AP2} alt="" />
    </a>
    <div class="p-5">
        <a href="../../Pages/BestillTime">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        </a>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Image, title and button goes to page with more info.</p>
        <a href="../../Pages/BestillTime" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-color bg-sky-950 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-800 dark:focus:ring-blue-800">
            Button
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="m-5 p-2 max-w-sm bg-lime-950 border border-gray-800 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl">
    <a href="../../Pages/FAQ">
        <img class="rounded-t-lg" src={AP3} alt="" />
    </a>
    <div class="p-5">
        <a href="../../Pages/FAQ">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-color dark:text-white">Title</h5>
        </a>
        <p class="mb-3 tiktok-sans-text text-color dark:text-gray-900">Card-text goes here. Image, title and button goes to page with more info.</p>
        <a href="../../Pages/FAQ" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-color bg-sky-950 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-green-800 dark:focus:ring-blue-800">
            Button
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>
      </S.MiddleContent>
      {/* <S.BottomContent>
      </S.BottomContent> */}
    </div>
  );
}
