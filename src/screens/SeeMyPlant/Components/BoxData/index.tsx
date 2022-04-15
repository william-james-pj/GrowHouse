import React from "react";

import { RectButton } from "react-native-gesture-handler";

import * as S from "./styles";

type BoxDataProps = {
  title: String;
};

export function BoxData({ title }: BoxDataProps) {
  return (
    <S.Wrapper>
      <RectButton onPress={() => {}}>
        <S.Content>
          <S.Title>{title}</S.Title>
        </S.Content>
      </RectButton>
    </S.Wrapper>
  );
}
