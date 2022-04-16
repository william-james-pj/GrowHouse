import React from "react";
import { useNavigation } from "@react-navigation/core";

import { RectButton } from "react-native-gesture-handler";

import { useDiscoverSelected } from "../../hooks/useDiscoverSelected";

import { DiscoverNavigationProp, DiscoverType } from "../../@types/types";

import * as S from "./styles";

type CardDiscoverType = {
  discoverItem: DiscoverType;
};

export function CardDiscover({ discoverItem }: CardDiscoverType) {
  const usenavigation = useNavigation<DiscoverNavigationProp>();
  const { setNewDiscoverItem } = useDiscoverSelected();

  const buttonPress = () => {
    setNewDiscoverItem(discoverItem);
    usenavigation.navigate("SeeDiscover");
  };

  return (
    <S.Wrapper>
      <RectButton onPress={buttonPress}>
        <S.ImageContainer>
          <S.Image source={{ uri: discoverItem.image }} />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Title>{discoverItem.name}</S.Title>
          <S.SubTitle>{discoverItem.scientificName}</S.SubTitle>
        </S.TextContainer>
      </RectButton>
    </S.Wrapper>
  );
}
