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
          href="mailto:morten@morco.no"
        >
          morten@morco.no
        </a>
        <p className="karla-text text-color text-sm">+4790948997</p>
        <p className="karla-text text-color text-sm">Norvikvegen 429, 6350 Eidsbygda, NORWAY</p>
      </div>
    </S.Footer>
  );
}
