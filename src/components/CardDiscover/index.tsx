import React from "react";

import * as S from "./styles";

export function CardDiscover() {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.Image source={require("../../assets/PlantaTest.png")} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Title>Orelha de Coelho</S.Title>
        <S.SubTitle>Opuntia microdasys</S.SubTitle>
      </S.TextContainer>
    </S.Wrapper>
  );
}
