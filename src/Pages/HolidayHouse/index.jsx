import * as S from "./index.styles";
import { Link } from "react-router-dom";
import AP1 from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import AP2 from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import AP3 from "../../Images/Screenshot 2025-11-14 123406-min.jpg"

export default function HolidayHouse() {
  return (
<S.OuterDiv>
      <S.TextContent>
<h1 className="golos-text underline text-color text-2xl pb-5">The Holiday House – Room for the Whole Family</h1>
        <div>
          <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">
Our dedicated Holiday House is designed for larger groups who value comfort. With 150 m² of living space and 4 double bedrooms, this house comfortably accommodates up to 8 guests.</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">The house features a large, spacious bathroom and a dedicated washing room, making longer stays convenient. It is the perfect place to gather the whole family in the living area for games or movies after a day out in nature. Outside, you can enjoy BBQ and dining on the terrace.</p>
        </div>
        <div>
          <p className="tiktok-sans-text underline text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-8">
            Key Features:</p>
            <p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Capacity: 8 guests (4 double bedrooms)</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Size: 150 m² </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Sanitary: Large bathroom. </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Amenities: Laundry room, parking, TV, WiFi, fully equipped kitchen, terrace.</p>
          </p>
        </div>
        <div className="pt-8">
          <p className="pt-8 golos-text underline text-color text-2xl pb-5 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">For booking      
        </p>
        <a
          className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1"
          href="mailto:morten@morco.no"
        >
          morten@morco.no
        </a>
        <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 mt-2">+4790948997</p>
        </div>
                  <Link to="../">
                  <button
                    type="button"
                    className="pt-40 mb-10 tiktok-sans-text text-color dark:text-gray-900 hover:text-gray-950 text-lg"
                  >
                    Back to homepage
                  </button>
                </Link>
      </S.TextContent>
      <S.ImageContent>
        <img
          alt="AP1"
          src={AP1}
          className="pb-5 sm:w-32 md:w-32 lg:w-48"
          height={200}
          width={200}
        ></img>
        <img
          alt="AP2"
          src={AP2}
          className=" pb-5 sm:w-32 md:w-32 lg:w-48"
          height={200}
          width={200}
        ></img>
        <img
          alt="AP3"
          src={AP3}
          className="pb-5 sm:w-32 md:w-32 lg:w-48"
          height={200}
          width={200}
        ></img>
      </S.ImageContent>
    </S.OuterDiv>
  );
}
