import React from "react";

import { useTheme } from "styled-components";

import FilterSVG from "../../assets/svg/Filter.svg";

import * as S from "./styles";

export function Filter() {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <FilterSVG fill={theme.colors.secundary} />
    </S.Wrapper>
  );
}
