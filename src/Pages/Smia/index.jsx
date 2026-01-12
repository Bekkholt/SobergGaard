import * as S from "./index.styles";
import { Link } from "react-router-dom";
import SmiaIMG from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import AP2 from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import AP3 from "../../Images/Screenshot 2025-11-14 123406-min.jpg"

export default function Smia() {
  return (
<S.OuterDiv>
      <S.TextContent>
        <h1 className="golos-text underline text-color text-2xl pb-5">Smia – Spacious Living with a Mountain View</h1>
        <div>
          <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">
Traveling with a larger family or a group of friends? Smia is a medium-sized unit spanning 100 m² over two floors, offering plenty of room for 6+ guests.</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-5">The heart of Smia is the large balcony—the ultimate spot to enjoy your morning coffee or watch the sunset over the mountains. We have also made BBQ facilities available so you can enjoy outdoor dining. This unit is designed for active holidays; you have access to a washing machine in a separate building, allowing you to easily freshen up your hiking gear for the next day. With three double bedrooms and social areas, everyone gets their own space.</p>
        </div>
        <div>
          <p className="tiktok-sans-text underline text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-8">
            Key Features:</p>
            <p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Capacity: 6+ guests (3 double bedrooms)</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Size: 100 m² over 2 floors.</p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Outdoor: Large private balcony with BBQ facilities. </p>
<p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1 p-2">- Amenities: Dishwasher, kitchen, TV, WiFi, parking. Access to washing machine (separate building).</p>
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
          alt="SmiaIMG"
          src={SmiaIMG}
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
