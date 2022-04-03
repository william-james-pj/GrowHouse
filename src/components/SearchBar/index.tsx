import React from "react";

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
        <SearchIcon />
      </S.IconContainer>
    </S.Wrapper>
  );
}
