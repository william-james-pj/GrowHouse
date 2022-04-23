import React, { useState } from "react";

import { RectButton } from "react-native-gesture-handler";

import { WaterIndicator } from "../WaterIndicator";
import { SeeMyPlant } from "../../screens/SeeMyPlant";

import { MyPlantsType } from "../../@types/types";

import * as S from "./styles";

type CardMyPlantsType = {
  plantItem: MyPlantsType;
};

export function CardMyPlants({ plantItem }: CardMyPlantsType) {
  const [isModalVisible, setModalVisible] = useState(false);

  const buttonPress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <S.Wrapper>
        <RectButton onPress={buttonPress}>
          <S.Row>
            <S.TextContainer>
              <S.Title>{plantItem.name}</S.Title>
              <S.SubTitle>{plantItem.surname}</S.SubTitle>
              <WaterIndicator />
            </S.TextContainer>
            <S.ImageContainer>
              <S.ImageBox>
                <S.Image source={{ uri: plantItem.imageUrl }} />
              </S.ImageBox>
            </S.ImageContainer>
          </S.Row>
        </RectButton>
      </S.Wrapper>
      <SeeMyPlant
        isModalVisible={isModalVisible}
        setModalVisible={() => setModalVisible(false)}
      />
    </>
  );
}
