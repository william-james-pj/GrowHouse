import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

// import MySVGImage from "../../assets/svg/Track.svg";

// import { ButtonLarge } from "../../components/ButtonLarge";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Welcome() {
  const usenavigation = useNavigation<ScreenNavigationProp>();
  return (
    <S.Wrapper>
      {/* <MySVGImage />
      <S.Title></S.Title>
      <S.SubTitle></S.SubTitle>
      <S.SubTitle></S.SubTitle>
      <ButtonLarge
        onPress={() => {
          usenavigation.navigate("SignUp");
        }}
        text={t("message:gettingStarted")}
      />
      <S.Row>
        <S.Acoount></S.Acoount>
        <S.Button>
          <BorderlessButton
            onPress={() => {
              usenavigation.navigate("Login");
            }}
          >
            <S.ButtonText></S.ButtonText>
          </BorderlessButton>
        </S.Button>
      </S.Row> */}
    </S.Wrapper>
  );
}
