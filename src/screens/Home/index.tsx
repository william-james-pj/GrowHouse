import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { BoxData } from "../../components/BoxData";

import { useDiscover } from "../../hooks/useDiscover";
import { useTheme } from "styled-components";

import { currentTime } from "../../utils/currentTime";

import BellSVG from "../../assets/svg/Bell.svg";

import * as S from "./styles";

export function Home() {
  const theme = useTheme();

  const [switchIsActive, setSwitchIsActive] = useState(true);
  const { loadData } = useDiscover();

  const pressSwitch = () => {
    setSwitchIsActive(!switchIsActive);
  };

  useEffect(() => {
    loadData();

    return () => {};
  }, []);

  return (
    <S.Wrapper>
      <Header title={currentTime()} />
      <S.TextSection>Alertas de notificações</S.TextSection>
      <S.BoxContainer>
        <S.BoxTextContainer>
          <S.BoxTitle>Nenhuma notificação</S.BoxTitle>
          <S.BoxSubTitle>Seu jardim está perfeito</S.BoxSubTitle>
        </S.BoxTextContainer>
        <S.BoxIconContainer>
          <S.BoxSquare>
            <BellSVG fill={theme.colors.secundary} />
          </S.BoxSquare>
        </S.BoxIconContainer>
      </S.BoxContainer>
      <S.TextSection>Dados dos sensores</S.TextSection>
      <S.DataContainer>
        <S.DataRow>
          <BoxData
            type="irrigation"
            title={"Irrigação automática"}
            valueSwitch={switchIsActive}
            pressSwitch={pressSwitch}
          />
          <BoxData
            type="reservoir"
            title={"Reservatório de água"}
            value={"80%"}
          />
        </S.DataRow>
        <S.DataRow>
          <BoxData type="humidity" title={"Humidade media"} value={"70%"} />
        </S.DataRow>
      </S.DataContainer>
    </S.Wrapper>
  );
}
