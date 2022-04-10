import React from "react";

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
  return (
    <S.Wrapper>
      {type === "calendar" ? (
        <CalendarIcon />
      ) : type === "light" ? (
        <LightIcon />
      ) : type === "temperature" ? (
        <TemperatureIcon />
      ) : (
        <WaterPropertyIcon />
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
