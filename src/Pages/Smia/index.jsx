import * as S from "./index.styles";
import { Link } from "react-router-dom";
import SmiaIMG from "../../Images/Screenshot 2025-11-14 104106-min.jpg"
import AP2 from "../../Images/Screenshot 2025-11-14 104126-min.jpg"
import AP3 from "../../Images/Screenshot 2025-11-14 123406-min.jpg"

export default function Smia() {
  return (
<S.OuterDiv>
      <S.TextContent>
        <h1 className="golos-text underline text-color text-2xl pb-5">Smia</h1>
        <div>
          <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et quidem, voluptatem tenetur vitae enim sint laborum voluptatibus quod qui voluptatum beatae inventore odio, blanditiis ab. Aspernatur officiis debitis vitae.
          </p>
        </div>
        <div>
          <p className="pt-8 golos-text text-color text-2xl pb-5 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">For booking      
        </p>
        <p className="tiktok-sans-text text-color dark:text-gray-900 sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">mail@mail.com          
        </p>
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
