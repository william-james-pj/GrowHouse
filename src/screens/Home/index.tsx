import React, { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { BoxData } from "../../components/BoxData";

import { useDiscover } from "../../hooks/useDiscover";
import { useMyPlants } from "../../hooks/useMyPlants";
import { useTheme } from "styled-components";

import { currentTime } from "../../utils/currentTime";

import BellSVG from "../../assets/svg/Bell.svg";

import * as S from "./styles";

export function Home() {
  const theme = useTheme();

  const [switchIsActive, setSwitchIsActive] = useState(true);
  const [humidityAverage, setHumidityAverage] = useState("");
  const [notTitle, setNotTitle] = useState("");
  const [notSubTitle, setNotSubTitle] = useState("");
  const [reservoirValue, setReservoirValue] = useState("Sem sensor");
  const { loadData } = useDiscover();
  const { myPlantsData, loadMyPlants } = useMyPlants();

  const pressSwitch = () => {
    setSwitchIsActive(!switchIsActive);
  };

  const getReservoir = () => {
    if (myPlantsData.length === 0) {
      setReservoirValue("Sem sensor");
      return;
    }

    let aux = myPlantsData[0].values?.reservoir;

    if (!aux) return undefined;

    return parseFloat(aux);
  };

  const setReservoir = () => {
    let value = getReservoir();

    if (!value) {
      setReservoirValue("Sem sensor");
      return;
    }

    setReservoirValue(`${value.toFixed(0)}%`);
  };

  const getAverageHumidity = () => {
    let values = 0;
    let leng = 0;

    myPlantsData.forEach((item) => {
      if (item.values?.humidity) {
        values += parseFloat(item.values?.humidity);
        leng++;
      }
    });

    if (values === 0) return 0;

    return values / leng;
  };

  const setNotification = () => {
    let reservoir = getReservoir();
    let humidity = getAverageHumidity();

    if (!reservoir || humidity === 0) {
      setNotTitle("Nenhum sensor encontrado");
      setNotSubTitle("Seu jardim não está sendo monitorado");
      return;
    }

    if (reservoir <= 10) {
      setNotTitle("Seu jardim está em perigo");
      setNotSubTitle("Nível do reservatório em estado crítico");
    } else if (reservoir < 50) {
      setNotTitle("Fique atento ao seu jardim");
      setNotSubTitle("Nível do reservatório baixo");
    } else {
      setNotTitle("Nenhuma notificação");
      setNotSubTitle("Seu jardim está perfeito");
    }
  };

  const setHumidity = () => {
    let value = getAverageHumidity();

    if (value === 0) return "Sem sensor";

    return `${value.toFixed(0)}%`;
  };

  useEffect(() => {
    setHumidityAverage(setHumidity());
    setReservoir();
    setNotification();
    return () => {};
  }, [myPlantsData]);

  useEffect(() => {
    loadData();
    loadMyPlants();

    return () => {};
  }, []);

  return (
    <S.Wrapper>
      <Header title={currentTime()} />
      <S.TextSection>Alertas de notificações</S.TextSection>
      <S.BoxContainer>
        <S.BoxTextContainer>
          <S.BoxTitle>{notTitle}</S.BoxTitle>
          <S.BoxSubTitle>{notSubTitle}</S.BoxSubTitle>
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
            value={reservoirValue}
          />
        </S.DataRow>
        <S.DataRow>
          <BoxData
            type="humidity"
            title={"Umidade média"}
            value={humidityAverage}
          />
        </S.DataRow>
      </S.DataContainer>
    </S.Wrapper>
  );
}
