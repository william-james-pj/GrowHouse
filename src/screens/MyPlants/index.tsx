import React, { useState } from "react";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Filter } from "../../components/Filter";

import * as S from "./styles";

export function MyPlants() {
  const [searchText, setSearchText] = useState("");

  return (
    <S.Wrapper>
      <Header title={"Minhas plantas"} />
      <S.SearchContainer>
        <S.SearchBarContainer>
          <SearchBar
            placeholder={"Pesquise pelo nome"}
            onChangeText={setSearchText}
            value={searchText}
          />
        </S.SearchBarContainer>
        <S.FilterContainer>
          <Filter />
        </S.FilterContainer>
      </S.SearchContainer>
    </S.Wrapper>
  );
}
