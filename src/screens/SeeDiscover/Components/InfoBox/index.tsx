import React from "react";

import * as S from "./styles";

type InfoBoxProps = {
  title: String;
  type: "category" | "environment" | "size";
};

export function InfoBox({ type, title }: InfoBoxProps) {
  return (
    <S.Wrapper>
      <S.Title>
        {type === "category"
          ? "Categoria"
          : type === "environment"
          ? "Ambiente"
          : "Tamanho"}
      </S.Title>
      <S.SubTitle>{title}</S.SubTitle>
    </S.Wrapper>
  );
}
