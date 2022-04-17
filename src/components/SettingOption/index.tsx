import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { useTheme } from "styled-components";

import { ToggleSwitch } from "../ToggleSwitch";

import MoonSVG from "../../assets/svg/Moon.svg";
import ArrowRightSVG from "../../assets/svg/Arrow-right-from-bracket.svg";

import * as S from "./styles";

type SettingOptionType = {
  title: String;
  type: "DarkMode" | "LogOff";
  onPress: () => void;
  valueSwitch?: boolean;
};

export function SettingOption({
  title,
  type,
  onPress,
  valueSwitch = false,
}: SettingOptionType) {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.Container>
        {type === "DarkMode" ? (
          <MoonSVG fill={theme.colors.text} />
        ) : (
          <ArrowRightSVG fill={theme.colors.text} />
        )}
        <S.Title>{title}</S.Title>

        {type === "DarkMode" ? (
          <S.ToggleContainer>
            <ToggleSwitch value={valueSwitch} onPress={onPress} />
          </S.ToggleContainer>
        ) : (
          <S.ToggleContainer></S.ToggleContainer>
        )}
      </S.Container>
      {type === "LogOff" ? (
        <S.Button>
          <RectButton onPress={onPress}>
            <S.ButtonContent></S.ButtonContent>
          </RectButton>
        </S.Button>
      ) : (
        <S.Button></S.Button>
      )}
    </S.Wrapper>
  );
}
