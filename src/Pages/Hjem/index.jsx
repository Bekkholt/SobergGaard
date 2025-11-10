import * as S from "./index.styles";
import PGA from "../../Images/Logo_CMYK_PGA_of_Norway.jpg";
import { Link } from "react-router-dom";

export default function Hjem() {
  return (
    <div>
      <S.MiddleContent>
        <p className="golos-text text-color text-4xl px-5 text-center">
          TITTEL
        </p>
        <p className="golos-text text-color text-4xl pb-5 px-5 text-center">
          Tekst/Slagord
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
<div class="m-5 p-2 max-w-sm bg-orange-900 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="../../Pages/Om">
        <img class="rounded-t-lg" src={PGA} alt="" />
    </a>
    <div class="p-5">
        <a href="../../Pages/Om">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-gray-900 dark:text-white">Tittel</h5>
        </a>
        <p class="mb-3 tiktok-sans-text text-gray-900 dark:text-gray-900">Tekst som hører til på kortet. Bilde,tittel og knapp kan trykkes på for mer informasjon.</p>
        <a href="../../Pages/Om" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-950 dark:focus:ring-blue-800">
            Gå inn her
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="m-5 p-2 max-w-sm bg-orange-900 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="../../Pages/BestillTime">
        <img class="rounded-t-lg" src={PGA} alt="" />
    </a>
    <div class="p-5">
        <a href="../../Pages/BestillTime">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-gray-900 dark:text-white">Tittel</h5>
        </a>
        <p class="mb-3 tiktok-sans-text text-gray-900 dark:text-gray-900">Tekst som hører til på kortet. Bilde, tittel og knapp kan trykkes på for mer informasjon.</p>
        <a href="../../Pages/BestillTime" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-950 dark:focus:ring-blue-800">
            Gå inn her
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div class="m-5 p-2 max-w-sm bg-orange-900 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="../../Pages/FAQ">
        <img class="rounded-t-lg" src={PGA} alt="" />
    </a>
    <div class="p-5">
        <a href="../../Pages/FAQ">
            <h5 class="mb-2 text-2xl tiktok-sans-text-bold tracking-tight text-gray-900 dark:text-white">Tittel</h5>
        </a>
        <p class="mb-3 tiktok-sans-text text-gray-900 dark:text-gray-900">Tekst som hører til på kortet. Bilde, tittel og knapp kan trykkes på for mer informasjon.</p>
        <a href="../../Pages/FAQ" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-950 dark:focus:ring-blue-800">
            Gå inn her
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>


<div class="m-5 p-2 max-w-sm bg-orange-900 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={PGA} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="tiktok-sans-text tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        {/* <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div> */}
        <div class="flex items-center justify-between">
            <span class="tiktok-sans-text-bold text-gray-900 dark:text-white">Pris kr</span>
            <a href="#" class="text-white bg-orange-700 hover:bg-orange-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</a>
        </div>
    </div>
</div>

      </S.MiddleContent>
      <S.BottomContent>
      </S.BottomContent>
    </div>
  );
}
