import React from "react";

import { WaterIndicator } from "../WaterIndicator";

import * as S from "./styles";

export function CardMyPlants() {
  return (
    <S.Wrapper>
      <S.TextContainer>
        <S.Title>Orelha de Coelho</S.Title>
        <S.SubTitle>Apelido</S.SubTitle>
        <WaterIndicator />
      </S.TextContainer>
      <S.ImageContainer>
        <S.ImageBox>
          <S.Image source={require("../../assets/PlantaTest.png")} />
        </S.ImageBox>
      </S.ImageContainer>
    </S.Wrapper>
  );
}
