import React from "react";

import { useTheme } from "styled-components";

import WaterSVG from "../../assets/svg/Water.svg";

import * as S from "./styles";

type WaterIndicatorProps = {
  value?: string;
};

export function WaterIndicator({ value = "" }: WaterIndicatorProps) {
  const theme = useTheme();
  return (
    <S.Wrapper>
      <WaterSVG fill={theme.colors.blueDark} />
      <S.Title>{`${value}%`}</S.Title>
    </S.Wrapper>
  );
}
