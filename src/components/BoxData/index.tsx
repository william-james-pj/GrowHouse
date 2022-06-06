import React, { useState } from "react";

import SprinklerSVG from "../../assets/svg/Sprinkler.svg";
import HumiditySVG from "../../assets/svg/Humidity.svg";
import ReservoirSVG from "../../assets/svg/Reservoir.svg";

import { ToggleSwitch } from "../ToggleSwitch";

import * as S from "./styles";
import { useTheme } from "styled-components";

type BoxDataProps = {
  type: "irrigation" | "reservoir" | "humidity";
  title: String;
  value?: String;
  valueSwitch?: boolean;
  pressSwitch?: () => void;
};

export function BoxData({
  type,
  title,
  value,
  valueSwitch = false,
  pressSwitch = () => {},
}: BoxDataProps) {
  const theme = useTheme();

  const onPressSwitch = () => {
    pressSwitch();
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.BallContainer>
          <S.Ball>
            {type === "irrigation" ? (
              <SprinklerSVG fill={theme.colors.card} />
            ) : type === "reservoir" ? (
              <ReservoirSVG fill={theme.colors.card} />
            ) : (
              <HumiditySVG fill={theme.colors.card} />
            )}
          </S.Ball>
        </S.BallContainer>
        <S.SwitchContainer>
          {type === "irrigation" ? (
            <ToggleSwitch value={valueSwitch} onPress={onPressSwitch} />
          ) : null}
        </S.SwitchContainer>
      </S.Header>
      <S.Content>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Text>{value}</S.Text>
        </S.TextContainer>
      </S.Content>
    </S.Wrapper>
  );
}
