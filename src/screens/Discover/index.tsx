import React, { useState, useRef, useEffect } from "react";
import { FlatList } from "react-native";

import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Filter } from "../../components/Filter";
import { CardDiscover } from "../../components/CardDiscover";

import { useDiscover } from "../../hooks/useDiscover";

import { DiscoverType } from "../../@types/types";

import * as S from "./styles";

export function Discover() {
  const { discoverData } = useDiscover();
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState<DiscoverType[]>([]);

  const flatList = useRef<FlatList<DiscoverType>>(null);

  const renderRows = ({ item }: { item: DiscoverType }) => {
    return <CardDiscover discoverItem={item} />;
  };

  const searchFilter = (text: string) => {
    const newData = discoverData.filter((item) => {
      const title = item.name.toUpperCase();
      const textFilter = text.toUpperCase();

      return title.indexOf(textFilter) > -1;
    });
    setFilterData(newData);
    setSearchText(text);
  };

  useEffect(() => {
    setFilterData(discoverData);

    return () => {};
  }, [discoverData]);

  return (
    <S.Wrapper>
      <Header title={"Descubra novas plantas"} />
      <S.SearchContainer>
        <S.SearchBarContainer>
          <SearchBar
            placeholder={"Pesquise pelo nome"}
            onChangeText={searchFilter}
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
        data={filterData}
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
