import * as S from "./index.styles";
import { Link } from "react-router-dom";
import AP1 from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import AP2 from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import ForpakterboligIMG from "../../Images/Screenshot 2025-11-14 123406-min.jpg"

export default function Forpakterbolig() {
  return (
<S.OuterDiv>
      <S.TextContent>
<h1 className="golos-text underline text-color text-2xl pb-5">Forpakterbolig – For a more Luxury Living</h1>
        <div>
          <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">
Experience Romsdalen in style. "Forpakterbolig" (The Steward’s Lodge) is our premier rental object—a massive 320 m² luxury home spanning two floors, designed for large gatherings or multiple families vacationing together.</p>
          <p className="tiktok-sans-text underline text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-8">
            Ground Floor:</p>
            <p></p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">This floor is the heart of the house, featuring a large kitchen, a dining room, and a sitting room with a TV. Here you will find the luxurious master bedroom complete with a walk-in closet and a private master bathroom, as well as one additional double bedroom, a guest toilet, and a washing room. Step outside to a massive 100 m² terrace, perfect for BBQ dining and social gatherings. It offers a spacious outdoor retreat where you can relax and admire the spectacular views.</p>
        <p className="tiktok-sans-text underline text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-8">
            First Floor:</p>
            <p></p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">The upper level offers a second social zone with another sitting room, a TV area, and two double daybeds. This floor accommodates three double bedrooms, a bathroom, and a separate toilet. From here, you can access two balconies to enjoy the fresh air and views.</p>
        </div>
        <div>
          <p className="tiktok-sans-text underline text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-8">
            Key Features:</p>
            <p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Capacity: High capacity (1 Master Suite + 3 Double Bedrooms + 2 Double Daybeds)</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Size: Approx. 320 m² over 2 floors. </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Sanitary: Master bathroom with a private toilet, 1 shared bathroom, 1 guest toilet, 1 separate toilet. </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Outdoor: 100 m² terrace for BBQ/dining + 2 balconies.</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Amenities: 2 sitting rooms, 2 balconies, large kitchen, dining room, washing room, walk-in closet, TV, WiFi, large parking lot.</p>

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
          alt="ForpakterboligIMG"
          src={ForpakterboligIMG}
          className="pb-5 sm:w-32 md:w-32 lg:w-48"
          height={200}
          width={200}
        ></img>
      </S.ImageContent>
    </S.OuterDiv>
  );
}
