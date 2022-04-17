import React from "react";

import { useTheme } from "styled-components";

import CalendarIcon from "../../../../assets/svg/Calendar.svg";
import LightIcon from "../../../../assets/svg/Light.svg";
import TemperatureIcon from "../../../../assets/svg/Temperature.svg";
import WaterPropertyIcon from "../../../../assets/svg/WaterProperty.svg";

import * as S from "./styles";

type PropertyBoxProps = {
  title: String;
  type: "calendar" | "light" | "temperature" | "water";
};

export function PropertyBox({ type, title }: PropertyBoxProps) {
  const theme = useTheme();

  return (
    <S.Wrapper>
      {type === "calendar" ? (
        <CalendarIcon fill={theme.colors.disabled} />
      ) : type === "light" ? (
        <LightIcon fill={theme.colors.disabled} />
      ) : type === "temperature" ? (
        <TemperatureIcon fill={theme.colors.disabled} />
      ) : (
        <WaterPropertyIcon fill={theme.colors.disabled} />
      )}

      <S.TextContainer>
        <S.Title>
          {type === "calendar"
            ? "Frequência"
            : type === "light"
            ? "Iluminação"
            : type === "temperature"
            ? "Temperatura"
            : "Água"}
        </S.Title>
        <S.SubTitle>{title}</S.SubTitle>
      </S.TextContainer>
    </S.Wrapper>
  );
}
