import React from "react";

import SprinklerSVG from "../../assets/svg/Sprinkler.svg";
import HumiditySVG from "../../assets/svg/Humidity.svg";
import ReservoirSVG from "../../assets/svg/Reservoir.svg";

import * as S from "./styles";

type BoxDataProps = {
  type: "irrigation" | "reservoir" | "humidity";
  title: String;
  Value?: String;
};

export function BoxData({ type, title, Value }: BoxDataProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.BallContainer>
          <S.Ball>
            {type === "irrigation" ? (
              <SprinklerSVG />
            ) : type === "reservoir" ? (
              <ReservoirSVG />
            ) : (
              <HumiditySVG />
            )}
          </S.Ball>
        </S.BallContainer>
        <S.SwitchContainer></S.SwitchContainer>
      </S.Header>
      <S.Content>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <S.Text>{Value}</S.Text>
        </S.TextContainer>
      </S.Content>
    </S.Wrapper>
  );
}
