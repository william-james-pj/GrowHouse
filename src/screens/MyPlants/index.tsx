import React, { useState, useRef } from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Filter } from "../../components/Filter";
import { CardMyPlants } from "../../components/CardMyPlants";

import { MyPlantsType } from "../../@types/types";

import * as S from "./styles";

export function MyPlants() {
  const [searchText, setSearchText] = useState("");

  const myPlantsData: MyPlantsType[] = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  const flatList = useRef<FlatList<MyPlantsType>>(null);

  const renderRows = ({ item }: { item: MyPlantsType }) => {
    return <CardMyPlants />;
  };

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
      <FlatList
        ref={flatList}
        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 25 }}
        data={myPlantsData}
        renderItem={renderRows}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <S.Separator></S.Separator>}
        ListFooterComponent={() => <S.FooterView></S.FooterView>}
        // ListEmptyComponent={}
      />
    </S.Wrapper>
  );
}
