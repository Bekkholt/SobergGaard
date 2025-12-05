import * as S from "./index.styles";

export default function Apartment1() {
  return (
    <S.OuterDiv>
      <S.TextContent>
        <h1 className="text-color jura-text text-2xl pb-5">Apartment 1</h1>
        <div>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">
            Tekst
          </p>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 pb-6 px-1">
            Tekst
          </p>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 pb-1 px-1">
            Tekst
          </p>
          <p className="text-color karla-text text-l sm:w-32 md:w-2/4 lg:w-2/4 px-1">
            Tekst
          </p>
        </div>
      </S.TextContent>
      <S.ImageContent>
      </S.ImageContent>
    </S.OuterDiv>
  );
}
