import React from "react";
import { ItemSelected } from "..";

import { DiscoverType } from "../../../../@types/types";

import * as S from "./styles";

type CardAddType = {
  discoverItem: DiscoverType;
  selectItem: (itemSelected: ItemSelected) => void;
  isSelected: boolean;
};

export function CardAdd({ discoverItem, selectItem, isSelected }: CardAddType) {
  const buttonPress = () => {
    selectItem({
      id: discoverItem.id,
      name: discoverItem.name,
      imgUrl: discoverItem.image,
    });
  };

  return (
    <S.Wrapper isSelected={isSelected}>
      <S.ButtonAdd onPress={buttonPress}>
        <S.ImageContainer>
          <S.Image source={{ uri: discoverItem.image }} />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Title>{discoverItem.name}</S.Title>
          <S.SubTitle>{discoverItem.scientificName}</S.SubTitle>
        </S.TextContainer>
      </S.ButtonAdd>
    </S.Wrapper>
  );
}
