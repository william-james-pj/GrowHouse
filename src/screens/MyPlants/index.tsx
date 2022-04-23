import React, { useState, useRef } from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Filter } from "../../components/Filter";
import { CardMyPlants } from "../../components/CardMyPlants";
import { ModalAdd } from "./ModalAdd";

import { useMyPlants } from "../../hooks/useMyPlants";

import { MyPlantsType } from "../../@types/types";

import * as S from "./styles";

export function MyPlants() {
  const [searchText, setSearchText] = useState("");
  const { myPlantsData } = useMyPlants();

  const flatList = useRef<FlatList<MyPlantsType>>(null);

  const renderRows = ({ item }: { item: MyPlantsType }) => {
    return <CardMyPlants plantItem={item} />;
  };

  const listEmpty = () => {
    return (
      <S.EmptyContainer>
        <S.EmptyIcon />
        <S.EmptyTitle>{"Seu jardim está vazio!"}</S.EmptyTitle>
        <S.EmptySubTitle>{"Adicione uma nova planta"}</S.EmptySubTitle>
      </S.EmptyContainer>
    );
  };

  return (
    <>
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
          ListEmptyComponent={listEmpty}
        />
      </S.Wrapper>
      <ModalAdd />
    </>
  );
}
