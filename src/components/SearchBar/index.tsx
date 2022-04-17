import React from "react";
import { useTheme } from "styled-components";

import SearchIcon from "../../assets/svg/Search.svg";

import * as S from "./styles";

type SearchBarProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
};

export function SearchBar({
  placeholder,
  onChangeText,
  value,
}: SearchBarProps) {
  const theme = useTheme();

  const changeText = (text: string) => {
    onChangeText(text);
  };

  return (
    <S.Wrapper>
      <S.TextInput
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        value={value}
        onChangeText={changeText}
      />
      <S.IconContainer>
        <SearchIcon fill={theme.colors.disabled} />
      </S.IconContainer>
    </S.Wrapper>
  );
}
