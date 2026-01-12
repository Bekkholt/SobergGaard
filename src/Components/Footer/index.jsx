import * as S from "./index.styles";

export default function Footer() {
  return (
    <S.Footer>
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
          mail
        </a>
      </div>
    </S.Footer>
  );
}
