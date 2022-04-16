import React from "react";
import { ScrollView } from "react-native";

import { useDiscoverSelected } from "../../hooks/useDiscoverSelected";

import { BorderlessButton } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";

import ArrowLeftIcon from "../../assets/svg/ArrowLeft.svg";

import { InfoBox } from "./Components/InfoBox";
import { PropertyBox } from "./Components/PropertyBox";

import { DiscoverParamList } from "../../@types/types";

type SeeDiscoverProps = StackScreenProps<DiscoverParamList, "SeeDiscover">;

import * as S from "./styles";

export function SeeDiscover({ navigation }: SeeDiscoverProps) {
  const { discoverItem } = useDiscoverSelected();

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
        <S.Title>{discoverItem?.name}</S.Title>
        <S.SubTitle>{discoverItem?.scientificName}</S.SubTitle>
        <S.InfoContainer>
          <S.ImageContainer>
            <S.Image
              style={{ resizeMode: "cover" }}
              source={{ uri: discoverItem?.image }}
            />
          </S.ImageContainer>
          <S.InfoTextContainer>
            <InfoBox type="category" title={discoverItem?.category ?? ""} />
            <InfoBox
              type="environment"
              title={discoverItem?.environment ?? ""}
            />
            <InfoBox type="size" title={discoverItem?.size ?? ""} />
          </S.InfoTextContainer>
        </S.InfoContainer>
        <S.Description style={{ lineHeight: 20 }}>
          {discoverItem?.description}
        </S.Description>
        <S.PropertyContainer>
          <PropertyBox type="water" title={discoverItem?.water ?? ""} />
          <PropertyBox type="calendar" title={discoverItem?.frequency ?? ""} />
        </S.PropertyContainer>
        <S.PropertyContainer>
          <PropertyBox
            type="temperature"
            title={`${discoverItem?.temperature} °C` ?? ""}
          />
          <PropertyBox type="light" title={discoverItem?.lighting ?? ""} />
        </S.PropertyContainer>
      </S.Wrapper>
    </ScrollView>
  );
}
