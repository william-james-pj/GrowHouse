import React, { useState } from "react";

import { RectButton } from "react-native-gesture-handler";

import { WaterIndicator } from "../WaterIndicator";
import { SeeMyPlant } from "../../screens/SeeMyPlant";

import * as S from "./styles";

export function CardMyPlants() {
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
              <S.Title>Orelha de Coelho</S.Title>
              <S.SubTitle>Apelido</S.SubTitle>
              <WaterIndicator />
            </S.TextContainer>
            <S.ImageContainer>
              <S.ImageBox>
                <S.Image source={require("../../assets/PlantaTest.png")} />
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
