import FacebookIcon from "../Icons/Facebook";
import InstagramIcon from "../Icons/Instagram";
import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Footer>
      <S.Icons>
        <a href="https://www.facebook.com/username">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/username/">
          <InstagramIcon />
        </a>
      </S.Icons>
      <div>
        <p className="karla-text text-color text-sm">Website by:</p>
        <a href="https://www.bekkholt.no/">
          <p className="mono-text text-color text-sm">Bekkholt</p>
        </a>
      </div>
      <div>
        <p className="karla-text text-color text-sm">Contact:</p>
        <a
          className="karla-text text-color text-sm"
          href="mailto:mailadresse"
        >
          mailadresse
        </a>
      </div>
    </S.Footer>
  );
}
