import React, { useEffect } from "react";

import { Header } from "../../components/Header";
import { BoxData } from "../../components/BoxData";

import { useDiscover } from "../../hooks/useDiscover";

import { currentTime } from "../../utils/currentTime";

import BellSVG from "../../assets/svg/Bell.svg";

import * as S from "./styles";

export function Home() {
  const { loadData } = useDiscover();

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
            <BellSVG />
          </S.BoxSquare>
        </S.BoxIconContainer>
      </S.BoxContainer>
      <S.TextSection>Dados dos sensores</S.TextSection>
      <S.DataContainer>
        <S.DataRow>
          <BoxData type="irrigation" title={"Irrigação automática"} />
          <BoxData
            type="reservoir"
            title={"Reservatório de água"}
            Value={"80%"}
          />
        </S.DataRow>
        <S.DataRow>
          <BoxData type="humidity" title={"Humidade media"} Value={"70%"} />
        </S.DataRow>
      </S.DataContainer>
    </S.Wrapper>
  );
}
