import * as S from "./index.styles";
import { Link } from "react-router-dom";
import AP1 from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import BorgstuaIMG from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import AP3 from "../../Images/Screenshot 2025-11-14 123406-min.jpg"

export default function Borgstua() {
  return (
<S.OuterDiv>
      <S.TextContent>
        <h1 className="golos-text underline text-color text-2xl pb-5">Borgstua - Your Cozy Cabin in Romsdalen</h1>
        <div>
          <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">
Borgstua is the perfect choice for a family of four or a couple looking for an authentic Norwegian cabin experience.</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">This 70 m² cabin offers a warm and intimate atmosphere without sacrificing modern comforts.
It serves as an ideal basecamp for your adventures in Romsdalen. After a day of exploring the fjords and mountains, you can park right outside, cook a delicious meal in the fully equipped kitchen, and relax in front of the TV. We have included high-speed WiFi and a dishwasher to ensure convenience. Guests also have access to BBQ facilities and a washing machine located in a separate building.</p>
        </div>
        <div>
          <p className="tiktok-sans-text underline text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-8">
            Key Features:</p>
            <p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Capacity: 4 guests (2 double bedrooms)</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Size: 70 m² </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Outdoor: BBQ facilities available </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Amenities: Dishwasher, fully equipped kitchen, TV, WiFi, private parking. Access to washing machine (separate building).</p>
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
          src={BorgstuaIMG}
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
