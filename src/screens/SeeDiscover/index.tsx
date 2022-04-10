import React from "react";
import { ScrollView } from "react-native";

import { BorderlessButton } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";

import ArrowLeftIcon from "../../assets/svg/ArrowLeft.svg";

import { InfoBox } from "./Components/InfoBox";
import { PropertyBox } from "./Components/PropertyBox";

import { DiscoverParamList } from "../../@types/types";

type SeeDiscoverProps = StackScreenProps<DiscoverParamList, "SeeDiscover">;

import * as S from "./styles";

export function SeeDiscover({ navigation }: SeeDiscoverProps) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <S.Wrapper>
        <S.TopBar>
          <S.TopBarButton>
            <BorderlessButton
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ArrowLeftIcon />
            </BorderlessButton>
          </S.TopBarButton>
        </S.TopBar>
        <S.Title>Orelha de Coelho</S.Title>
        <S.SubTitle>Opuntia microdasys</S.SubTitle>
        <S.InfoContainer>
          <S.ImageContainer>
            <S.Image
              style={{ resizeMode: "cover" }}
              source={require("../../assets/PlantaTest.png")}
            />
          </S.ImageContainer>
          <S.InfoTextContainer>
            <InfoBox type="category" title={"Cactos e Suculentas"} />
            <InfoBox type="environment" title={"Exterior"} />
            <InfoBox type="size" title={"Pequeno"} />
          </S.InfoTextContainer>
        </S.InfoContainer>
        <S.Description style={{ lineHeight: 20 }}>
          Lorem ipsum dolor sit amet. Non tenetur recusandae et vero iure aut
          suscipit eaque est consequatur itaque eum nesciunt ullam 33 aperiam
          nihil et libero aliquid.
        </S.Description>
        <S.PropertyContainer>
          <PropertyBox type="water" title={"250 ml"} />
          <PropertyBox type="calendar" title={"1 / semana"} />
        </S.PropertyContainer>
        <S.PropertyContainer>
          <PropertyBox type="temperature" title={"15-24 °C"} />
          <PropertyBox type="light" title={"Baixa"} />
        </S.PropertyContainer>
      </S.Wrapper>
    </ScrollView>
  );
}
