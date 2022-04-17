import React from "react";

import { useTheme } from "styled-components";

import WaterSVG from "../../assets/svg/Water.svg";

import * as S from "./styles";

export function WaterIndicator() {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <WaterSVG fill={theme.colors.blueDark} />
      <S.Title>80%</S.Title>
    </S.Wrapper>
  );
}
