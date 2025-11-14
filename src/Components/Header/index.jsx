import * as S from "./index.styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/">
          <h1 className="golos-text text-color text-3xl pl-2 pr-3 underline underline-offset-4">
            SØBERG GÅRD
          </h1>
        </Link>
        {/* <S.Pages>
          <Link to="../../Pages/Om">
            <p className="jura-text text-color px-2 text-l hover:text-slate-400">
              Side
            </p>
          </Link>
          <Link to="../../Pages/FAQ">
            <p className="jura-text text-color px-2 text-l hover:text-slate-400">
              Side
            </p>
          </Link>
          <Link to="../../Pages/TimerOgPriser">
            <p className="jura-text text-color pl-2 pr-4 text-l hover:text-slate-400">
              Side
            </p>
          </Link>
        </S.Pages> */}
      </S.Header>
    </S.Wrapper>
  );
}
