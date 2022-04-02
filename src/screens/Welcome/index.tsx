import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import MySVGImage from "../../assets/svg/welcome.svg";

import { ButtonLarge } from "../../components/ButtonLarge";

import { ScreenNavigationProp } from "../../@types/types";

import * as S from "./styles";

export function Welcome() {
  const usenavigation = useNavigation<ScreenNavigationProp>();
  return (
    <S.Wrapper>
      <S.Container>
        <MySVGImage />
        <S.TextContainer>
          <S.Title>GrowHouse</S.Title>
          <S.SubTitle>Cuide dos seus “verdes”</S.SubTitle>
        </S.TextContainer>
        <ButtonLarge
          onPress={() => {
            usenavigation.navigate("SignUp");
          }}
          text={"Iniciar"}
        />
      </S.Container>
      <S.Footer>
        <S.Row>
          <S.Acoount>Já tem uma conta?</S.Acoount>
          <S.Button>
            <BorderlessButton
              onPress={() => {
                usenavigation.navigate("Login");
              }}
            >
              <S.ButtonText>Conecte-se</S.ButtonText>
            </BorderlessButton>
          </S.Button>
        </S.Row>
      </S.Footer>
    </S.Wrapper>
  );
}
