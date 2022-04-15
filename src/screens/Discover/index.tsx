import React, { useState, useRef } from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Filter } from "../../components/Filter";
import { CardDiscover } from "../../components/CardDiscover";

import { useDiscover } from "../../hooks/useDiscover";

import { DiscoverType } from "../../@types/types";

import * as S from "./styles";

export function Discover() {
  const [searchText, setSearchText] = useState("");
  const { discoverData } = useDiscover();

  const flatList = useRef<FlatList<DiscoverType>>(null);

  const renderRows = ({ item }: { item: DiscoverType }) => {
    return <CardDiscover discoverItem={item} />;
  };

  return (
    <S.Wrapper>
      <Header title={"Descubra novas plantas"} />
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
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 25 }}
        data={discoverData}
        renderItem={renderRows}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <S.Separator></S.Separator>}
        ListFooterComponent={() => <S.FooterView></S.FooterView>}
        // ListEmptyComponent={}

        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-between",
        }}
      />
    </S.Wrapper>
  );
}
