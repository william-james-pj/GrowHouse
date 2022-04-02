import React from "react";

import * as S from "./styles";

type HeaderProps = {
  title: String;
};

export function Header({ title }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
