import React from "react";
import Modal from "react-native-modal";

import { RectButton } from "react-native-gesture-handler";
import { BoxData } from "./Components/BoxData";

import { WaterIndicator } from "../../components/WaterIndicator";
import InfoBookSVG from "../../assets/svg/InfoBook.svg";

import * as S from "./styles";

type SeeMyPlantProps = {
  isModalVisible: boolean;
  setModalVisible: () => void;
};

export function SeeMyPlant({
  isModalVisible,
  setModalVisible,
}: SeeMyPlantProps) {
  const toggleModal = () => {
    setModalVisible();
  };

  const handlePress = () => {};

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => toggleModal()}
      useNativeDriverForBackdrop
      swipeDirection={"down"}
      onSwipeComplete={() => toggleModal()}
    >
      <S.Wrapper style={{ flex: 1 }}>
        <S.ModalContainer>
          <S.Header>
            <S.TextContainer>
              <S.Title>Orelha de Coelho</S.Title>
              <S.SubTitle>Apelido</S.SubTitle>
            </S.TextContainer>
            <S.InfoContainer>
              <S.InfoButton>
                <RectButton onPress={handlePress}>
                  <S.Button>
                    <InfoBookSVG />
                  </S.Button>
                </RectButton>
              </S.InfoButton>
            </S.InfoContainer>
          </S.Header>
          <WaterIndicator />
          <S.SectionTitle>Irrigação automática</S.SectionTitle>
          <S.Content>
            <S.ClockContainer>
              <S.Text>Hórario</S.Text>
              <S.BoxClockContainer>
                <BoxData title={"10"} />
                <S.TwoDot>:</S.TwoDot>
                <BoxData title={"30"} />
              </S.BoxClockContainer>
            </S.ClockContainer>
            <S.DateContainer>
              <S.Text>Dias da semana</S.Text>
              <S.BoxDateContainer>
                <BoxData title={"D"} />
                <BoxData title={"S"} />
                <BoxData title={"T"} />
                <BoxData title={"Q"} />
                <BoxData title={"Q"} />
                <BoxData title={"S"} />
                <BoxData title={"S"} />
              </S.BoxDateContainer>
            </S.DateContainer>
          </S.Content>
          <S.Footer>
            <S.ButtonFooter>
              <RectButton onPress={() => {}}>
                <S.ButtonFooterContent>
                  <S.ButtonFooterText>Salvar</S.ButtonFooterText>
                </S.ButtonFooterContent>
              </RectButton>
            </S.ButtonFooter>
          </S.Footer>
        </S.ModalContainer>
      </S.Wrapper>
    </Modal>
  );
}
