import React from "react";
import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

import MoonSVG from "../../assets/svg/Moon.svg";
import ArrowRightSVG from "../../assets/svg/Arrow-right-from-bracket.svg";

type SettingOptionType = {
  title: String;
  type: "DarkMode" | "LogOff";
  onPress: () => void;
};

export function SettingOption({ title, type, onPress }: SettingOptionType) {
  return (
    <S.Wrapper>
      <S.Container>
        {type === "DarkMode" ? <MoonSVG /> : <ArrowRightSVG />}
        <S.Title>{title}</S.Title>
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
