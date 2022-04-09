import React from "react";

import WaterSVG from "../../assets/svg/Water.svg";

import * as S from "./styles";

export function WaterIndicator() {
  return (
    <S.Wrapper>
      <WaterSVG />
      <S.Title>80%</S.Title>
    </S.Wrapper>
  );
}
