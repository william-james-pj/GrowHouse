import React from "react";
import { useNavigation } from "@react-navigation/core";

import { RectButton } from "react-native-gesture-handler";

import { DiscoverNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function CardDiscover() {
  const usenavigation = useNavigation<DiscoverNavigationProp>();

  const buttonPress = () => {
    usenavigation.navigate("SeeDiscover");
  };

  return (
    <S.Wrapper>
      <RectButton onPress={buttonPress}>
        <S.ImageContainer>
          <S.Image source={require("../../assets/PlantaTest.png")} />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Title>Orelha de Coelho</S.Title>
          <S.SubTitle>Opuntia microdasys</S.SubTitle>
        </S.TextContainer>
      </RectButton>
    </S.Wrapper>
  );
}
