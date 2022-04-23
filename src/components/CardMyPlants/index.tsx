import React, { useState } from "react";

import { RectButton, Swipeable } from "react-native-gesture-handler";

import { useMyPlants } from "../../hooks/useMyPlants";

import { WaterIndicator } from "../WaterIndicator";
import { SeeMyPlant } from "../../screens/SeeMyPlant";

import { MyPlantsType } from "../../@types/types";

import * as S from "./styles";

type CardMyPlantsType = {
  plantItem: MyPlantsType;
};

export function CardMyPlants({ plantItem }: CardMyPlantsType) {
  const { removePlant } = useMyPlants();
  const [isModalVisible, setModalVisible] = useState(false);

  const buttonPress = () => {
    setModalVisible(true);
  };

  const handleDelete = () => {
    removePlant(plantItem.id);
  };

  const rightSwipe = () => {
    return (
      <S.DeleteBox>
        <S.Trash />
      </S.DeleteBox>
    );
  };

  return (
    <>
      <S.Wrapper>
        <Swipeable
          renderRightActions={rightSwipe}
          onSwipeableRightOpen={handleDelete}
        >
          <S.ItemContainer>
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
          </S.ItemContainer>
        </Swipeable>
      </S.Wrapper>
      <SeeMyPlant
        isModalVisible={isModalVisible}
        setModalVisible={() => setModalVisible(false)}
        plantItem={plantItem}
      />
    </>
  );
}
